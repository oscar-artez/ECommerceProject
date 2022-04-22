import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/authContext";

const Login = () => {
    const { login } = useAuth();
    const navigate = useNavigate();
    const [user, setUser] = useState({
      email: "",
      password: "",
    });
    const [error, setError] = useState(null);
  
    const handleChange = ({ target: { name, value } }) => {
      setUser({ ...user, [name]: value });
    };
  
    const handleSubmit =async(e) => {
      e.preventDefault();
        
      try{
          await login(user.email, user.password)
          // Signed in
          navigate("/");
          // const user = userCredential.user;
          // ...
        }
        catch(error) {
          const errorCode = error.code;
          const errorMessage = error.message;
          if(errorCode === "auth/weak-password"){
              setError("Password should be at least 6 characters");
          }else if(errorCode === "auth/email-already-in-use"){
              setError('Email already in use');
          }
        }
  
    };
  
    return (
      <div className="ContainerForm">
        {error && <p>{error}</p>} 
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="email"
            name="email"
            onChange={handleChange}
          />
          <input
            type="password"
            placeholder="password"
            name="password"
            onChange={handleChange}
          />
          <button>Iniciar Sesión</button>
        </form>
      </div>
    );
}

export default Login