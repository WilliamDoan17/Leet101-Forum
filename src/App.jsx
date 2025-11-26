import { useState } from 'react'
import { BrowserRouter } from 'react-router-dom'
import './App.css'
import Header from './Header'
import SearchPage from './SearchPage'
import Body from './Body'
import Footer from './Footer'

const TestElement = () => {
  return (
    <>
      <Header>
      </Header>
      <Body>
      </Body>
      <Footer>
      </Footer>
    </>
  )
}

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
        <TestElement>
        </TestElement>
      </BrowserRouter>
    </>
  )
}

export default App
