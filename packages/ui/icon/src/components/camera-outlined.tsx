
import React, { forwardRef } from 'react'
import { cx, getPrefixCls } from '@hi-ui/classname'
import { __DEV__ } from '@hi-ui/env'
import { IconProps } from '../@types/props'

const _role = 'icon-camera-outlined'
const _prefix = getPrefixCls(_role)

export const CameraOutlined = forwardRef<SVGSVGElement | null, IconProps>(
  ({ prefixCls = _prefix, role = _role, className, children, style, onClick }, ref) => {
    const cls = cx(prefixCls, className)

    return (
      <svg className={cls} ref={ref} role={role} style={style} onClick={onClick}  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024" version="1.1"><path d="M722.63 128a12 12 0 0 1 11.642 9.09L770 272h174a8 8 0 0 1 8 8v608a8 8 0 0 1-8 8H80a8 8 0 0 1-8-8V280a8 8 0 0 1 8-8h174l35.728-134.91a12 12 0 0 1 11.64-9.09h421.262z m-53.092 80H354.46l-37.998 144H152v464h720V352h-164.462l-38-144zM512 396c92.784 0 168 75.216 168 168s-75.216 168-168 168-168-75.216-168-168 75.216-168 168-168z m0 80c-48.6 0-88 39.4-88 88s39.4 88 88 88 88-39.4 88-88-39.4-88-88-88z" p-id="12625"></path></svg>
    )
  }
)

if (__DEV__) {
  CameraOutlined.displayName = 'CameraOutlined'
}
  