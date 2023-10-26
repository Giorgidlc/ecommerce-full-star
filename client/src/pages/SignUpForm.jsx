import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const SignUpForm = () => {
  const navigation = useNavigate();
  const [user_name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [email, setEmail] = useState("");
  const [user_password, setPassword] = useState("");
  const [users, setUsers] = useState([]); // Aramazenar los nuevos users
  const [error, setError] = useState(null);

  const handleNameChange = (e) => {
    setName(e.target.value);
  }

  const handleSurnameChange = (e) => {
    setSurname(e.target.value);
  }

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  }

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Crie um novo objeto de usuário com as informações fornecidas
    const newUser = { user_name, email, user_password };

    try {
      const response = await fetch('http://localhost:5000/register', {
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
      navigation("/login");
    } catch (error) {
      console.error('Error during authentication:', error);
      setError('Authentication failed. Please try again.');
    }


    // Adicione o novo usuário à lista de usuários
    setUsers([...users, newUser]);

    // Borrar campos de entrada
    setName("");
    setSurname("");
    setEmail("");
    setPassword("");
  }

  return (
    <section className='signupForm'>
      <h2 className='titleSignUpForm'>Sign Up for Cookies & Dreams</h2>
      <form onSubmit={handleSubmit}>
        <section className='name-inputSection'>
          <label htmlFor='name-input'>Name:</label>
          <input
            type="text"
            value={user_name}
            onChange={handleNameChange}
          />
        </section>
        <section className='surname-inputSection'>
          <label htmlFor='surname-input'>Surname:</label>
          <input
            type="text"
            value={surname}
            onChange={handleSurnameChange}
          />
        </section>
        <section className='email-inputSection'>
          <label htmlFor='email-input'>E-mail:</label>
          <input
            type="text"
            value={email}
            onChange={handleEmailChange}
          />
        </section>
        <section className='password-inputSection'>
          <label htmlFor='password-input'>Password:</label>
          <input
            type="password"
            value={user_password}
            onChange={handlePasswordChange}
          />
        </section>
        <button type="submit" id='signup-Btn'>Sign Up</button>
      </form>
    </section>
  );
}

export default SignUpForm;