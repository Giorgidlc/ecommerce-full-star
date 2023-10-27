import { useState } from 'react';

const SignUpForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [users, setUsers] = useState([]); // Aramazenar los nuevos users

  const handleNameChange = (e) => {
    setName(e.target.value);
  }

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  }

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    // Crie um novo objeto de usuário com as informações fornecidas
    const newUser = { name, email, password };

    // Adicione o novo usuário à lista de usuários
    setUsers([...users, newUser]);

    // Borrar campos de entrada
    setName("");
    setEmail("");
    setPassword("");
  }

  return (
    <section className='signupForm'>
      <h2 className='titleSignUpForm'>Sign Up for Cookies & Dreams</h2>
      <form onSubmit={handleSubmit} className='formContainer'>
        <section className='name-inputSection'>
          <label htmlFor='name-input'>Name:</label>
          <input
            type="text"
            value={name}
            onChange={handleNameChange}
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
            value={password}
            onChange={handlePasswordChange}
          />
        </section>
        <button type="submit" id='signup-Btn'>Sign Up</button>
      </form>
    </section>
  );
}

export default SignUpForm;