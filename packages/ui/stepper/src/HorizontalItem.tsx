import React, { forwardRef } from 'react'
import { cx, getPrefixCls } from '@hi-ui/classname'
import { __DEV__ } from '@hi-ui/env'
import { StepperItem } from './Stepper'
const _role = 'stepper'
const _prefix = getPrefixCls(_role)

/**
 * TODO: What is Stepper
 */
export const HorizontalItem = forwardRef<HTMLDivElement | null, StepperProps>(
  (
    {
      prefixCls = _prefix,
      className,
      stepperItem,
      onClick,
      isFirst,
      isLast,
      isActive,
      isLastActive,
      index,
      type
    },
    ref
  ) => {
    return (
      <div
        ref={ref}
        onClick={() => onClick}
        className={cx(`${prefixCls}__item`, {
          [`${prefixCls}__item--horizontal`]: true,
          [`${prefixCls}__item--active`]: isActive,
          [`${prefixCls}__item--first`]: isFirst,
          [`${prefixCls}__item--last`]: isLast,
          [`${prefixCls}__item--left-active`]: isActive,
          [`${prefixCls}__item--right-active`]: !isLastActive && isActive,
        })}
      >
        <div className={cx('item-step__wrapper')}>
        {stepperItem.icon? <div className={cx('item-step__icon')}>{stepperItem.icon}</div> :(type === 'dot' ? <div className={cx('item-step__dot')} /> :<div className={cx('item-step')}>{index + 1}</div>)}
          <div className={cx('item-step__title')}>{stepperItem.title}</div>
        </div>
        <div className={cx('item-step__content')}>{stepperItem.content}</div>
      </div>
    )
  }
)

export interface StepperProps {
  /**
   * 组件默认的选择器类
   */
  prefixCls?: string

  /**
   * 组件的注入选择器类
   */
  className?: string
  /**
   * 组件的注入样式
   */
  style?: React.CSSProperties

  /**
   * 步骤条数据项
   */
  stepperItem: StepperItem
  /**
   * 是否高亮
   */
  isActive: boolean

  /**
   * 是否为最后一个
   */
  isLast: boolean
  /**
   * 是否为最后一个高亮
   */
  isLastActive: boolean
  /**
   * 是否为第一个
   */
  isFirst: boolean

  /**
   * 当前步骤位置索引，从 0 开始计数
   */

  index: number

  /**
   * 步骤项的变更回调
   */
  onClick?: (current: number) => void
  type?: 'dot' | 'default'
}

if (__DEV__) {
  HorizontalItem.displayName = 'HorizontalItem'
}
