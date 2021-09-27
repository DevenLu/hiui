import React from 'react'
import DocViewer from '../../../libs/doc-viewer'
import Tree, { LegacyTree } from '../../../components/tree'
const prefix = 'tree-normal'
const desc = '二叉树或多叉树的展现形式，常见于组织架构、文件管理、索引目录等应用场景'
const rightOptions = ['基础单选V3', '基础单选V2']

const code = [
  {
    code: `import React from 'react'
    import Tree from '@hi-ui/hiui/es/tree'\n
    class Demo extends React.Component {
      constructor(props) {
        super(props)
        this.state = {
          treeData: [
            { id: 1, title: '小米',
              children: [
                { id: 2, title: '技术', disabled: true,
                  children: [
                    { id: 3, title: '后端', disabled: true },
                    { id: 4, title: '运维' },
                    { id: 5, title: '前端' }
                  ]
                },
                { id: 6, title: '产品', selectable: false }
              ]
            },
            { id: 11, title: '小米',
              children: [
                { id: 22, title: '技术',
                  children: [
                    { id: 33, title: '后端' },
                    { id: 44, title: '运维' },
                    { id: 55, title: '前端' }
                  ]
                },
                { id: 66, title: '产品' }
              ]
            },
          ]
        }
      }



      render() {
        return (
          <div style={{width:500}}>
            <Tree
              defaultExpandAll
              data={this.state.treeData}
              onChange={data => {console.log('Tree data:', data)}}
              defaultSelectedId={1}
              onSelect={(item) => console.log('select node', item)}
            />
          </div>
        )
      }
    }`,
    opt: ['基础单选V3']
  },
  {
    code: `import React from 'react'
    import {LegacyTree} from '@hi-ui/hiui/es/tree'\n
    class Demo extends React.Component {
      constructor(props) {
        super(props)
        this.state = {
          treeData: [
            { id: 1, title: '小米',
              children: [
                { id: 2, title: '技术', disabled: true,
                  children: [
                    { id: 3, title: '后端', onClick: data => {console.log('后端：', data)} , disabled: true},
                    { id: 4, title: '运维' },
                    { id: 5, title: '前端' }
                  ]
                },
                { id: 6, title: '产品' }
              ]
            },
            { id: 11, title: '小米',
              children: [
                { id: 22, title: '技术',
                  children: [
                    { id: 33, title: '后端' },
                    { id: 44, title: '运维' },
                    { id: 55, title: '前端' }
                  ]
                },
                { id: 66, title: '产品' }
              ]
            },
          ]
        }

      }

      render() {
        return (
          <div style={{width:500}}>
            <LegacyTree
              defaultExpandAll
              data={this.state.treeData}
              onChange={data => {console.log('Tree data:', data)}}
              highlightable
              defaultHighlightId={1}
              onClick={(item) => console.log('------click node', item)}
            />
          </div>
        )
      }
    }`,
    opt: ['基础单选V2']
  }
]
const DemoNormal = () => (
  <DocViewer code={code} scope={{ Tree, LegacyTree }} prefix={prefix} desc={desc} rightOptions={rightOptions} />
)
export default DemoNormal
