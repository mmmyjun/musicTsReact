# 音乐播放器: react+ts+mui

项目创建步骤https://create-react-app.dev/docs/getting-started: 
mui: npm install @mui/material @emotion/react @emotion/styled
npm install @mui/icons-material


npx create-react-app my-app --template typescript
npm install http-proxy-middleware
npm i react-router-dom

- 纯用Link报错后because the react-router-dom Link implementation is calling useContext and the context it is looking for is provided by BrowserRouter，\
==>解决方法:
You're using Link from react-router-dom but your app is not wrapped by a BrowserRouter. Your index.js:
import { BrowserRouter } from 'react-router-dom'
render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById('root')
)
because the react-router-dom Link implementation is calling useContext and the context it is looking for is provided by BrowserRouter
