import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Route, Routes, Link } from 'react-router-dom'
import { Home } from './pages/Home'
import { Private } from './pages/Private'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='App'>
      <header>
        <h1>Header do site</h1>
        <nav>
          <Link to='/'>Home</Link>
          <Link to='/private'>Página Privada</Link>
        </nav>
      </header>
      <hr />
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/private' element={<Private/>} />
      </Routes>
    </div>
  )
}

export default App
