import { PropsWithChildren, useState } from "react"
import { ErrorType, FieldErrorType, FormItemProps, FormItemTipProps } from "./interface"
import { Control } from "./Control"
import { Grid, RowProps } from "../Grid"
import { useFormContext } from "./context"

import { classNames as cls, getPrefix } from "../../utils"

import "./styles/FormItem.less"
import { Space } from "../Space"
import { FormLabel } from "./FormLabel"

const { Row, Col } = Grid

function FormItemTip(props: FormItemTipProps) {
  const {
    prefixCls,
    type,
    tips
  } = props
  
  // 派生数据
  const classNames = cls(
    prefixCls,
    {
      [`${prefixCls}-${type}`]: type
    }
  ) 

  return (
    <div className={classNames}>
      {
        tips?.map((tip, index) => {
          return (
            <p className={`${prefixCls}-${type}-item`} key={`${tip.message} ${index}`}>{tip.message}</p>
          )
        })
      }
    </div>
  )
}

export const FormItem = (props: PropsWithChildren<FormItemProps>) => {

  // props
  const {
    label,
    labelAlign: labelAlignProps,
    layout: layoutProps,
    labelCol: labelColProps,
    wrapperCol: wrapperColProps,
    requiredSymbol: requiredSymbolProps,
    colon: colonProps,
    ...rest
  } = props
  // status
  const [errors, setErrors] = useState<FieldErrorType>()


  // context
  const {
    labelAlign,
    labelCol,
    wrapperCol,
    layout,
    requiredSymbol,
    colon
  } = useFormContext()

  // 合并 context 传递数据和 props 传递的数据
  const mergedLabelAlign = labelAlignProps || labelAlign
  const mergedLayout = layoutProps || layout
  const mergedLabelCol = labelColProps || labelCol
  const mergedWrapperCol = wrapperColProps || wrapperCol
  const mergedRequiredSymbol = requiredSymbolProps || requiredSymbol
  const mergedColon = colonProps || colon


  // class names
  const prefix = getPrefix("form-item")
  const classNames = cls(
      prefix,
      {
        [`${prefix}-mergedLayout-${mergedLayout}`]: mergedLayout
      }
  )

  // 派生数据
  const rowProps: RowProps = {
    align: mergedLayout === "inline" ? "start" : undefined,
    justify: mergedLayout === "inline" ? "flex-start" : undefined,
  }

  const validateStatus = computeValidateStatus(
    props.validateStatus, 
    props.field ? errors?.[props.field] : []
  )

  // function
  function handleError(_error: FieldErrorType) {
    if (!_error || !props.field)
      return

    setErrors(_error)
  }

  // 计算校验状态
  function computeValidateStatus (
    status: FormItemProps['validateStatus'],
    _errors: ErrorType[] | undefined,
  ) {
    if(status)
      return status

    if(_errors?.length) {
      return 'error'
    }

    return undefined
  }

  return (
      <Row
          {...rowProps}
          className={classNames}
      >
        <Col
            {...mergedLabelCol}
            className={cls(
                mergedLabelCol?.className,
                `${prefix}-label`,
                `${prefix}-label-${mergedLabelAlign}`
            )}
        >
          <FormLabel 
            prefix={prefix}
            label={label}
            requiredSymbol={mergedRequiredSymbol}
            rules={props.rules}
            colon={mergedColon}
          />
        </Col>
        <Col
            {...mergedWrapperCol}
            className={cls(
                mergedWrapperCol?.className,
                `${prefix}-value`
            )}
        >
          <Space direction="vertical">
            <Control
              {...rest}
              validateStatus={validateStatus}
              onError={handleError}
            />
            <FormItemTip 
              type="error"
              tips={errors?.[props.field!] || []} 
              prefixCls={`${prefix}-tips`}  
            />
          </Space>
        </Col>
      </Row>
  )
}
