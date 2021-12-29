
import React, { forwardRef } from 'react'
import { cx, getPrefixCls } from '@hi-ui/classname'
import { __DEV__ } from '@hi-ui/env'
import { IconProps } from '../../@types/props'

const _role = 'icon-file-exe-outlined'
const _prefix = getPrefixCls(_role)

export const FileExeOutlined = forwardRef<SVGSVGElement | null, IconProps>(
  ({ prefixCls = _prefix, role = _role, className, children, style, onClick }, ref) => {
    const cls = cx(prefixCls, className)

    return (
      <svg className={cls} ref={ref} role={role} style={style} onClick={onClick}  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024" version="1.1"><path d="M627.498667 97.834667l-0.362667-0.384c5.973333 3.562667 11.52 7.893333 16.533333 12.885333l205.994667 205.994667c5.013333 5.013333 9.322667 10.56 12.885333 16.533333a41.813333 41.813333 0 0 1 11.733334 35.882667c0.256 2.624 0.384 5.269333 0.384 7.936V810.666667a128 128 0 0 1-128 128H277.333333a128 128 0 0 1-128-128V213.333333a128 128 0 0 1 128-128h305.984c2.666667 0 5.333333 0.128 7.978667 0.362667l0.64-0.064a41.749333 41.749333 0 0 1 35.562667 12.202667zM554.666667 170.666667H277.333333a42.666667 42.666667 0 0 0-42.56 39.466666L234.666667 213.333333v597.333334a42.666667 42.666667 0 0 0 39.466666 42.56L277.333333 853.333333h469.333334a42.666667 42.666667 0 0 0 42.56-39.466666L789.333333 810.666667V405.333333h-192a42.666667 42.666667 0 0 1-42.56-39.466666L554.666667 362.666667l-0.021334-192z m-175.146667 393.450666c11.306667 0 21.525333 2.133333 30.613333 6.4 9.066667 4.224 16.576 10.944 22.485334 20.117334 5.333333 8.064 8.789333 17.450667 10.389333 28.117333 0.917333 6.250667 1.28 15.253333 1.109333 27.008h-93.226666l0.256 3.968c1.130667 11.562667 5.333333 19.84 12.586666 24.768 4.928 3.413333 10.858667 5.12 17.770667 5.12 7.338667 0 13.290667-2.069333 17.877333-6.250667 2.496-2.24 4.693333-5.376 6.613334-9.365333h36.373333l-0.490667 3.029333c-1.514667 7.104-5.546667 14.293333-12.117333 21.589334-11.669333 13.248-28.010667 19.882667-49.002667 19.882666-17.344 0-32.64-5.589333-45.866666-16.746666-13.269333-11.178667-19.882667-29.333333-19.882667-54.506667 0-23.573333 5.973333-41.664 17.92-54.250667 11.968-12.586667 27.498667-18.88 46.570667-18.88z m284.736 0c11.328 0 21.546667 2.133333 30.613333 6.4 9.088 4.224 16.597333 10.944 22.506667 20.117334 5.333333 8.064 8.789333 17.450667 10.368 28.117333 0.917333 6.250667 1.28 15.253333 1.130667 27.008h-93.248l0.256 3.968c1.130667 11.562667 5.333333 19.84 12.608 24.768 4.906667 3.413333 10.837333 5.12 17.749333 5.12 7.338667 0 13.312-2.069333 17.877333-6.250667 2.517333-2.24 4.714667-5.376 6.613334-9.365333h36.394666l-0.490666 3.029333c-1.536 7.104-5.568 14.293333-12.138667 21.589334-11.669333 13.248-27.989333 19.882667-49.002667 19.882666-17.322667 0-32.618667-5.589333-45.866666-16.746666-13.248-11.178667-19.882667-29.333333-19.882667-54.506667 0-23.573333 5.973333-41.664 17.941333-54.250667 11.946667-12.586667 27.477333-18.88 46.570667-18.88z m-163.882667 3.882667l22.762667 39.509333 22.229333-39.509333h42.389334l-44.757334 66.368L589.482667 704h-44.373334l-23.509333-40.874667L497.984 704h-43.264l46.506667-68.992-44.501334-67.008h43.626667z m-120.874666 25.493333c-8.256 0-14.634667 2.581333-19.2 7.765334-4.522667 5.162667-7.381333 12.16-8.533334 20.992h55.36c-0.576-9.408-3.434667-16.554667-8.554666-21.44a26.581333 26.581333 0 0 0-19.072-7.317334z m284.757333 0c-8.256 0-14.656 2.581333-19.2 7.765334-4.544 5.162667-7.381333 12.16-8.554667 20.992h55.381334c-0.597333-9.408-3.434667-16.554667-8.576-21.44a26.581333 26.581333 0 0 0-19.050667-7.317334zM640 231.04V320h88.981333L640 231.018667z" p-id="39465"></path></svg>
    )
  }
)

if (__DEV__) {
  FileExeOutlined.displayName = 'FileExeOutlined'
}
  