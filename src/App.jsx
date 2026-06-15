import { useState } from 'react'
import Navbar from './navbar/Navbar'
import ThemeProvider from './ThemeContext'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <ThemeProvider>
      <Navbar/>
    </ThemeProvider>
    </>
  )
}

export default App
