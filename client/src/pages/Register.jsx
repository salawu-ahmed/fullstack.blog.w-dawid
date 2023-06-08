import { useState } from 'react'

const Register = () => {
  const [userName, setUserName] = useState('')
  const [password, setPassword] = useState('')

  const register = async (e) =>{
    e.preventDefault()
      const response = await fetch('http://localhost:4000/register', {
       method: 'POST',
       body: JSON.stringify({userName,password}),
       headers:{'Content-Type': 'application/json'}
     })
    if (response.ok == 200) {
      alert('registration successful')
    }else{
      alert('registration sccessfull')
    }
  }
  return (    
    <form className='register' onSubmit={register}>
        <h1>Register</h1>
        <input 
          type="text" 
          placeholder='username' 
          onChange={(e) => setUserName(e.target.value)}
          value={userName} 
        />
        <input 
          type="password" 
          placeholder='password' 
          onChange={(e) => setPassword(e.target.value)}
          value={password}
        />
        <button>Register</button>
    </form>     
    )
}

export default Register