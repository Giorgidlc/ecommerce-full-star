import { useState } from 'react';

const LoginForm = () => {
    const [user_name, setUserName] = useState("");  // Añadido
    const [surname, setSurname] = useState("");    // Añadido
    const [email, setEmail] = useState("");
    const [user_password, setPassword] = useState("");
    const [error, setError] = useState(null);

  

    const handleUserNameChange = (e) => {
        setUserName(e.target.value);  // Añadido
    }

    const handleSurnameChange = (e) => {
        setSurname(e.target.value);    // Añadido
    }

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    }

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    }

    const handleSubmit = async (e) => {
      e.preventDefault();
  
      try {
          const response = await fetch('http://localhost:5000/login', {
              method: 'POST',
              headers: {
                  'Content-Type': 'application/json'
              },
              body: JSON.stringify({ 
                  user_name: user_name,  
                  surname: surname, 
                  email: email, 
                  user_password: user_password  
              })
          });
  
          const data = await response.json();
           console.log(data);
          if (data.token) {
              localStorage.setItem('token', data.token);
              console.log('Successful Authentication');
              setError(null);
          } else {
              setError('Invalid Credentials');
          }
      } catch (error) {
          console.error('Error during authentication:', error);
          setError('Authentication failed. Please try again.');
      }
  }
  

    return (
        <section className='loginForm'>
            <figure className="logoLogin">
                <img src="/src/assets/LOGO.svg" alt="Logo" className="logoEmbed" />
            </figure>
            <form onSubmit={handleSubmit} className='formContainer'>
                <h2 className='titleLoginForm'>Log in to <br /> Cookies & Dreams</h2>
                <section className='inputSection'>
                    {/* Inputs adicionales */}
                    <label htmlFor='userName'>
                        <input
                            id='userName'
                            type="text"
                            placeholder='User Name'
                            value={user_name}
                            onChange={handleUserNameChange}
                        />
                    </label>
                    <label htmlFor='surname'>
                        <input
                            id='surname'
                            type="text"
                            placeholder='Surname'
                            value={surname}
                            onChange={handleSurnameChange}
                        />
                    </label>
                    <label htmlFor='email'>
                        <input
                            id='email'
                            type="text"
                            placeholder='E-mail'
                            value={email}
                            onChange={handleEmailChange}
                        />
                    </label>
                    <label htmlFor='password'>
                        <input
                            type="password"
                            placeholder='Password'
                            value={user_password}
                            onChange={handlePasswordChange}
                        />
                    </label>
                </section>
                <button type="submit" id='login--Btn'>Log In</button>
            </form>
            {error && <p>{error}</p>}
        </section>
    );
}

export default LoginForm;
