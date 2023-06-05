import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import PdfBuilder from './components/PdfBuilder'

function App() {
  const [count, setCount] = useState(0)

  return (
    <PdfBuilder/>
  )
}

export default App
