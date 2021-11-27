import React from 'react'

export * from './basic.stories'
export * from './list.stories'

export default {
  title: 'Form',
  decorators: [(story: Function) => <div>{story()}</div>],
}
