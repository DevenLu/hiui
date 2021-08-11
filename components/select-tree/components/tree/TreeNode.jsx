import React, { useContext, useRef, useCallback, useState } from 'react'
import _ from 'lodash'
import Checkbox from '../../../checkbox'
import Icon from '../../../icon'
import Classnames from 'classnames'
import TreeContext from './context'
import IconLoading from './LoadingIcon'
import { getChildrenNodes, matchAllDataFilterKey } from './util'

const Switcher = ({ expanded, node, onExpandEvent }) => {
  const [loading, setLoading] = useState(false)
  return loading ? (
    <IconLoading />
  ) : (
    <Icon
      name={expanded ? 'caret-down' : 'caret-right'}
      onClick={() => {
        !expanded && setLoading(true)
        onExpandEvent(node, !expanded, () => setLoading(false))
      }}
    />
  )
}

const TreeNode = ({ data, flttenData }) => {
  // 接受原始拉平数据，用于快速查找子元素
  const {
    treeNodeRender,
    checkable,
    checkedNodes,
    selectedItems,
    onClick,
    selectedId,
    onCheckboxChange,
    expandIds,
    onExpandEvent,
    isRemoteLoadData,
    activeId,
    searchMode,
    searchValue
  } = useContext(TreeContext)
  const treeNodeRef = useRef(null)

  const renderIndent = useCallback(() => {
    return <span style={{ flex: '0 0 20px' }} />
  }, [])

  const renderCheckbox = useCallback(
    (node, { checked, semiChecked }) => {
      const { id, disabled } = node
      return (
        <Checkbox
          indeterminate={semiChecked.includes(id)}
          checked={checked.includes(id)}
          disabled={disabled}
          onChange={(e) => {
            !disabled && onCheckboxChange(e.target.checked, node, { checked, semiChecked })
          }}
        >
          <span
            className={Classnames({
              'hi-select-tree__title--multiple': checkable,
              'hi-select-tree__title--focus': id === activeId
            })}
            dangerouslySetInnerHTML={{ __html: node._title || node.title }}
          />
        </Checkbox>
      )
    },
    [checkedNodes, activeId, checkable]
  )

  const renderTitle = useCallback(
    (node, _selectedId) => {
      const { id, title, _title, disabled } = node
      return (
        <div
          ref={treeNodeRef}
          className={Classnames(
            'hi-select-tree__title',
            {
              'hi-select-tree__title--focus': id === activeId
            },
            {
              'hi-select-tree__title--selected': selectedItems.filter((s) => s.id === id).length > 0
            }
          )}
          onClick={() => {
            !disabled && onClick(_.omit(node, ['pId']))
          }}
          dangerouslySetInnerHTML={{ __html: treeNodeRender ? treeNodeRender(_title || title) : _title || title }}
        />
      )
    },
    [selectedItems, activeId]
  )
  return (
    <ul className="hi-select-tree__nodes">
      {data.map((node, index) => {
        const { disabled, isLeaf } = node
        const childrenNodes = getChildrenNodes(node, flttenData)
        const expand = expandIds.includes(node.id)
        const needFilter = searchMode === 'filter' ? !!matchAllDataFilterKey(node, searchValue) : true
        return (
          <React.Fragment key={index}>
            {needFilter ? (
              <>
                <li
                  className={Classnames('hi-select-tree__node', { 'hi-select-tree__node--disabled': disabled })}
                  data-selecttree-id={node.id}
                >
                  <div className="hi-select-tree__node--self">
                    {(childrenNodes.length || isRemoteLoadData) && !isLeaf ? (
                      <Switcher expanded={expand} node={node} onExpandEvent={onExpandEvent} />
                    ) : (
                      renderIndent()
                    )}
                    {checkable ? renderCheckbox(node, checkedNodes) : renderTitle(node, selectedId)}
                  </div>
                </li>
                <>
                  {childrenNodes.length > 0 && expand && (
                    <li className="hi-select-tree__node">
                      <TreeNode data={childrenNodes} flttenData={flttenData} />
                    </li>
                  )}
                </>
              </>
            ) : null}
          </React.Fragment>
        )
      })}
    </ul>
  )
}

export default TreeNode
