import { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { UserContext } from '../UserContext'

const Login = () => {
  const navigate = useNavigate()

  
  const [userName, setUserName] = useState('')
  const [password, setPassword] = useState('')
  const [redirect, setRedirect] = useState(false)
  const {setUserInfo} = useContext(UserContext)

  const handleSubmit = async (e) => {
    e.preventDefault()
    const response = await fetch('http://localhost:4000/login', {
      method: 'POST',
      body: JSON.stringify({userName,password}),
      headers:{'Content-Type': 'application/json'},
      Credentials: 'include'
    })
    // redirecting to home page if the user credentials are correct 
    if(response.ok) {
      response.json()
        .then(userInfo => {
          setUserInfo(userInfo)
          setRedirect(true)
        })
    }else {
      alert('wrong credentials')
    }
  }
  
  if (redirect) navigate('/') //conditional rendering

  return (
    <form className='login' onSubmit={handleSubmit}>
        <h1>Login</h1>
        <input 
          type="text" 
          placeholder='username' 
          onChange = {(e) => setUserName(e.target.value)}
          value = {userName}
        />
        <input 
          type="password" 
          placeholder='password' 
          onChange = {(e) => setPassword(e.target.value)}
          value = {password}
        />
        <button>Login</button>
    </form>
  )
}

export default Login