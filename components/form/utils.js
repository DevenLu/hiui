import _ from 'lodash'

// 需要做一个filed的规则解析
const tranformListValues = (field, listNestValues, value, listname) => {
  const fieldSplit = field.split('#')
  const key = fieldSplit[1]
  const keyName = fieldSplit[0]
  if (listNestValues[listname][keyName]) {
    listNestValues[listname][keyName] = _.merge(listNestValues[listname][keyName], {
      [key]: value
    })
  } else {
    listNestValues[listname][keyName] = { [key]: value }
  }
}
// 转换输出的值
export const transformValues = (allvalue, fields) => {
  let tranformValues = {}
  const listNestValues = {}
  // 根据sort进行数据排列
  const sortfields = _.sortBy(fields, ['sort'])
  sortfields.forEach((filedItem) => {
    const { realField, field, propsField, _type, listname } = filedItem
    if (_type === 'list') {
      if (propsField !== realField) {
        listNestValues[listname] = listNestValues[listname] || {}
        tranformListValues(realField, listNestValues, allvalue[realField], listname)
        Object.keys(listNestValues).forEach((key) => {
          const arr = []
          Object.keys(listNestValues[key]).forEach((item) => {
            arr.push(listNestValues[key][item])
          })
          tranformValues[key] = arr
        })
        return
      }
      if (tranformValues[listname]) {
        tranformValues[listname].push(allvalue[realField])
      } else {
        tranformValues[listname] = [allvalue[realField]]
      }
    } else {
      let readField = realField

      // bugfix: https://github.com/XiaoMi/hiui/issues/2077
      if (_type === 'SchemaForm') {
        if (Object.keys(allvalue).includes(field)) {
          readField = field
        }
      }

      if (Array.isArray(propsField)) {
        const chainKeys = propsField.reduceRight((pre, next) => {
          return { [next]: pre }
        }, allvalue[readField])
        tranformValues = _.merge(tranformValues, chainKeys)
      } else {
        tranformValues = _.merge(tranformValues, { [realField]: allvalue[readField] })
      }
    }
  })
  return tranformValues
}
