
import React from 'react'
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/authContext'

const Home = () => {
  
    const {user, logout} = useAuth();

    const handleLogout = async () =>{
        await logout();
    }

    return (
    <div>Home
        <h1>Welcome {user.email}</h1>
        <button onClick={handleLogout}>Logout</button>
    </div>
  )
}

export default Home