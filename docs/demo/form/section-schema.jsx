import React from 'react'
import DocViewer from '../../../libs/doc-viewer'
import Form from '../../../components/form/index'
import Input from '../../../components/input'
import Button from '../../../components/button'
import Select from '../../../components/select'
import Counter from '../../../components/counter'
import Cascader from '../../../components/cascader'
import Radio from '../../../components/radio'
import Checkbox from '../../../components/checkbox'
import Switch from '../../../components/switch'
import SelectTree from '../../../components/select-tree'
import DatePicker from '../../../components/date-picker'
import Rate from '../../../components/rate'
import Upload from '../../../components/upload'
import Grid from '../../../components/grid'

const prefix = 'form-schema'
const desc = '通过schema配置表单，现仅支持HiUI组件'
const leftOptions = ['基础用法', '动态表单', '与FormItem混用']

const code = [
  {
    opt: ['基础用法'],
    code: `import React from 'react'
    import { Form,Counter} from '@hi-ui/hiui'\n
    class Demo extends React.Component {  
      constructor(props){
        super(props)
        this.state = {
          initialValues : {
            inputField: 'test schema',
            selectField: "3",
          },
          formSchema:[
              {
                label:'输入框',
                field:'inputField',
                rules:{ min: 5, max: 16, message: '长度在 6 到 16 个字符', trigger: 'onBlur' },
                component:'Input',
                componentProps:{
                    placeholder:'schema',
                    clearable:true,
                    style:{ width: 300 } 
                }
              },
              {
                label:'下拉框',
                field:'selectField',
                component:'Select',
                required:true,
                componentProps:{
                    placeholder:'schema',
                    style:{ width: 300 },
                    data:[
                      { title:'电视', id:'3', disabled: true },
                      { title:'手机', id:'2' },
                      { title:'笔记本', id:'4', disabled: true },
                      { title:'生活周边', id:'5' },
                      { title:'办公', id:'6' }
                    ],
                }
              },
              {
                label:'复选框',
                field:'Checkbox',
                component:'Checkbox.Group',
                required:true,
                componentProps:{
                    placeholder:'schema',
                    data:[{
                      content: '手机',
                      id: 'Phone'
                    },{
                      content: '电脑',
                      id: 'Computer'
                    },{
                      content: '智能',
                      id: 'Intelli'
                    },{
                      content: '出行',
                      id: 'Transfer',
                      disabled: true
                    }],
                    onChange:(data) => console.log("Checkbox data",data)
                }
              },
              {
                label:'日期',
                field:'datePicker',
                component:'DatePicker',
                required:true,
                componentProps:{
                  type:'daterange',
                  format:'yyyy-MM-dd',
                  onChange:(date, dateStr) => {console.log('onChange DatePicker', date, dateStr)}
                }
              }
          ]
        }
        this.form = React.createRef()
      }
      render () {
        const SchemaForm = Form.SchemaForm
        const {initialValues} = this.state
    
        return (
          <div>
          <SchemaForm 
            labelWidth='100' 
            labelPlacement='right' 
            initialValues={initialValues}
            schema={this.state.formSchema}
            ref={this.form}
            submit={{
              type:'primary',
              children:'提交',
              onClick:(value,errors) => {console.log('value,errors', value,errors)}
            }}
            reset={{
              type:'line',
              children:'重置',
              onClick:() => {console.log('reset form')}
            }}
            onValuesChange ={(changedValues,allValues) => {
             console.log("formdata",changedValues,allValues)
            }}
          />
          <Button 
            style={{margin: "-104px 0px 0px 236px"}}
            onClick={()=>{
              this.form.current.updateFormSchema({
                  selectField: {
                    label:'菜单',
                    required:true,
                    componentProps:{
                        data:[
                          { title:'电视', id:'3', disabled: true },
                          { title:'手机', id:'2' }
                        ],
                    }
                  },
                  inputField: {
                    label:'输入框',
                    field:'inputField',
                    rules:{ min: 5, max: 16, message: '长度在 6 到 16 个字符', trigger: 'onBlur' },
                    component:'SelectTree',
                    componentProps:{
                        placeholder:'请输入',
                    }
                  }
              })
          }}>
          更新表单配置
          </Button>
          </div>
          
        )
      }
    }`
  },
  {
    opt: ['基础用法2'],
    code: `import React from 'react'
    import { Form,Counter} from '@hi-ui/hiui'\n
    class Demo extends React.Component {  
      constructor(props){
        super(props)
        this.defaultSchema = [
          {
            label: '输入框1',
            field: 'inputField',
            rules: [
              {
                required: true,
                min: 5,
                max: 16,
                message: '输入框1',
                trigger: 'onBlur',
                type: 'array'
              },
            ],
            component: 'Input',
            componentProps: {
              placeholder: 'schema',
              clearable: true,
              style: { width: 300 },
            },
          },
          {
            label: '下拉框1',
            field: 'selectField',
            component: 'Select',
            rules: [{ required: true, message: '下拉框1', trigger: 'onBlur' }],
            componentProps: {
              placeholder: 'schema',
              style: { width: 300 },
              data: [
                { title: '电视', id: '3', disabled: true },
                { title: '手机', id: '2' },
                { title: '笔记本', id: '4', disabled: true },
                { title: '生活周边', id: '5' },
                { title: '办公', id: '6' },
              ],
            },
          },
        ]
        this.state = {
          schemas:this.defaultSchema,
          type: 1
        }
        this.formRef6 = React.createRef()
      }
      addSchema() {
        const copySchema = [...this.defaultSchema]
        copySchema.push({
          label: '输入框2',
          field: 'inputField2',
          rules: [
            {
              required: true,
              min: 5,
              max: 16,
              message: '输入框2',
              trigger: 'onBlur',
            },
          ],
          component: 'Input',
          componentProps: {
            placeholder: 'schema',
            clearable: true,
            style: { width: 300 },
          },
        })
        return copySchema
      }
      subSchema() {
        const copySchema = [...this.defaultSchema]
        copySchema.push({
          label: '输入框2',
          field: 'inputField2',
          rules: [
            {
              required: true,
              min: 5,
              max: 16,
              message: '输入框2',
              trigger: 'onBlur',
            },
          ],
          component: 'Input',
          componentProps: {
            placeholder: 'schema',
            clearable: true,
            style: { width: 300 },
          },
        })
        copySchema.splice(0, 1, {
          label: '输入框3',
          field: 'inputField3',
          rules: [
            {
              required: true,
              min: 5,
              max: 16,
              message: '输入框3',
              trigger: 'onBlur',
            },
          ],
          component: 'Input',
          componentProps: {
            placeholder: 'schema',
            clearable: true,
            style: { width: 300 },
          },
        })
        return copySchema
      }
      btnClick(idx) {
        console.log('this.formRef6', this.formRef6)
        this.formRef6.current.clearValidates()
        let nSc = []
        switch (idx) {
          case 2:
            nSc = this.addSchema()
            break
          case 3:
            nSc = this.subSchema()
            break
          default:
            nSc = this.defaultSchema
            break
        }
        console.log('nSc', nSc)
        this.setState({
          schemas: nSc,
          type: idx
        })
      }
      render () {
        const {schemas, type} = this.state
        const SchemaForm = Form.SchemaForm
        
        return (
          <div>
              <Button
                type={type === 1 ? 'primary' : 'default'}
                onClick={this.btnClick.bind(this,1)}
              >
                t1
              </Button>
              <Button
                type={type === 2 ? 'primary' : 'default'}
                onClick={this.btnClick.bind(this, 2)}
              >
                t2
              </Button>
              <Button
                type={type === 3 ? 'primary' : 'default'}
                onClick={this.btnClick.bind(this, 3)}
              >
                t3
              </Button>
            {console.log('schemas', schemas)}
            <SchemaForm
              ref={this.formRef6}
              schema={schemas}
              labelWidth='100'
              labelPlacement='right'
              submit={{
                type: 'primary',
                children: '提交',
                onClick: (value, errors) => {
                  console.log('value,errors', value, errors)
                },
              }}
            ></SchemaForm>
            <Button onClick={()=>{
              console.log(this.formRef6)
              this.formRef6.current.validate((value, errors) => {
                console.log('value,errors', value, errors)
              })
            }}>sdfsd</Button>
          </div>
        )
      }
    }`
  },
  {
    opt: ['动态表单'],
    code: `import React from 'react'

    import { Form,Counter} from '@hi-ui/hiui'\n
    
    class Demo extends React.Component {  
      constructor(props){
        super(props)
        this.state = {
          initialValues : {
            inputField: 'test schema',
            selectField: "3",
            radio:'show'
          },
          formData:{
            inputField: 'test schema',
            selectField: "3",
          },
          formSchema:[
              {
                label:'输入框',
                field:'inputField',
                rules:[{ min: 5, max: 16, message: '长度在 6 到 16 个字符', trigger: 'onBlur' }],
                component:'Input',
                componentProps:{
                    placeholder:'schema',
                    clearable:true,
                    style:{ width: 300 } 
                }
              },
              {
                label:'下拉框',
                field:'selectField',
                component:'Select',
                required:true,
                componentProps:{
                    placeholder:'schema',
                    style:{ width: 300 },
                    data:[
                      { title:'电视', id:'3', disabled: true },
                      { title:'手机', id:'2' },
                      { title:'笔记本', id:'4', disabled: true },
                      { title:'生活周边', id:'5' },
                      { title:'办公', id:'6' }
                    ],
                }
              },
              {
                label:'控制日期',
                field:'radio',
                component:'Radio.Group',
                required:true,
                componentProps:{
                    data:[{
                      content: '显示日期',
                      id: 'show'
                    },{
                      content: '隐藏日期',
                      id: 'hide'
                    }],
                    onChange:(data) => console.log("Radio data",data)
                }
              },
              {
                label:'日期',
                field:'datePicker',
                component:'DatePicker',
                required:true,
                componentProps:{
                  type:'daterange',
                  format:'yyyy-MM-dd',
                  onChange:(date, dateStr) => {console.log('onChange DatePicker', date, dateStr)}
                }
              }
          ]
        }
        this.initSchemaData = this.state.formSchema
        this.form = React.createRef()
      }

      render () {
        const {initialValues, formData, formSchema} = this.state
        const SchemaForm = Form.SchemaForm
    
        return (
          <SchemaForm 
            labelWidth='100' 
            labelPlacement='right' 
            initialValues={initialValues}
            schema={formSchema}
            ref={this.form}
            submit={{
              type:'primary',
              children:'提交',
              onClick:(value,errors) => {console.log('value,errors', value,errors)}
            }}
            reset={{
              type:'line',
              children:'重置',
              onClick:() => {console.log('reset form')}
            }}
            onValuesChange ={(changedValues,allValues) => {
            //  console.log("formdata",changedValues,allValues,this.form.current.validate())
             this.setState({
              formData: allValues
             })
             if(changedValues.radio && changedValues.radio === 'hide'){
              this.setState({
                formSchema: formSchema.filter((item)=>{
                  return item.field !== 'datePicker'
                })
               })
             } else {
              this.setState({
                formSchema: this.initSchemaData
               })
             }
            }}
          />
        )
      }
    }`
  },
  {
    opt: ['与FormItem混用'],
    code: `import React from 'react'
    import { Form,Counter} from '@hi-ui/hiui'\n
    class Demo extends React.Component {  
      constructor(props){
        super(props)
        this.state = {
          formData : {
            inputField: 'test schema',
            selectField: "3",
            counter:1,
            date:'',
          },
          formSchema:[
              {
                label:'输入框',
                field:'inputField',
                rules:[{ min: 5, max: 16, message: '长度在 6 到 16 个字符', trigger: 'onBlur' }],
                component:'Input',
                componentProps:{
                    placeholder:'schema',
                    clearable:true,
                }
              },
              {
                label:'下拉框',
                field:'selectField',
                component:'Select',
                required:true,
                componentProps:{
                    placeholder:'schema',
                    data:[
                      { title:'电视', id:'3', disabled: true },
                      { title:'手机', id:'2' },
                      { title:'笔记本', id:'4', disabled: true },
                      { title:'生活周边', id:'5' },
                      { title:'办公', id:'6' }
                    ],
                }
              }
          ]
        }
      }
      render () {
        const FormItem = Form.Item
        const FormSubmit = Form.Submit
        const FormReset = Form.Reset
        const SchemaForm = Form.SchemaForm
    
        const {formData} = this.state
        const Row = Grid.Row
        const Col = Grid.Col
        return (
          <SchemaForm 
            labelWidth='100' 
            labelPlacement='right' 
            initialValues={formData}
            schema={this.state.formSchema}
            onValuesChange ={(changedValues,allValues) => {
             console.log("formdata",changedValues,allValues)
            }}
          >
            <FormItem 
              label='日期' 
              field="date" 
              required={true} 
              component="DatePicker" 
              componentProps={{
                type:'daterange',
                format:'yyyy-MM-dd',
                onChange:(date, dateStr) => {console.log('onChange DatePicker', date, dateStr)}
              }}
            />
            <FormItem label='Counter' field="counter" required={true}>
                <Counter step='1'  min='-10' max='10' />
            </FormItem>
            <FormItem>
             <FormSubmit type='primary' 
              onClick={(values,errors)=>{
                console.log('Get form value:',values,errors)}
              }
              >提交</FormSubmit>
              <FormReset type='line' 
                onClick={()=>{console.log('reset form')}}
              >重置</FormReset>
            </FormItem>
          </SchemaForm>
        )
      }
    }`
  }
]

const DemoRow = () => (
  <DocViewer
    code={code}
    scope={{
      Form,
      Button,
      Input,
      Select,
      Counter,
      Cascader,
      Radio,
      Checkbox,
      Switch,
      DatePicker,
      Rate,
      Upload,
      Grid,
      SelectTree
    }}
    prefix={prefix}
    desc={desc}
    leftOptions={leftOptions}
  />
)
export default DemoRow
