import { useState } from 'react';
import { useLoaderData  } from 'react-router-dom'


const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  const users = useLoaderData();
  console.log(users)
  
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  }

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();

  
    // Autenticación
    const user = users.find((user) => user.email === email && user.password === password);
  

    if (user) {
      console.log('Successful Authentication');
      setError(null);
      //useNavegate react router
    } else {
      setError('Invalid');
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
            <label htmlFor='email'></label>
            <input
              id='email'
              type="text"
              placeholder='E-mail'
              value={email}
            onChange={handleEmailChange}
            />
            <label htmlFor='password'>
              <input
                type="password"
                placeholder='Password'
                value={password}
              onChange={handlePasswordChange}
              />
            </label>
          </section>
          <button type="submit" id='login--Btn'>Log In</button>
        </form>
        {error && <p>{error}</p>} {/* error message  */}
      </section>
    );
  }

export default LoginForm
