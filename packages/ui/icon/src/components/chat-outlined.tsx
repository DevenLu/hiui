
import React, { forwardRef } from 'react'
import { cx, getPrefixCls } from '@hi-ui/classname'
import { __DEV__ } from '@hi-ui/env'
import { IconProps } from '../@types/props'

const _role = 'icon-chat-outlined'
const _prefix = getPrefixCls(_role)

export const ChatOutlined = forwardRef<SVGSVGElement | null, IconProps>(
  ({ prefixCls = _prefix, role = _role, className, children, style, onClick }, ref) => {
    const cls = cx(prefixCls, className)

    return (
      <svg className={cls} ref={ref} role={role} style={style} onClick={onClick}  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024" version="1.1"><path d="M824 210a8 8 0 0 1 8 8v540a8 8 0 0 1-8 8H516.374l-209.1 159.316a12 12 0 0 1-6.712 2.44l-0.562 0.014a12 12 0 0 1-11.992-11.55l-0.008-0.45V766H80a8 8 0 0 1-8-8V218a8 8 0 0 1 8-8h744z m-72 80H152v396h216v92.47L489.37 686H752V290z m-444 124c4.42 0 8 2.93 8 6.546v130.908c0 3.616-3.58 6.546-8 6.546h-64c-4.42 0-8-2.93-8-6.546v-130.908c0-3.616 3.58-6.546 8-6.546h64z m176 0c4.42 0 8 2.93 8 6.546v130.908c0 3.616-3.58 6.546-8 6.546h-64c-4.42 0-8-2.93-8-6.546v-130.908c0-3.616 3.58-6.546 8-6.546h64z m176 0c4.42 0 8 2.93 8 6.546v130.908c0 3.616-3.58 6.546-8 6.546h-64c-4.42 0-8-2.93-8-6.546v-130.908c0-3.616 3.58-6.546 8-6.546h64zM944 88a8 8 0 0 1 8 8v524a8 8 0 0 1-8 8h-64a8 8 0 0 1-8-8V168H220a8 8 0 0 1-8-8V96a8 8 0 0 1 8-8h724z" p-id="12675"></path></svg>
    )
  }
)

if (__DEV__) {
  ChatOutlined.displayName = 'ChatOutlined'
}
  