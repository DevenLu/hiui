
import React, { forwardRef } from 'react'
import { cx, getPrefixCls } from '@hi-ui/classname'
import { __DEV__ } from '@hi-ui/env'
import { IconProps } from '../@types/props'

const _role = 'icon-heart-outlined'
const _prefix = getPrefixCls(_role)

export const HeartOutlined = forwardRef<SVGSVGElement | null, IconProps>(
  ({ prefixCls = _prefix, role = _role, className, children, style, onClick }, ref) => {
    const cls = cx(prefixCls, className)

    return (
      <svg className={cls} ref={ref} role={role} style={style} onClick={onClick}  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024" version="1.1"><path d="M878.862 187.158c108.254 108.252 109.336 283.094 3.248 392.68l-3.248 3.3-355.85 356.372a15.982 15.982 0 0 1-22.216 0.416l-0.404-0.39-356.38-356.4c-109.348-109.346-109.348-286.632 0-395.98C244.28 86.886 401.684 78.566 511.44 162.196l2.52-1.904c109.632-81.594 265.398-72.64 364.902 26.868z m-56.568 56.568c-69.684-69.684-179.372-77.88-258.192-21.002l-2.222 1.626-50.64 38.27-48.286-36.794c-79.012-60.206-191.398-53.08-262.376 17.9-77.324 77.324-78.096 202.21-2.32 280.484l2.32 2.36 311.084 311.082 310.408-310.86 2.704-2.748 2.11-2.216c72.824-77.68 71.894-199.16-2.296-275.772l-2.294-2.33z" p-id="12895"></path></svg>
    )
  }
)

if (__DEV__) {
  HeartOutlined.displayName = 'HeartOutlined'
}
  