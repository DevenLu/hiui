
import React, { forwardRef } from 'react'
import { cx, getPrefixCls } from '@hi-ui/classname'
import { __DEV__ } from '@hi-ui/env'
import { IconProps } from '../@types/props'

const _role = 'icon-man-outlined'
const _prefix = getPrefixCls(_role)

export const ManOutlined = forwardRef<SVGSVGElement | null, IconProps>(
  ({ prefixCls = _prefix, role = _role, className, children, style, onClick }, ref) => {
    const cls = cx(prefixCls, className)

    return (
      <svg className={cls} ref={ref} role={role} style={style} onClick={onClick}  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024" version="1.1"><path d="M172.588 851.412c-117.156-117.158-117.156-307.108 0-424.264 106.096-106.096 271.888-116.114 389.256-30.052L767.972 190.974a8 8 0 0 1 11.314 0l45.256 45.254a8 8 0 0 1 0 11.314L619.548 452.536c93.898 117.776 86.334 289.846-22.696 398.876-117.156 117.156-307.106 117.156-424.264 0z m56.57-56.57c85.914 85.916 225.21 85.916 311.126 0 85.916-85.914 85.916-225.21 0-311.126-85.916-85.916-225.212-85.916-311.126 0-85.916 85.916-85.916 225.212 0 311.126zM850.718 421.282a8 8 0 0 1-8 8h-64a8 8 0 0 1-8-8v-167.998h-168a8 8 0 0 1-8-8v-64a8 8 0 0 1 8-8h240a8 8 0 0 1 8 8v240z" p-id="12985"></path></svg>
    )
  }
)

if (__DEV__) {
  ManOutlined.displayName = 'ManOutlined'
}
  