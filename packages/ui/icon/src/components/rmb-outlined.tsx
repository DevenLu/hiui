
import React, { forwardRef } from 'react'
import { cx, getPrefixCls } from '@hi-ui/classname'
import { __DEV__ } from '@hi-ui/env'
import { IconProps } from '../@types/props'

const _role = 'icon-rmb-outlined'
const _prefix = getPrefixCls(_role)

export const RmbOutlined = forwardRef<SVGSVGElement | null, IconProps>(
  ({ prefixCls = _prefix, role = _role, className, children, style, onClick }, ref) => {
    const cls = cx(prefixCls, className)

    return (
      <svg className={cls} ref={ref} role={role} style={style} onClick={onClick}  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024" version="1.1"><path d="M512 64c247.424 0 448 200.576 448 448S759.424 960 512 960 64 759.424 64 512 264.576 64 512 64z m0 80C308.76 144 144 308.76 144 512s164.76 368 368 368 368-164.76 368-368S715.24 144 512 144zM613.622 301.656a8 8 0 0 1 10.996-0.3l0.318 0.3 45.254 45.256a8 8 0 0 1 0.302 10.994l-0.3 0.32L588.412 440H684a8 8 0 0 1 8 8v64a8 8 0 0 1-8 8h-132v50h132a8 8 0 0 1 8 8v64a8 8 0 0 1-8 8h-132.002l0.002 90a8 8 0 0 1-8 8h-64a8 8 0 0 1-8-8l-0.002-90H340a8 8 0 0 1-8-8v-64a8 8 0 0 1 8-8h132v-50h-132a8 8 0 0 1-8-8v-64a8 8 0 0 1 8-8h97.432l-81.776-81.774a8 8 0 0 1 0-11.314l45.256-45.256a8 8 0 0 1 11.314 0l100.698 100.7 100.7-100.7z" p-id="13115"></path></svg>
    )
  }
)

if (__DEV__) {
  RmbOutlined.displayName = 'RmbOutlined'
}
  