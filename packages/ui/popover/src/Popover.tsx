import React, { cloneElement, isValidElement, forwardRef, useMemo } from 'react'
import { cx, getPrefixCls } from '@hi-ui/classname'
import { __DEV__, invariant } from '@hi-ui/env'
import { HiBaseHTMLProps } from '@hi-ui/core'
import Popper from '@hi-ui/popper'
import { usePopover, UsePopoverProps } from './use-popover'
import { isString } from '@hi-ui/type-assertion'

const _role = 'popover'
const _prefix = getPrefixCls(_role)

/**
 * 气泡卡片
 */
export const Popover = forwardRef<HTMLDivElement | null, PopoverProps>(
  (
    {
      prefixCls = _prefix,
      className,
      children,
      title,
      content,
      shouldWrapChildren = false,
      autoWrapChildren = true,
      wrapTagName = 'span',
      ...rest
    },
    ref
  ) => {
    const { rootProps, getTriggerProps, getPopperProps, getOverlayProps } = usePopover(rest)

    const triggerMemo = useMemo(() => {
      let trigger: React.ReactElement | null | undefined

      if (isValidElement(children)) {
        trigger = cloneElement(
          children,
          // @ts-ignore
          getTriggerProps(children.props, children.ref)
        )
      } else {
        const TagName = wrapTagName

        if (shouldWrapChildren || (autoWrapChildren && isString(children))) {
          trigger = (
            <TagName tabIndex={0} {...getTriggerProps()}>
              {children}
            </TagName>
          )
        } else {
          trigger = children as React.ReactElement

          if (__DEV__) {
            invariant(
              false,
              'Make sure that the children supports the event corresponding to the trigger, you can set `shouldWrapChildren=true` to solve it.'
            )
          }
        }
      }

      return trigger
    }, [children, getTriggerProps, autoWrapChildren, shouldWrapChildren, wrapTagName])

    const cls = cx(prefixCls, className)

    return (
      <>
        {triggerMemo}
        <Popper {...getPopperProps()} {...getOverlayProps()} autoFocus={false}>
          <div ref={ref} className={cls} {...rootProps}>
            {title ? <div className={`${prefixCls}__title`}>{title}</div> : null}
            <div className={`${prefixCls}__content`}>{content}</div>
          </div>
        </Popper>
      </>
    )
  }
)

export interface PopoverProps extends HiBaseHTMLProps<'div'>, UsePopoverProps {
  /**
   * 气泡卡片标题
   */
  title?: React.ReactNode
  /**
   * 气泡卡片内容
   */
  content: React.ReactNode
  /**
   * 使用标签强制包裹 children，使触发器支持 trigger 的事件
   */
  shouldWrapChildren?: boolean
  /**
   * 使用标签自动包裹 children，使触发器支持 trigger 的事件
   */
  autoWrapChildren?: boolean
  /**
   * 指定包裹 children 的标签
   */
  wrapTagName?: React.ElementType<any>
}

if (__DEV__) {
  Popover.displayName = 'Popover'
}
