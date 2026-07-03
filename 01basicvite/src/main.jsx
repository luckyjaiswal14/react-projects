import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'

const reactElement = {
    type: "a",
    props: {
        href: "https://google.com",
        target: "_blank"
    },
    children: "Click me to visit Google"
}

function MyApp(){
  return (
      <div>
        <h1> My React App! </h1>
      </div>
  )
}

const AnotherElement = (
  <a href="https://google.com" target="_blank"> Visit Google </a>
)

const areactElement = react.createElement(
  "a",
  {
    href: "https://google.com",
    target: "_blank"
  },
  "Click me to visit Google"
)

ReactDOM.createRoot(document.getElementById('root')).render(
    <App />
)
