import React, { useState, useEffect, useCallback, useRef } from 'react'
import { plus, minus } from 'number-precision'
import { cx } from '@hi-ui/classname'
import { __DEV__ } from '@hi-ui/env'
import { useUncontrolledState } from '@hi-ui/use-uncontrolled-state'
import { useLatestRef, useLatestCallback } from '@hi-ui/use-latest'
import { useToggle } from '@hi-ui/use-toggle'
import { isNumeric } from '@hi-ui/type-assertion'
import { CounterProps } from './Counter'

const DEFAULT_VALUE = 0

export const useCounter = ({
  prefixCls,
  className,
  value: valueProp,
  defaultValue = DEFAULT_VALUE,
  step = 1,
  min: minProp,
  max: maxProp,
  disabled: disabledProp = false,
  onChange,
  tabIndex = 0,
  autoFocus = false,
  focusOnStep = true,
  onFocus,
  onBlur,
  changeOnWheel = false,
  onWheel,
  size = 'md',
  appearance = 'outline',
  ...rest
}: UseCounterProps) => {
  const min = minProp ?? Number.MIN_SAFE_INTEGER
  const max = maxProp ?? Number.MAX_SAFE_INTEGER

  const [value, tryChangeValue] = useUncontrolledState(defaultValue, valueProp, onChange)

  const [inputValue, setInputValue] = useState<React.ReactText>(value)

  const valueRef = useLatestRef(value)

  const blockedChange = valueProp !== undefined && !onChange
  const disabled = blockedChange || disabledProp

  const proxyTryChangeValue = useCallback(
    (nextValue: number, syncInput: boolean) => {
      if (disabled) return

      if (__DEV__) {
        // TODO(统一规范): 对于 ts 类型无法约束到的，但是用户可能存在该行为的，需要开发模式警告提醒
        if (min > max) {
          console.info('Warning: the max must large than min.')
        }
      }

      if (nextValue > max) {
        nextValue = max
      } else if (nextValue < min) {
        nextValue = min
      }

      tryChangeValue(nextValue)
      if (syncInput) {
        setInputValue(nextValue)
      }
    },
    [disabled, max, min, tryChangeValue]
  )

  const inputRef = useRef<HTMLInputElement>(null)

  const reachMax = value >= max
  const reachMin = value <= min
  const disabledMinus = disabled || reachMin
  const disabledPlus = disabled || reachMax

  const inputNumericRef = useRef<number>(value)

  useEffect(() => {
    setInputValue(value)
  }, [value])

  useEffect(() => {
    // 如果是数值类型，则立即进行修改原始值，保证输入错误也能显示最接近的正确值
    if (isNumeric(inputValue)) {
      inputNumericRef.current = Number(inputValue)
    }
  }, [inputValue])

  const getCurrentValue = useCallback(() => {
    if (typeof inputNumericRef.current !== 'number') {
      inputNumericRef.current = valueRef.current
    }
    return inputNumericRef.current
  }, [valueRef])

  const onMinus = useCallback(() => {
    if (disabledMinus) return
    const currentValue = getCurrentValue()
    proxyTryChangeValue(minus(currentValue, step), true)
  }, [proxyTryChangeValue, disabledMinus, step, getCurrentValue])

  const onPlus = useCallback(() => {
    if (disabledPlus) return
    const currentValue = getCurrentValue()
    proxyTryChangeValue(plus(currentValue, step), true)
  }, [proxyTryChangeValue, disabledPlus, step, getCurrentValue])

  const onInputKeyDown = useCallback(
    (e: React.KeyboardEvent<HTMLInputElement>) => {
      // TODO(规范): 统一组件库键盘按键兼容方案
      // 下键
      if (e.keyCode === 40) {
        e.preventDefault()
        onMinus()
      }

      // 上键
      if (e.keyCode === 38) {
        e.preventDefault()
        onPlus()
      }

      if (e.keyCode === 13) {
        e.preventDefault()
        const currentValue = getCurrentValue()
        proxyTryChangeValue(currentValue, true)
      }
    },
    [onMinus, onPlus, proxyTryChangeValue, getCurrentValue]
  )

  const [focus, focusAction] = useToggle()

  const onFocusLatest = useLatestCallback(onFocus)
  const onBlurLatest = useLatestCallback(onBlur)

  useEffect(() => {
    if (autoFocus && !disabled) {
      focusAction.on()
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  useEffect(() => {
    if (disabled) return
    if (!inputRef.current) return

    if (focus) {
      inputRef.current.focus()
    }
  }, [disabled, focus])

  const handleMinusButtonTouch = useCallback(
    (evt: React.MouseEvent) => {
      if (focusOnStep) {
        evt.preventDefault()
        focusAction.on()
      }

      onMinus()
    },
    [onMinus, focusAction, focusOnStep]
  )

  const handlePlusButtonTouch = useCallback(
    (evt: React.MouseEvent) => {
      if (focusOnStep) {
        evt.preventDefault()
        focusAction.on()
      }

      onPlus()
    },
    [onPlus, focusAction, focusOnStep]
  )

  const onInputChange = useCallback(
    (evt: React.ChangeEvent<HTMLInputElement>) => {
      if (disabled) return

      const { value } = evt.target

      setInputValue(value)
    },
    [disabled]
  )

  const onInputFocus = useCallback(
    (evt) => {
      focusAction.on()
      onFocusLatest(evt)
    },
    [onFocusLatest, focusAction]
  )

  const onInputBlur = useCallback(
    (evt) => {
      const currentValue = getCurrentValue()
      proxyTryChangeValue(currentValue, true)

      focusAction.off()
      onBlurLatest(evt)
    },
    [getCurrentValue, proxyTryChangeValue, onBlurLatest, focusAction]
  )

  const onWheeLatest = useLatestCallback(onWheel)
  const onInputWheel = useCallback(
    (evt: React.WheelEvent<HTMLInputElement>) => {
      if (!disabled && changeOnWheel) {
        const nativeEvent = evt.nativeEvent as any
        const delta: number = nativeEvent.wheelDelta || -nativeEvent.deltaY || -nativeEvent.detail

        if (delta > 0) {
          onMinus()
        } else if (delta < 0) {
          onPlus()
        }
      }
      onWheeLatest(evt)
    },
    [onWheeLatest, disabled, onMinus, onPlus, changeOnWheel]
  )

  const cls = cx(
    prefixCls,
    className,
    `${prefixCls}--size-${size}`,
    `${prefixCls}--appearance-${appearance}`,
    focus && `${prefixCls}--focused`,
    !isNumeric(value) && `${prefixCls}--invalid`,
    isOutOfRange(value, min, max) && `${prefixCls}--out-of-bounds`
  )

  const rootProps = {
    ...rest,
    className: cls,
  }

  const getInputProps = useCallback(() => {
    return {
      ref: inputRef,
      className: `${prefixCls}__input`,
      type: 'text',
      role: 'spinbutton',
      'aria-valuenow': value,
      'aria-valuemin': minProp,
      'aria-valuemax': maxProp,
      value: inputValue as string,
      tabIndex,
      autoFocus: autoFocus,
      disabled: disabled,
      onChange: onInputChange,
      onFocus: onInputFocus,
      onBlur: onInputBlur,
      onKeyDown: onInputKeyDown,
      onWheel: onInputWheel,
    }
  }, [
    prefixCls,
    minProp,
    maxProp,
    value,
    inputValue,
    tabIndex,
    autoFocus,
    disabled,
    onInputChange,
    onInputBlur,
    onInputKeyDown,
    onInputFocus,
    onInputWheel,
  ])

  const getMinusButtonProps = useCallback(() => {
    return {
      className: cx(`${prefixCls}__minus`, disabledMinus && 'disabled'),
      role: 'button',
      'aria-disabled': disabledMinus ? true : undefined,
      tabIndex: -1,
      disabled: disabledMinus,
      onClick: handleMinusButtonTouch,
    }
  }, [prefixCls, disabledMinus, handleMinusButtonTouch])

  const getPlusButtonProps = useCallback(() => {
    return {
      className: cx(`${prefixCls}__plus`, disabledPlus && 'disabled'),
      role: 'button',
      'aria-disabled': disabledPlus ? true : undefined,
      tabIndex: -1,
      disabled: disabledPlus,
      onClick: handlePlusButtonTouch,
    }
  }, [prefixCls, disabledPlus, handlePlusButtonTouch])

  const getContentProps = useCallback(() => {
    return {
      className: cx(`${prefixCls}__content`),
    }
  }, [prefixCls])

  const getInputWrapperProps = useCallback(() => {
    return {
      className: cx(`${prefixCls}__input-wrapper`),
    }
  }, [prefixCls])

  return {
    rootProps,
    getInputProps,
    getMinusButtonProps,
    getPlusButtonProps,
    getContentProps,
    getInputWrapperProps,
  }
}

export interface UseCounterProps extends CounterProps {
  prefixCls: string
}

const isOutOfRange = (val: number, min: number, max: number) => val > max || val < min
