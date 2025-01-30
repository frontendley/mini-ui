import { PropsWithChildren } from "react"
import { FormItemProps } from "./interface"
import { Control } from "./Control"
import { Grid, RowProps } from "../Grid"
import { useFormContext } from "./context"

import { classNames as cls, getPrefix } from "../../utils"

import "./styles/FormItem.less"

const { Row, Col } = Grid

export const FormItem = (props: PropsWithChildren<FormItemProps>) => {

  // props
  const {
    label,
    ...rest
  } = props

  // context
  const { 
    labelCol,
    wrapperCol,
    layout 
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
  const rowProps: RowProps = {
    align: layout === "inline" ? "start" : undefined,
    justify: layout === "inline" ? "flex-start" : undefined,
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
            `${prefix}-label`
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
          <Control {...rest} />
        </Col>
      </Row>
  )
}
