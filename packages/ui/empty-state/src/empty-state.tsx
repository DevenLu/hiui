import React, { forwardRef } from 'react'
import { cx, getPrefixCls } from '@hi-ui/classname'
import { __DEV__ } from '@hi-ui/env'
import { useLocaleContext } from '@hi-ui/locale-context'
import { isUndef } from '@hi-ui/type-assertion'
import { HiBaseHTMLProps, HiBaseSizeEnum } from '@hi-ui/core'
import { defaultIndicatorIcon } from './icons'

const _role = 'empty-state'
const _prefix = getPrefixCls(_role)

export const EmptyState = forwardRef<HTMLDivElement | null, EmptyStateProps>(
  (
    {
      prefixCls = _prefix,
      role = _role,
      className,
      children,
      indicator = defaultIndicatorIcon,
      title: titleProp,
      imageStyle,
      imageClassName,
      size = HiBaseSizeEnum.MD,
      ...rest
    },
    ref
  ) => {
    const i18n = useLocaleContext()

    const title = isUndef(titleProp) ? i18n.get('emptyState.emptyContent') : titleProp

    const cls = cx(prefixCls, className, `${prefixCls}--size-${size}`)

    return (
      <div ref={ref} role={role} className={cls} {...rest}>
        <div className={cx(`${prefixCls}__image`, imageClassName)} style={imageStyle}>
          {typeof indicator === 'string' ? <img src={indicator} alt="indicator" /> : indicator}
        </div>
        {title ? <span className={`${prefixCls}__title`}>{title}</span> : null}
        {children && <div className={`${prefixCls}__slot`}>{children}</div>}
      </div>
    )
  }
)

export interface EmptyStateProps extends HiBaseHTMLProps<'div'> {
  /**
   * 指示器图标，如果是字符串将被设置为 Img src
   */
  indicator?: React.ReactNode
  /**
   * 空状态的标题
   */
  title?: React.ReactNode
  /**
   * 图标尺寸
   */
  size?: HiBaseSizeEnum
  /**
   * 指示器的样式。暂不对外暴露
   * @private
   */
  imageStyle?: React.CSSProperties
  /**
   * 指示器的类名。暂不对外暴露
   * @private
   */
  imageClassName?: string
}

if (__DEV__) {
  EmptyState.displayName = 'EmptyState'
}
