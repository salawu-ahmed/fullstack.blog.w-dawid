import  { useContext, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { UserContext } from './UserContext'

const Header = () => {
  const {userInfo, setUserInfo} = useContext(UserContext)

  useEffect(() =>{
    fetch('http://localhost:4000/profile',{
      credentials: 'include'
    })
      .then(res => res.json())
      .then(userInfo => setUserInfo(userInfo))
  })

  const logout =()=> {
    fetch('http://localhost:4000/logout',{
      method: 'POST',
      credentials: 'include'
    })
    setUserInfo(null)
  }

  const userName = userInfo?.userName

  return (
        <header>
          <Link to="/" className='logo'>My Blogs</Link>
          <nav>
            {
              userName && 
              <>
                <Link>New Article</Link> 
                <a onClick={logout}>logout</a>
              </>
            }
            {
              !userName && 
              <>
                <Link to="/login">Login</Link>
                <Link to="/register">Register</Link>
              </>
            }
          </nav>
        </header>  
    )
}

export default Header