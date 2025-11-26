import { useState } from 'react'
import { BrowserRouter } from 'react-router-dom'
import './App.css'
import Header from './Header'
import SearchPage from './SearchPage'
import Body from './Body'
import Footer from './Footer'

function App() {
  return (
    <>
      <div
        className = 'app-container'
      >
        <BrowserRouter>
          <Header>
          </Header>
          <Body>
          </Body>
          <Footer>
          </Footer>
        </BrowserRouter>
      </div>
      
    </>
  )
}

export default App
