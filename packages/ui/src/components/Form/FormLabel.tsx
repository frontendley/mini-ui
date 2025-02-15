import { Fragment } from 'react'
import { FormItemProps } from "./interface";
import { isBoolean, isObject } from 'lodash-es';

interface FormLabelProps 
  extends Pick<FormItemProps, 'label' | 'requiredSymbol' | 'rules' | 'colon'> {
    prefix: string;
  }

export function FormLabel(props: FormLabelProps) {
  const {
    prefix,
    label,
    requiredSymbol,
    rules,
    colon
  } = props

  // 派生数据
  const isRequired = rules?.some(i => i.required)
  const requiredSymbolPosition = isObject(requiredSymbol) ? requiredSymbol.position : "start"

  const symbolIcon = isRequired && requiredSymbol && (
    <strong className={`${prefix}-symbol`}>
      <svg fill="currentColor" viewBox="0 0 1024 1024" width="1em" height="1em">
        <path d="M583.338667 17.066667c18.773333 0 34.133333 15.36 34.133333 34.133333v349.013333l313.344-101.888a34.133333 34.133333 0 0 1 43.008 22.016l42.154667 129.706667a34.133333 34.133333 0 0 1-21.845334 43.178667l-315.733333 102.4 208.896 287.744a34.133333 34.133333 0 0 1-7.509333 47.786666l-110.421334 80.213334a34.133333 34.133333 0 0 1-47.786666-7.509334L505.685333 706.218667 288.426667 1005.226667a34.133333 34.133333 0 0 1-47.786667 7.509333l-110.421333-80.213333a34.133333 34.133333 0 0 1-7.509334-47.786667l214.186667-295.253333L29.013333 489.813333a34.133333 34.133333 0 0 1-22.016-43.008l42.154667-129.877333a34.133333 34.133333 0 0 1 43.008-22.016l320.512 104.106667L412.672 51.2c0-18.773333 15.36-34.133333 34.133333-34.133333h136.533334z" />
      </svg>
  </strong>
  )
  return (
    <Fragment>
      {
        requiredSymbolPosition === 'start' && symbolIcon
      }
      <label>
        {label} 
      </label>
      {colon && label &&  (isBoolean(colon) ? " : " : colon)}
      {
        requiredSymbolPosition === 'end' && symbolIcon
      }
    </Fragment>
  )
}
