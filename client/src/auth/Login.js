import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import axios from 'axios';

class Login extends Component {
  constructor(props) {
    super(props)
    this.state = {
      email: '',
      password: '',
      houseId:''
    }
  }

  handleEmailChange = (e) => {
    this.setState({email: e.target.value});
  }

  handlePasswordChange = (e) => {
    this.setState({password: e.target.value});
  }


  handleSubmit = (e) => {
    e.preventDefault();
    axios.post('/auth/login', {
      email: this.state.email,
      password: this.state.password,
      house: this.state.houseId
    }).then((result) => {
      localStorage.setItem('mernToken', result.data.token);
      console.log("state of the house 1 " + result.data.user + result.data.house);

      this.setState({houseId: result.data.house})
      this.setState({ success: true });
      this.props.updateUser();
      console.log("state of the house" + this.state.houseId);

    }).catch((error) => {
      console.log('error returned', error.response.data);
      this.props.setFlash('error', error.response.status + ': ' + (error.response.data && error.response.data.error ? error.response.data.message : error.response.statusText));
    });
  }

  render() {
    let form = '';
    if(this.props.user){
      return (<Redirect to="/profile" />);
    }
    else {
      form = (<form onSubmit={this.handleSubmit}>
                <div>
                  <input className="login-input" name="Email"
                       placeholder="Enter your email"
                       value={this.state.email}
                       onChange={this.handleEmailChange}
                  />
                </div>
                <div>
                  <input className="login-input" name="Password"
                       placeholder="Enter your password"
                       type="password"
                       value={this.state.password}
                       onChange={this.handlePasswordChange}
                  />
                </div>
                <input type="submit" value="Login" className="login-button" />
              </form>);
    }
    return (
      <div>
        {form}
      </div>
    );
  }
}

export default Login;
