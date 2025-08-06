import { useState } from 'react'
import Opening from './pages/Opening'
import Home from './pages/Home'

function App() {
  const [count, setCount] = useState(0)

  return (
      <main className='bg-[#fec5f6] h-screen'>
        <Home />
      </main>
  )
}

export default App
