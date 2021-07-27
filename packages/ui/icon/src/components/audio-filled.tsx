
import React, { forwardRef } from 'react'
import { cx, getPrefixCls } from '@hi-ui/classname'
import { __DEV__ } from '@hi-ui/env'
import { IconProps } from '../@types/props'

const _role = 'icon-audio-filled'
const _prefix = getPrefixCls(_role)

export const AudioFilled = forwardRef<SVGSVGElement | null, IconProps>(
  ({ prefixCls = _prefix, role = _role, className, children, style, onClick }, ref) => {
    const cls = cx(prefixCls, className)

    return (
      <svg className={cls} ref={ref} role={role} style={style} onClick={onClick}  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024" version="1.1"><path d="M272 460c0 132.548 107.452 240 240 240s240-107.452 240-240h80c0 163.184-122.146 297.838-279.996 317.524L552 956a8 8 0 0 1-8 8h-64a8 8 0 0 1-8-8l-0.002-178.476C314.146 757.84 192 623.184 192 460h80zM512 60c110.456 0 200 89.544 200 200v194c0 110.456-89.544 200-200 200s-200-89.544-200-200v-194c0-110.456 89.544-200 200-200z" p-id="11685"></path></svg>
    )
  }
)

if (__DEV__) {
  AudioFilled.displayName = 'AudioFilled'
}
  