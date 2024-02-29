import React from 'react'
import ReactDOM from 'react-dom'
import App from './index.js'
import dotenv from 'dotenv'

dotenv.config() // .envファイルの環境変数を読み込む

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
)
