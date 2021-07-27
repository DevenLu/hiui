
import React, { forwardRef } from 'react'
import { cx, getPrefixCls } from '@hi-ui/classname'
import { __DEV__ } from '@hi-ui/env'
import { IconProps } from '../@types/props'

const _role = 'icon-zoom-in-outlined'
const _prefix = getPrefixCls(_role)

export const ZoomInOutlined = forwardRef<SVGSVGElement | null, IconProps>(
  ({ prefixCls = _prefix, role = _role, className, children, style, onClick }, ref) => {
    const cls = cx(prefixCls, className)

    return (
      <svg className={cls} ref={ref} role={role} style={style} onClick={onClick}  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024" version="1.1"><path d="M179.158 179.158c156.21-156.21 409.474-156.21 565.684 0 146.664 146.662 155.628 378.88 26.89 536l167.89 167.896a8 8 0 0 1 0 11.314l-45.254 45.254a8 8 0 0 1-11.314 0l-167.892-167.892c-157.12 128.74-389.34 119.776-536.004-26.888-156.21-156.21-156.21-409.474 0-565.684z m56.568 56.568c-124.968 124.968-124.968 327.58 0 452.548 124.968 124.968 327.58 124.968 452.548 0 124.968-124.968 124.968-327.58 0-452.548-124.968-124.968-327.58-124.968-452.548 0zM494 294a8 8 0 0 1 8 8l-0.002 119.998L622 422a8 8 0 0 1 8 8v64a8 8 0 0 1-8 8l-120.002-0.002L502 622a8 8 0 0 1-8 8h-64a8 8 0 0 1-8-8l-0.002-120.002L302 502a8 8 0 0 1-8-8v-64a8 8 0 0 1 8-8l119.998-0.002L422 302a8 8 0 0 1 8-8h64z" p-id="13575"></path></svg>
    )
  }
)

if (__DEV__) {
  ZoomInOutlined.displayName = 'ZoomInOutlined'
}
  