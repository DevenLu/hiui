import React from 'react'
import Tree from '../src'

export const Checkable = () => {
  const [treeData] = React.useState([
    {
      id: 1,
      title: '小米',
      children: [
        {
          id: 2,
          title: '技术',
          children: [
            { id: 3, title: '后端' },
            { id: 4, title: '运维' },
            { id: 5, title: '前端' },
          ],
        },
        {
          id: 6,
          title: '产品',
          disabled: true,
          children: [
            { id: 61, title: '后端' },
            { id: 62, title: '运维' },
            { id: 63, title: '前端' },
          ],
        },
        {
          id: 8,
          title: '发发发',

          children: [],
        },
      ],
    },
    {
      id: 11,
      title: '大米',
      children: [
        { id: 22, title: '技术' },
        { id: 66, title: '产品' },
      ],
    },
  ])

  return (
    <>
      <h1>Checkable for Tree</h1>
      <div className="tree-basic__wrap">
        <Tree
          checkable
          data={treeData}
          checkedMode="PARENT"
          render={(node) => `${node.title}(${node.id})`}
          onCheck={console.log}
        ></Tree>
      </div>
    </>
  )
}
