import React, { forwardRef, useRef, useCallback, useState, useMemo } from 'react'
import { cx, getPrefixCls } from '@hi-ui/classname'
import { __DEV__ } from '@hi-ui/env'
import { useUncontrolledState } from '@hi-ui/use-uncontrolled-state'
import { times } from '@hi-ui/times'
import { CloseCircleFilled, CloseOutlined } from '@hi-ui/icons'
import { useMergeRefs } from '@hi-ui/use-merge-refs'
import { useTagInput } from './hooks'
import { flattenTreeData } from './utils'
import { CheckCascaderItem, FlattedCheckCascaderItem } from './types'
import { useOutsideClick } from '@hi-ui/use-outside-click'

const _role = 'tag-input'
const _prefix = getPrefixCls(_role)
const NOOP_ARRAY = [] as []

/**
 * TODO: What is TagInput
 */
export const TagInput = forwardRef<HTMLDivElement | null, TagInputProps>(
  (
    {
      prefixCls = _prefix,
      role = _role,
      className,
      defaultValue = NOOP_ARRAY,
      value: valueProp,
      onChange,
      placeholder,
      data,
      wrap = true,
      clearable = false,
      disabled = false,
      displayRender,
      suffix,
      onClick,
      ...rest
    },
    ref
  ) => {
    const flattedData = useMemo(() => flattenTreeData(data), [data])

    const [value, tryChangeValue] = useUncontrolledState(defaultValue, valueProp, onChange)

    const showData = useMemo(
      () => flattedData.filter((item) => item && item.checkable && value.indexOf(item.id) !== -1),
      [flattedData, value]
    )

    const tagSelector = `.${prefixCls}__tag`
    const tagInputRef = useRef<HTMLDivElement>(null)
    const [tagMaxWidth, showTagCount] = useTagInput(true, tagSelector, showData, tagInputRef)
    const handleClear = useCallback(
      (evt) => {
        if (disabled) return

        evt.stopPropagation()

        tryChangeValue(NOOP_ARRAY, {
          trigger: 'clear',
        })
      },
      [tryChangeValue, disabled]
    )

    const [hover, setHover] = useState(false)
    const trySetHover = (hovered: boolean) => {
      if (disabled) return
      setHover(hovered)
    }

    // 在开启 clearable 下展示 清除内容按钮，可点击进行内容清楚
    const showClearableIcon = clearable && value.length > 0 && !disabled

    const [expanded, setExpanded] = useState(false)

    const handleExpand = useCallback((evt: React.MouseEvent) => {
      evt.stopPropagation()
      setExpanded(true)
    }, [])

    useOutsideClick(tagInputRef, () => setExpanded(false))

    const cls = cx(
      prefixCls,
      className,
      expanded ? `${prefixCls}--expanded` : wrap ? `${prefixCls}--wrap` : `${prefixCls}--nowrap`
    )

    return (
      <div
        ref={useMergeRefs(ref, tagInputRef)}
        role={role}
        className={cls}
        onMouseOver={(e) => {
          trySetHover(true)
        }}
        onMouseLeave={(e) => {
          trySetHover(false)
        }}
        {...rest}
      >
        <div className={cx(`${prefixCls}__container`, disabled && 'disabled')} onClick={onClick}>
          {value.length !== 0 ? (
            <span className={`${prefixCls}__value`}>
              <span className={cx(`${prefixCls}__tags`, wrap && `${prefixCls}__tags--all`)}>
                {times(showTagCount, (index) => {
                  const option = showData[index]

                  if (!option) return null

                  const title = displayRender ? displayRender(option) : true
                  const closeable = !option.disabled
                  return (
                    <span className={`${prefixCls}__tag`} key={option.id}>
                      <span
                        className={`${prefixCls}__tag-content`}
                        style={{ maxWidth: tagMaxWidth }}
                      >
                        {title === true ? option.title : title}
                      </span>
                      {closeable ? (
                        <span
                          className={`${prefixCls}__tag-closed`}
                          onClick={(evt) => {
                            if (disabled) return

                            evt.stopPropagation()
                            const nextValue = [...value].filter((id) => id !== option.id)
                            // TODO: 点击 close 时，级联选项也需要处理，让其取消级联
                            tryChangeValue(nextValue, {
                              trigger: 'close',
                            })
                          }}
                        >
                          <CloseOutlined />
                        </span>
                      ) : null}
                    </span>
                  )
                })}
              </span>
            </span>
          ) : (
            <span className={`${prefixCls}__placeholder`}>{placeholder}</span>
          )}
          {suffix || showClearableIcon || (!wrap && showTagCount > 0) ? (
            <span className={`${prefixCls}__suffix`}>
              {!wrap && showTagCount > 0 ? (
                <span className={cx(`${prefixCls}__tag--total`)} onClick={handleExpand}>{`${
                  showTagCount > 99 ? '+99' : showTagCount
                }`}</span>
              ) : null}

              {showClearableIcon && hover ? (
                <span
                  className={`${prefixCls}__clear`}
                  role="button"
                  tabIndex={-1}
                  onClick={handleClear}
                >
                  <CloseCircleFilled />
                </span>
              ) : (
                suffix
              )}
            </span>
          ) : null}
        </div>

        {value.length !== 0 && expanded ? (
          <div className={`${prefixCls}__container__expand`}>
            <span className={cx(`${prefixCls}__value`)}>
              <span className={cx(`${prefixCls}__tags`, `${prefixCls}__tags--all`)}>
                {times(showTagCount, (index) => {
                  const option = showData[index]

                  if (!option) return null

                  const title = displayRender ? displayRender(option) : true
                  const closeable = !option.disabled
                  return (
                    <span className={`${prefixCls}__tag`} key={option.id}>
                      <span
                        className={`${prefixCls}__tag-content`}
                        style={{ maxWidth: tagMaxWidth }}
                      >
                        {title === true ? option.title : title}
                      </span>
                      {closeable ? (
                        <span
                          className={`${prefixCls}__tag-closed`}
                          onClick={(evt) => {
                            if (disabled) return

                            evt.stopPropagation()
                            const nextValue = [...value].filter((id) => id !== option.id)
                            tryChangeValue(nextValue)
                          }}
                        >
                          <CloseOutlined />
                        </span>
                      ) : null}
                    </span>
                  )
                })}
              </span>
              {suffix || showClearableIcon ? (
                <span className={`${prefixCls}__suffix`}>
                  {showClearableIcon ? (
                    <span
                      className={`${prefixCls}__clear`}
                      role="button"
                      tabIndex={-1}
                      onClick={handleClear}
                    >
                      <CloseCircleFilled />
                    </span>
                  ) : (
                    suffix
                  )}
                </span>
              ) : null}
            </span>
          </div>
        ) : null}
      </div>
    )
  }
)

export interface TagInputProps {
  /**
   * 组件默认的选择器类
   */
  prefixCls?: string
  /**
   * 组件的语义化 Role 属性
   */
  role?: string
  /**
   * 组件的注入选择器类
   */
  className?: string
  /**
   * 组件的注入样式
   */
  style?: React.CSSProperties
  /**
   * 设置当前多选值
   */
  value?: React.ReactText[]
  /**
   * 设置当前多选值默认值
   */
  defaultValue?: React.ReactText[]
  /**
   * 多选值改变时的回调
   */
  onChange?: (values: React.ReactText[]) => void
  /**
   * 是否可清空	boolean	true | false	true
   */
  clearable?: boolean
  /**
   * 是否禁止使用	boolean	true | false	false
   */
  disabled?: boolean
  /**
   * 自定义选择后触发器所展示的内容
   */
  displayRender?: (checkedOption: FlattedCheckCascaderItem) => React.ReactNode
  /**
   * 输入框占位符
   */
  placeholder?: string
  /**
   * 是否开启换行全展示
   */
  wrap?: boolean
  /**
   * 输入框后置内容
   */
  suffix?: React.ReactNode
  /**
   * 点击 Tag Input 时触发回调
   */
  onClick?: (event: React.MouseEvent<HTMLDivElement>) => void
  /**
   * tag 列表数据源
   */
  data: CheckCascaderItem[]
}

if (__DEV__) {
  TagInput.displayName = 'TagInput'
}
