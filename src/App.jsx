
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Login from './Login'
import Register from './Register'
import { ToastContainer } from 'react-toastify'
import Home from './Home'

function App() {

  return (
    <div className='App'>
      <ToastContainer theme='colored'></ToastContainer>
      <BrowserRouter>
        <Routes>
          <Route  path='/' element={<Login/>}></Route>
          <Route  path='/home' element={<Home/>}></Route>
          <Route  path='register' element={<Register />}></Route>
        </Routes>
        
        
        </BrowserRouter>
    </div>
  )
}

export default App
