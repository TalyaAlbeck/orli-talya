import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Keyboard from './components/Keyboard'
import Input from './components/Input'
import ChooseLanguage from './components/languages'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <Input /> */}
      <Keyboard/>
      {/* <ChooseLanguage /> */}
    </>
  )
}

export default App
