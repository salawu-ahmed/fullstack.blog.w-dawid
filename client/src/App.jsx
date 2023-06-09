import './App.css'
import Layout from './Layout'
import {Route, Routes} from 'react-router-dom'
import Home from './pages/Home'
import Login from './pages/Login'
import Register from './pages/Register'
import { UserContextProvider } from './UserContext'

function App() {

  return (
    <>
    <UserContextProvider>
      <Routes>
        <Route path='/' element={<Layout/>}>
          <Route index element={<Home/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/register' element={<Register/>}/>
        </Route>
      </Routes>
    </UserContextProvider>
    </>
  )
}

export default App
