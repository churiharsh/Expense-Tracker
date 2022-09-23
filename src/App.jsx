import { useState } from 'react'
import Signin from './components/Signin/Signin'
// import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    
    <div >
      <Signin/>
    </div>
  )
}

export default App
