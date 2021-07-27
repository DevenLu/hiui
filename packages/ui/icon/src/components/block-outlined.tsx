
import React, { forwardRef } from 'react'
import { cx, getPrefixCls } from '@hi-ui/classname'
import { __DEV__ } from '@hi-ui/env'
import { IconProps } from '../@types/props'

const _role = 'icon-block-outlined'
const _prefix = getPrefixCls(_role)

export const BlockOutlined = forwardRef<SVGSVGElement | null, IconProps>(
  ({ prefixCls = _prefix, role = _role, className, children, style, onClick }, ref) => {
    const cls = cx(prefixCls, className)

    return (
      <svg className={cls} ref={ref} role={role} style={style} onClick={onClick}  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024" version="1.1"><path d="M656 96a8 8 0 0 1 8 8v256h256a8 8 0 0 1 8 8v552a8 8 0 0 1-8 8H368a8 8 0 0 1-8-8V664H104a8 8 0 0 1-8-8V104a8 8 0 0 1 8-8h552z m192 344h-184v216a8 8 0 0 1-8 8H440v184h408V440zM584 176H176v408h184V368a8 8 0 0 1 8-8h216V176z m0 264h-144v144h144v-144z" p-id="12605"></path></svg>
    )
  }
)

if (__DEV__) {
  BlockOutlined.displayName = 'BlockOutlined'
}
  