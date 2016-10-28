import React from 'react'
import { render } from 'react-dom'
import App from './containers/App'


let rootElement = document.getElementById('app')
render(
  <div>
    <App />
  </div>,
  rootElement
)