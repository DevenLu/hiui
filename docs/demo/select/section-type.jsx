import React, { useState } from 'react'
import DocViewer from '../../../libs/doc-viewer'
import Select from '../../../components/select'
import Tooltip from '../../../components/tooltip'
import Radio from '../../../components/radio'
const prefix = 'alert-autoClose'
const rightOptions = ['基础', '受控', '带默认值', '可清空', '无边框', '禁用', '搭配使用']
const desc = '展示从多个收起的备选项中选出的一个选项'
const code = [
  {
    code: `import React from 'react'
    import Select from '@hi-ui/hiui/es/select'\n
    class Demo extends React.Component {
      constructor () {
        super()
        this.state = {
          value: '3',
          singleList: [
            { title:'电视', id:'3', disabled: true },
            { title:'手机', id:'2' },
            { title:'笔记本', id:'4', disabled: true },
            { title:'生活周边', id:'5' },
            { title:'办公', id:'6' },
          ]
        }
      }
    
      render () {
        const { value, singleList } = this.state
        return (
          <Select
            type='single'
            clearable={false}
            style={{ width: 200 }}
            data={singleList}
          />
        )
      }
    }`,
    opt: ['基础']
  },
  {
    code: `import React from 'react'
import Select from '@hi-ui/hiui/es/select'\n
class Demo extends React.Component {
  constructor () {
    super()
    this.state = {
      value: '3',
      singleList: [
        { title:'电视', id:'3', disabled: true },
        { title:'手机', id:'2' },
        { title:'笔记本', id:'4', disabled: true },
        { title:'生活周边', id:'5' },
        { title:'办公', id:'6' },
      ]
    }
  }

  render () {
    const { value, singleList } = this.state
    return (
      <Select
        type='single'
        clearable={false}
        style={{ width: 200 }}
        data={singleList}
        disabled
      />
    )
  }
}`,
    opt: ['禁用']
  },
  {
    code: `import React from 'react'
import Select from '@hi-ui/hiui/es/select'\n
class Demo extends React.Component {
  constructor () {
    super()
    this.state = {
      value: '3',
      singleList: [
        { title:'电视', id:'3', disabled: true },
        { title:'手机', id:'2' },
        { title:'笔记本', id:'4', disabled: true },
        { title:'生活周边', id:'5' },
        { title:'办公', id:'6' },
      ]
    }
  }

  render () {
    const { value, singleList } = this.state
    return (
      <Select
        type='single'
        style={{ width: 200 }}
        data={singleList}
        clearable
      />
    )
  }
}`,
    opt: ['可清空']
  },
  {
    code: `import React from 'react'
import Select from '@hi-ui/hiui/es/select'\n
class Demo extends React.Component {
  constructor () {
    super()
    this.state = {
      value: '3',
      singleList: [
        { title:'电视', id:'3', disabled: true },
        { title:'手机', id:'2' },
        { title:'笔记本', id:'4', disabled: true },
        { title:'生活周边', id:'5' },
        { title:'办公', id:'6' },
      ]
    }
  }

  render () {
    const { value, singleList } = this.state
    return (
      <Select
        type='single'
        style={{ width: 100 }}
        defaultValue={['2']}
        bordered={false}
        data={singleList}
        clearable={false}
      />
    )
  }
}`,
    opt: ['无边框']
  },
  {
    code: `import React from 'react'
import Select from '@hi-ui/hiui/es/select'\n
class Demo extends React.Component {
  constructor () {
    super()
    this.state = {
      value: '3',
      singleList: [
        { title:'电视', id:'3', disabled: true },
        { title:'手机', id:'2' },
        { title:'笔记本', id:'4', disabled: true },
        { title:'生活周边', id:'5' },
        { title:'办公', id:'6' },
      ]
    }
  }

  render () {
    const { value, singleList } = this.state
    return (
      <Select
        type='single'
        clearable={false}
        style={{ width: 200 }}
        data={singleList}
        defaultValue={value}
      />
    )
  }
}`,
    opt: ['带默认值']
  },
  {
    code: `import React from 'react'
import Select from '@hi-ui/hiui/es/select'\n
class Demo extends React.Component {
  constructor () {
    super()
    this.state = {
      value: '3',
      singleList: [
        { title:'电视', id:'3', disabled: true },
        { title:'手机', id:'2' },
        { title:'笔记本', id:'4', disabled: true },
        { title:'生活周边', id:'5' },
        { title:'办公', id:'6' },
      ]
    }
  }

  render () {
    const { value, singleList } = this.state
    return (
      <Select
        type='single'
        style={{ width: 200 }}
        data={singleList}
        value={value}
        onChange={ids => {
          this.setState({
            value: ids
          })
        }}
      />
    )
  }
}`,
    opt: ['受控']
  },
  {
    code: `import React from 'react'
import Select from '@hi-ui/hiui/es/select'\n
class Demo extends React.Component {
  constructor () {
    super()
    this.state = {
      value: '3',
      singleList: [
        { title:'电视', id:'3', disabled: true },
        { title:'手机', id:'2' },
        { title:'笔记本', id:'4', disabled: true },
        { title:'生活周边', id:'5' },
        { title:'办公', id:'6' },
      ]
    }
  }

  render () {
    const { value, singleList } = this.state
    return (
      <Select
        type='single'
        legacyV2
        style={{ width: 200 }}
        data={singleList}
        value={value}
        onChange={ids => {
          this.setState({
            value: ids
          })
        }}
      />
    )
  }
}`,
    opt: ['v2']
  },
  {
    code: `import React from 'react'
import Select from '@hi-ui/hiui/es/select'\n
import Radio from '@hi-ui/hiui/es/select'\n
() => {
  const list = [
    {
      id: '1',
      content: '电脑类'
    },
    {
      id: '2',
      content: '生活类'
    }
  ]

  const singleList = [
    { title: '电视', id: '1' },
    { title: '手机', id: '2' },
    { title: '办公', id: '3' },
    { title: '打杂', id: '4' }
  ]

  const singleList1 = [
    { title: '电视1', id: '1' },
    { title: '手机1', id: '2' },
    { title: '办公1', id: '3' },
    { title: '打杂1', id: '4' }
  ]

  const [selectVal, setSelectVal] = useState('1')

  const [radioVal, setRadioVal] = useState('1')
  console.log(radioVal === '1' ? singleList : singleList1)
  return (
    <div>
      <Radio.Group
        data={list}
        type="button"
        defaultValue={radioVal}
        value={radioVal}
        onChange={(data) => {
          console.log('data', data)
          setRadioVal(data)
        }}
      />
      <Select
        type="single"
        clearable={false}
        style={{ width: 200 }}
        value={selectVal}
        onChange={(val) => {
          setSelectVal(val)
        }}
        data={radioVal === '1' ? singleList : singleList1}
      />
    </div>
  )
}`,
    opt: ['搭配使用']
  }
]
const DemoType = () => (
  <DocViewer
    code={code}
    scope={{ Select, Tooltip, Radio, useState }}
    prefix={prefix}
    rightOptions={rightOptions}
    desc={desc}
  />
)
export default DemoType
