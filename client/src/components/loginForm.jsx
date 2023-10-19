import { useState } from 'react';

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const users = [
    { email: 'jorge1@ejemplo.com', password: '12345' },
    { email: 'thuanny1@ejemplo.com', password: '54321' },
  ];

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
      <h2 className='titleLoginForm'>Log in to Cookies & Dreams</h2>
      <form onSubmit={handleSubmit}>
        <section className='email-inputSection'>
          <label htmlFor='email--input'>E-mail:</label>
          <input
            type="text"
            value={email}
            onChange={handleEmailChange}
          />
        </section>
        <section className='password-inputSection'>
          <label htmlFor='password--input'>Password:</label>
          <input
            type="password"
            value={password} 
            onChange={handlePasswordChange}
          />
        </section>
        <button type="submit" id='login--Btn'>Log In</button>
      </form>
      {error && <p>{error}</p>} {/* Display error message if there is an error */}
    </section>
  );
}

export default LoginForm;
