import { PropsWithChildren, useState } from "react"
import { ErrorType, FieldErrorType, FormItemProps, FormItemTipProps } from "./interface"
import { Control } from "./Control"
import { Grid, RowProps } from "../Grid"
import { useFormContext } from "./context"

import { classNames as cls, getPrefix } from "../../utils"

import "./styles/FormItem.less"
import { Space } from "../Space"

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
  } = useFormContext()


  // class names
  const prefix = getPrefix("form-item")
  const classNames = cls(
      prefix,
      {
        [`${prefix}-layout-${layout}`]: layout
      }
  )

  // 派生数据
  const mergedLabelAlign = labelAlignProps || labelAlign
  const rowProps: RowProps = {
    align: layout === "inline" ? "start" : undefined,
    justify: layout === "inline" ? "flex-start" : undefined,
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
            {...labelCol}
            className={cls(
                labelCol?.className,
                `${prefix}-label`,
                `${prefix}-label-${mergedLabelAlign}`
            )}
        >
          <label>{label ? label + ": " : label} </label>
        </Col>
        <Col
            {...wrapperCol}
            className={cls(
                wrapperCol?.className,
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
