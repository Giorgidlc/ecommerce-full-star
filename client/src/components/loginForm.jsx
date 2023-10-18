import { Component } from 'react';

class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
    };
  }

  handleEmailChange = (e) => {
    this.setState({ email: e.target.value });
  }

  handlePasswordChange = (e) => {
    this.setState({ password: e.target.value });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    // Autenticación
    const { email, password } = this.state;
    const users =[
        { email: 'jorge1@ejemplo.com', password: '12345'},
        { email: 'thuanny1@ejemplo.com', password: '54321'},
    ];

    const user =users.find((user) => user.mail === email && user.password === password);

    if (user){
        console.log('Successful Authentication');
        this.setState({ error: null });
    } 
    else{ //Error
        this.setState({ error: 'Invalid' });
    }
  }

  render() {
    return (
      <section className='loginForm'>
        <h2 className='titleLoginForm'>Log in to Coockies & Dreams</h2>
        <form onSubmit={this.handleSubmit}>
          <section className='email-inputSection'>
            <label id='email--input'>E-mail:</label>
            <input
              type="text"
              value={this.state.email}
              onChange={this.handleEmailChange}
            />
          </section>
          <section className='password-inputSection'>
            <label id='password--input'>Password:</label>
            <input
              type="password"
              value={this.state.password}
              onChange={this.handlePasswordChange}
            />
          </section>
          <button type="submit" id='login--Btn'>Log In</button>
        </form>
      </section>
    );
  }
}

export default LoginForm;


