import { useState } from 'react'
import logo from './logo.svg'
import Sidebar from './components/Sidebar'
import Chat from './components/Chat'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="app">
      {/* Sidebar */}
        <Sidebar />
      {/* Chat */}
        <Chat />
    </div>
  )
}

export default App
