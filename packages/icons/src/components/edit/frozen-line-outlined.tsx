
import React, { forwardRef } from 'react'
import { cx, getPrefixCls } from '@hi-ui/classname'
import { __DEV__ } from '@hi-ui/env'
import { IconProps } from '../../@types/props'

const _role = 'icon-frozen-line-outlined'
const _prefix = getPrefixCls(_role)

export const FrozenLineOutlined = forwardRef<SVGSVGElement | null, IconProps>(
  ({ prefixCls = _prefix, role = _role, className, children, style, onClick }, ref) => {
    const cls = cx(prefixCls, className)

    return (
      <svg className={cls} ref={ref} role={role} style={style} onClick={onClick}  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024" version="1.1"><path d="M917.333333 789.333333a128 128 0 0 1-128 128H234.666667a128 128 0 0 1-128-128V234.666667a128 128 0 0 1 128-128h554.666666a128 128 0 0 1 128 128v554.666666zM341.333333 341.333333V192h-106.666666a42.666667 42.666667 0 0 0-42.56 39.466667L192 234.666667v106.666666h149.333333z m490.666667 448V426.666667H192v362.666666a42.666667 42.666667 0 0 0 39.466667 42.56L234.666667 832h554.666666a42.666667 42.666667 0 0 0 42.56-39.466667L832 789.333333zM426.666667 341.333333h170.666666V192h-170.666666v149.333333z m256 0h149.333333v-106.666666a42.666667 42.666667 0 0 0-39.466667-42.56L789.333333 192h-106.666666v149.333333z" p-id="45136"></path></svg>
    )
  }
)

if (__DEV__) {
  FrozenLineOutlined.displayName = 'FrozenLineOutlined'
}
  