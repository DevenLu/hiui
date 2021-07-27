
import React, { forwardRef } from 'react'
import { cx, getPrefixCls } from '@hi-ui/classname'
import { __DEV__ } from '@hi-ui/env'
import { IconProps } from '../@types/props'

const _role = 'icon-calculator-outlined'
const _prefix = getPrefixCls(_role)

export const CalculatorOutlined = forwardRef<SVGSVGElement | null, IconProps>(
  ({ prefixCls = _prefix, role = _role, className, children, style, onClick }, ref) => {
    const cls = cx(prefixCls, className)

    return (
      <svg className={cls} ref={ref} role={role} style={style} onClick={onClick}  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024" version="1.1"><path d="M904 112a8 8 0 0 1 8 8v784a8 8 0 0 1-8 8H120a8 8 0 0 1-8-8V120a8 8 0 0 1 8-8h784z m-72 80H192v640h640V192z m-107.774 362.52l45.254 45.254a8 8 0 0 1 0 11.314L718.568 662l50.912 50.912a8 8 0 0 1 0 11.314l-45.254 45.254a8 8 0 0 1-11.314 0L662 718.568l-50.912 50.912a8 8 0 0 1-11.314 0l-45.254-45.254a8 8 0 0 1 0-11.314l50.91-50.914-50.91-50.91a8 8 0 0 1 0-11.314l45.254-45.254a8 8 0 0 1 11.314 0L662 605.432l50.912-50.912a8 8 0 0 1 11.314 0zM466 682a8 8 0 0 1 8 8v64a8 8 0 0 1-8 8H258a8 8 0 0 1-8-8v-64a8 8 0 0 1 8-8h208z m0-120a8 8 0 0 1 8 8v64a8 8 0 0 1-8 8H258a8 8 0 0 1-8-8v-64a8 8 0 0 1 8-8h208z m-72-320a8 8 0 0 1 8 8v72h72a8 8 0 0 1 8 8v64a8 8 0 0 1-8 8h-72v72a8 8 0 0 1-8 8h-64a8 8 0 0 1-8-8l-0.002-72H250a8 8 0 0 1-8-8v-64a8 8 0 0 1 8-8h72v-72a8 8 0 0 1 8-8h64z m380 80a8 8 0 0 1 8 8v64a8 8 0 0 1-8 8H550a8 8 0 0 1-8-8v-64a8 8 0 0 1 8-8h224z" p-id="12645"></path></svg>
    )
  }
)

if (__DEV__) {
  CalculatorOutlined.displayName = 'CalculatorOutlined'
}
  