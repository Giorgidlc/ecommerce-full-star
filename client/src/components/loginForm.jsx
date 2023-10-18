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
      <div>
        <h2>Iniciar Sesión</h2>
        <form onSubmit={this.handleSubmit}>
          <div>
            <label>E-mail:</label>
            <input
              type="text"
              value={this.state.email}
              onChange={this.handleEmailChange}
            />
          </div>
          <div>
            <label>Password:</label>
            <input
              type="password"
              value={this.state.password}
              onChange={this.handlePasswordChange}
            />
          </div>
          <button type="submit">Log In</button>
        </form>
      </div>
    );
  }
}

export default LoginForm;


