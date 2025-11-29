import { useState } from 'react'
import Home from './pages/Home'
  import { ToastContainer, toast } from 'react-toastify';


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
  
   <Home />
   <ToastContainer />

    </>
  )
}

export default App
