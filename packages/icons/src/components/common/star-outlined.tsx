
import React, { forwardRef } from 'react'
import { cx, getPrefixCls } from '@hi-ui/classname'
import { __DEV__ } from '@hi-ui/env'
import { IconProps } from '../../@types/props'

const _role = 'icon-star-outlined'
const _prefix = getPrefixCls(_role)

export const StarOutlined = forwardRef<SVGSVGElement | null, IconProps>(
  ({ prefixCls = _prefix, role = _role, className, children, style, onClick }, ref) => {
    const cls = cx(prefixCls, className)

    return (
      <svg className={cls} ref={ref} role={role} style={style} onClick={onClick}  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024" version="1.1"><path d="M454.613333 147.882667l-90.090666 182.485333-201.386667 29.269333a64 64 0 0 0-36.608 18.666667l-2.837333 3.114667a64 64 0 0 0 3.989333 87.381333l145.706667 142.037333-34.389334 200.597334a64 64 0 0 0 6.442667 40.597333l1.92 3.413333a64 64 0 0 0 84.501333 23.466667L512 784.192l180.138667 94.72a64 64 0 0 0 40.597333 6.421333l3.690667-0.746666a64 64 0 0 0 48.576-73.152l-34.410667-200.597334 145.728-142.037333a64 64 0 0 0 18.666667-36.629333l0.426666-3.733334a64 64 0 0 0-54.549333-68.8l-201.408-29.269333-90.069333-182.485333a64 64 0 0 0-114.773334 0zM512 224.405333l80.853333 163.84 1.685334 3.072a42.666667 42.666667 0 0 0 30.442666 20.266667l180.821334 26.282667-130.837334 127.530666-2.389333 2.56a42.666667 42.666667 0 0 0-9.877333 35.2l30.869333 180.096-161.706667-85.013333-3.456-1.621333a42.666667 42.666667 0 0 0-36.266666 1.621333l-161.728 85.013333 30.890666-180.074666 0.448-3.477334a42.666667 42.666667 0 0 0-12.714666-34.304l-130.858667-127.530666 180.842667-26.261334a42.666667 42.666667 0 0 0 32.128-23.36L512 224.426667z" p-id="38925"></path></svg>
    )
  }
)

if (__DEV__) {
  StarOutlined.displayName = 'StarOutlined'
}
  