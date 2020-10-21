import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import App from './view'
import store from './redux/store'
import { ThemeContext } from '../components/context'
import './style/index.scss'

render(
  <Provider store={store}>
    <ThemeContext.Provider value="lavender">
      <App />
    </ThemeContext.Provider>
  </Provider>,
  document.getElementById('app')
)
