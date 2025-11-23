import { useState } from 'react'
import './App.css'
import Header from './Header'

const TestElement = () => {
  return (
    <>
      <Header>
      </Header>
    </>
  )
}

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <TestElement>
      </TestElement>
    </>
  )
}

export default App
