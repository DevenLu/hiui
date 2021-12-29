
import React, { forwardRef } from 'react'
import { cx, getPrefixCls } from '@hi-ui/classname'
import { __DEV__ } from '@hi-ui/env'
import { IconProps } from '../../@types/props'

const _role = 'icon-question-circle-filled'
const _prefix = getPrefixCls(_role)

export const QuestionCircleFilled = forwardRef<SVGSVGElement | null, IconProps>(
  ({ prefixCls = _prefix, role = _role, className, children, style, onClick }, ref) => {
    const cls = cx(prefixCls, className)

    return (
      <svg className={cls} ref={ref} role={role} style={style} onClick={onClick}  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024" version="1.1"><path d="M512 85.333333c235.648 0 426.666667 191.018667 426.666667 426.666667s-191.018667 426.666667-426.666667 426.666667S85.333333 747.648 85.333333 512 276.352 85.333333 512 85.333333z m4.202667 576h-42.666667l-2.474667 0.149334a21.333333 21.333333 0 0 0-18.858666 21.184v42.666666l0.149333 2.496a21.333333 21.333333 0 0 0 21.184 18.837334h42.666667l2.496-0.149334a21.333333 21.333333 0 0 0 18.837333-21.184v-42.666666l-0.149333-2.496a21.333333 21.333333 0 0 0-21.184-18.837334z m-0.981334-383.146666c-64.426667 0-123.114667 31.36-148.224 95.36-1.066667 2.773333-2.24 6.229333-3.456 10.346666a21.333333 21.333333 0 0 0 17.408 27.157334l46.421334 6.698666 2.517333 0.213334a21.333333 21.333333 0 0 0 19.84-12.224c5.077333-10.773333 9.706667-18.346667 13.930667-22.741334a68.693333 68.693333 0 0 1 50.282666-21.12c28.437333 0 52.992 16.362667 52.992 45.12 0 40.448-30.506667 64.896-69.077333 77.824-2.197333 0.746667-4.736 1.493333-7.594667 2.261334a42.666667 42.666667 0 0 0-31.573333 41.642666l0.512 50.069334 0.170667 3.2c1.834667 21.056 19.498667 37.525333 40.981333 37.525333 22.613333 0 41.024-18.133333 41.365333-40.725333l0.64-42.325334 5.525334-1.749333c61.909333-20.48 108.266667-65.642667 108.266666-133.610667 0-66.026667-44.586667-122.922667-140.928-122.922666z" p-id="47541"></path></svg>
    )
  }
)

if (__DEV__) {
  QuestionCircleFilled.displayName = 'QuestionCircleFilled'
}
  