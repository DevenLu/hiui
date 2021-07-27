
import React, { forwardRef } from 'react'
import { cx, getPrefixCls } from '@hi-ui/classname'
import { __DEV__ } from '@hi-ui/env'
import { IconProps } from '../@types/props'

const _role = 'icon-eye-invisible-outlined'
const _prefix = getPrefixCls(_role)

export const EyeInvisibleOutlined = forwardRef<SVGSVGElement | null, IconProps>(
  ({ prefixCls = _prefix, role = _role, className, children, style, onClick }, ref) => {
    const cls = cx(prefixCls, className)

    return (
      <svg className={cls} ref={ref} role={role} style={style} onClick={onClick}  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024" version="1.1"><path d="M847.168 131.576l45.256 45.256a8 8 0 0 1 0 11.314L188.144 892.424a8 8 0 0 1-11.312 0l-45.256-45.256a8 8 0 0 1 0-11.314l67.968-67.968C116.378 703.836 53.45 614.8 22 512.006 86.122 302.418 281.1 150 511.674 150c88.344 0 171.46 22.374 243.994 61.766l80.186-80.19a8 8 0 0 1 11.314 0z m9.616 152.21c66.82 61.006 117.42 139.484 144.564 228.206C937.228 721.584 742.248 874 511.674 874c-72.196 0-140.904-14.944-203.196-41.906l61.824-61.822c42.786 14.818 88.44 23.072 135.642 23.69l5.73 0.038c181.666 0 341.348-113.156 404.086-278.826l1.18-3.182-1.18-3.178c-24.86-65.644-64.942-123.042-115.582-168.424l56.606-56.604z m-142.452 142.452c11.166 26.354 17.342 55.336 17.342 85.762 0 121.502-98.498 220-220 220-30.424 0-59.408-6.176-85.762-17.344l64.298-64.292a141.08 141.08 0 0 0 21.464 1.636c77.32 0 140-62.68 140-140 0-7.3-0.56-14.468-1.636-21.466l64.294-64.296zM511.674 230c-181.664 0-341.348 113.156-404.084 278.826l-1.18 3.18 1.18 3.18c30.118 79.528 82.578 146.954 149.086 195.57l73.86-73.862c-24.508-35.48-38.86-78.51-38.86-124.894 0-121.502 98.496-220 220-220 46.382 0 89.414 14.354 124.892 38.864l59.558-59.56c-54.64-25.812-115.286-40.434-178.722-41.266l-5.73-0.038z m0 142c-77.32 0-140 62.68-140 140 0 24.196 6.14 46.958 16.942 66.814l189.872-189.872c-19.856-10.804-42.618-16.942-66.814-16.942z" p-id="12815"></path></svg>
    )
  }
)

if (__DEV__) {
  EyeInvisibleOutlined.displayName = 'EyeInvisibleOutlined'
}
  