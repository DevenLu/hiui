import React, { useCallback, forwardRef } from 'react'
import classNames from 'classnames'

import Loading from '../loading'
import EmptyPng from './img/empty.png'

const Menu = forwardRef(
  (
    {
      value,
      options,
      onSelect,
      isFiltered,
      filterOptionWidth,
      theme,
      valueKey,
      labelKey,
      childrenKey,
      onHover,
      expandTrigger,
      localeDatasProps,
      emptyContent,
      focusOptionIndex,
      currentDeep,
      targetByKeyDown,
      setFocusOptionIndex
    },
    ref
  ) => {
    // 配置化
    const renderMenus = useCallback(() => {
      let currentOptions = options.slice()
      let deep = 0
      const menus = []
      while (currentOptions) {
        const currentValue = value[deep]
        const _currentOptions = currentOptions.slice()
        currentOptions = false
        // currentDeep.current = deep
        if ((isFiltered && value.length > deep) || !isFiltered) {
          menus.push(
            <Loading visible={_currentOptions.length === 0} key={deep}>
              <ul
                id="hi-cascader-menu"
                className={`hi-cascader-menu theme__${theme} hi-cascader_transition`}
                key={deep}
                style={{ width: 'auto' }}
              >
                {_currentOptions.map((option, index) => {
                  const optionValue = option[valueKey]
                  const hasChildren = Array.isArray(option[childrenKey])
                  const isExpanded = hasChildren && optionValue === currentValue
                  const expandIcon = 'icon-right'
                  const { _path } = option
                  const _deep = deep
                  const optionValues = option.jointOption ? optionValue : getOptionValues(value, optionValue, deep) // jointOption为true代表搜索拼接出来的option，直接取value即可
                  if (isExpanded) {
                    currentOptions = option[childrenKey]
                  }
                  return (
                    <li
                      className={classNames('hi-cascader-menu__item', {
                        'hi-cascader-menu__item-expanded': hasChildren,
                        'hi-cascader-menu__item-disabled': !!option.disabled,
                        'hi-cascader-menu__item-active': currentValue === optionValue,
                        'hi-cascader-menu__item-focus': String(_path) === focusOptionIndex && targetByKeyDown.current,
                        'hi-cascader-menu__item--isFiltered': isFiltered && !option.hightlight,
                        'hi-cascader-menu__item--path': isFiltered && value.includes(option.id)
                      })}
                      onClick={(e) => {
                        e.stopPropagation()
                        if (!option.disabled) {
                          onSelect(optionValues, hasChildren)
                          targetByKeyDown.current = false
                          setFocusOptionIndex(_path)
                          currentDeep.current = _deep
                        }
                      }}
                      onMouseEnter={(e) => {
                        e.stopPropagation()
                        if (!option.disabled && expandTrigger === 'hover') {
                          onHover(optionValues, hasChildren)
                          targetByKeyDown.current = false
                          setFocusOptionIndex(_path)
                          currentDeep.current = _deep
                        }
                      }}
                      key={optionValue + option[labelKey]}
                    >
                      <span className={classNames(`hi-cascader-menu__item--label`)}>
                        {isFiltered && option.hightlight
                          ? (option.hightlight || []).map((item, index) => <span key={index}>{item}</span>)
                          : option[labelKey]}
                      </span>
                      {hasChildren && (
                        <i className={classNames('hi-cascader-menu__item--icon', 'hi-icon', expandIcon)} />
                      )}
                    </li>
                  )
                })}
              </ul>
            </Loading>
          )
          deep++
        }
      }
      return menus
    }, [options, value, valueKey, focusOptionIndex])

    const getOptionValues = useCallback((values, optionValue, index) => {
      if (index === 0) {
        return [optionValue]
      } else {
        return values.slice(0, index).concat([optionValue])
      }
    }, [])
    return (
      <div
        ref={ref}
        className={classNames('hi-cascader-menuOutter', {
          'hi-cascader-menuOutter--empty': !value.length && isFiltered
        })}
        style={{
          width: isFiltered && value.length === 0 ? filterOptionWidth : 'auto'
        }}
      >
        {((value.length !== 0 && isFiltered) || !isFiltered) && renderMenus()}
        {value.length === 0 && isFiltered && (
          <>
            <img src={EmptyPng} />
            <p className="hi-cascader-menuOutter--emptyText">{emptyContent || localeDatasProps('emptyContent')}</p>
          </>
        )}
      </div>
    )
  }
)
export default Menu
