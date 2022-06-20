import React from 'react'
import DocViewer from '../../../libs/doc-viewer'
import SelectTree from '../../../components/select-tree'
const prefix = 'tree-select-multiple'
const rightOptions = ['基础', '默认值', '禁用', '数据回显', '数据转换']
const desc = '展示从多个收起的备选项中选出的一个选项'
const defaultStr = `constructor () {
  super()
  this.state = {
    value: ['0-0'],
    singleList: [
      {
        title: '手机类',
        id: '0',
        children: [
          {
            title: 'Redmi系列',
            id: '0-0',
            disabled: true,
            children: [{
              id: '0-0-1',
              title: 'Redmi K30'
            }, {
              id: '0-0-2',
              title: 'Redmi K30 Pro'
            }, {
              id: '0-0-3',
              title: 'Redmi 10X 5G'
            }, {
              id: '0-0-4',
              title: 'Redmi Note 8'
            }, {
              id: '0-0-5',
              title: 'Redmi 9'
            }, {
              id: '0-0-6',
              title: 'Redmi 9A'
            }]
          },{
            title: '小米手机',
            id: '0-1',
            children: [{
              id: '0-1-1',
              title: '小米10 Pro'
            }, {
              id: '0-1-2',
              title: '小米10'
            }, {
              id: '0-1-3',
              title: '小米10 青春版 5G'
            }, {
              id: '0-1-4',
              title: '小米MIX Alpha'
            }]
          },
        ]
      },
      {
        title: '电视',
        id: '1',
        children: [{
          title: '小米电视 大师 65英寸OLED',
          id: '1-0'
        }, {
          title: 'Redmi 智能电视 MAX 98',
          id: '1-1'
        }, {
          title: '小米电视4A 60英寸',
          id: '1-2'
        }]
      }
    ]
  }
}`
const code = [
  {
    code: `import React from 'react'
import SelectTree from '@hi-ui/hiui/es/select-tree'\n
class Demo extends React.Component {
  ${defaultStr}

  render () {
    return (
      <SelectTree
        type='multiple'
        data={this.state.singleList}
      />
    )
  }
}`,
    opt: ['基础']
  },
  {
    code: `import React from 'react'
    import SelectTree from '@hi-ui/hiui/es/select-tree'\n
    class Demo extends React.Component {
      ${defaultStr}

      render () {
        const { singleList } = this.state
        return (
          <SelectTree
            type='multiple'
            clearable
            data={singleList}
            defaultValue={[{id: '1-0'}]}
          />
        )
      }
    }`,
    opt: ['默认值']
  },
  {
    code: `import React from 'react'
    import SelectTree from '@hi-ui/hiui/es/select-tree'\n
    class Demo extends React.Component {
      ${defaultStr}

      render () {
        const { singleList } = this.state
        return (
          <SelectTree
            type='multiple'
            clearable
            disabled
            data={singleList}
            defaultValue={[{id: '1-0'}]}
          />
        )
      }
    }`,
    opt: ['禁用']
  },
  {
    code: `import React from 'react'
    import SelectTree from '@hi-ui/hiui/es/select-tree'\n
    class Demo extends React.Component {
      ${defaultStr}

      render () {
        const { value, singleList } = this.state
        return (
          <SelectTree
            clearable
            type='multiple'
            showCheckedMode='PARENT'
            data={singleList}
            value={value}
            onChange={(checkedIds, checkedNodes , currentNode) => {
              this.setState({
                value:checkedIds
              })
            }}
          />
        )
      }
    }`,
    opt: ['数据回显']
  },
  {
    code: `import React from 'react'
    import SelectTree from '@hi-ui/hiui/es/select-tree'\n
    class Demo extends React.Component {
      constructor () {
        super()
        this.state = {
          value: ['0-0'],
          singleList: [
            {
              content: '手机类',
              id: '0',
              children: [
                {
                  content: 'Redmi系列',
                  id: '0-0',
                  disabled: true,
                  children: [{
                    id: '0-0-1',
                    content: 'Redmi K30'
                  }, {
                    id: '0-0-2',
                    content: 'Redmi K30 Pro'
                  }, {
                    id: '0-0-3',
                    content: 'Redmi 10X 5G'
                  }, {
                    id: '0-0-4',
                    content: 'Redmi Note 8'
                  }, {
                    id: '0-0-5',
                    content: 'Redmi 9'
                  }, {
                    id: '0-0-6',
                    content: 'Redmi 9A'
                  }]
                },{
                  content: '小米手机',
                  id: '0-1',
                  children: [{
                    id: '0-1-1',
                    content: '小米10 Pro'
                  }, {
                    id: '0-1-2',
                    content: '小米10'
                  }, {
                    id: '0-1-3',
                    content: '小米10 青春版 5G'
                  }, {
                    id: '0-1-4',
                    content: '小米MIX Alpha'
                  }]
                },
              ]
            },
            {
              content: '电视',
              id: '1',
              children: [{
                content: '小米电视 大师 65英寸OLED',
                id: '1-0'
              }, {
                content: 'Redmi 智能电视 MAX 98',
                id: '1-1'
              }, {
                content: '小米电视4A 60英寸',
                id: '1-2'
              }]
            }
          ]
        }
      }
      render () {
        const { singleList } = this.state
        return (
          <SelectTree
            clearable
            type='multiple'
            data={singleList}
            fieldNames={{title: 'content'}}
            defaultExpandIds={['1-0']}
          />
        )
      }
    }`,
    opt: ['数据转换']
  }
]
const DemoType = () => (
  <DocViewer code={code} scope={{ SelectTree }} prefix={prefix} rightOptions={rightOptions} desc={desc} />
)
export default DemoType
