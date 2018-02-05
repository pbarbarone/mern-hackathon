import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import axios from 'axios';
import Flash from './layout/Flash.js';
import Footer from './layout/Footer.js';
import Home from './Home.js';
import Nav from './layout/Nav.js';
import Login from './auth/Login.js';
import Profile from './Profile.js';
import Signup from './auth/Signup.js';
import Househub from './Househub.js';
import BillForm from './BillForm.js';
import MemoForm from './MemoForm.js';
import Allmemos from "./Allmemos.js";

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      user: {},
      token: ''
    };
  }

  componentDidMount = () => {
    this.getUser();
  }

  getUser = () => {
    // If there is a token in localStorage
    let token = localStorage.getItem('mernToken');
    if (token === 'undefined' || token === null || token === '' || token === undefined) {
      localStorage.removeItem('mernToken');
      this.setState({
        token: '',
        user: null,
        house: null
      });
    } else {

      //   Validate the token against the server
      axios.post('/auth/me/from/token', {
        token: token
      }).then(response => {
        //   Store the token and user
        localStorage.setItem('mernToken', response.data.token);
        this.setState({
          token: response.data.token,
          user: response.data.user,
          house: response.data.house,
          roommates: response.data.roommates
        });
        // Pass User into child components and display main app
      }).catch(err => {
        // Both the JWT and db errors will be caught here
        console.log('cdm', err);
        this.setState({
          token: '',
          user: null
        });
      })
    }
  }

  updateUser = () => {
    this.getUser();
  }

  setFlash = (t, msg) => {
    this.setState({
      flash: msg,
      flashType: t
    });
  }

  cancelFlash = () => {
    this.setState({
      flash: '',
      flashType: ''
    });
  }

  render() {
    return (
      <div className="App">
        <Router>
          <div className="content-container">
          <div className="nav-hero">
            <span className="nav-hub-header">HouseHub</span>
          </div>
            <Nav user={this.state.user} updateUser={this.updateUser} house={this.state.house} />
              <Flash flashType={this.state.flashType} flash={this.state.flash} setFlash={this.setFlash} cancelFlash={this.cancelFlash} />
              <Route exact path="/" component={
                () => (<Home user={this.state.user} house={this.state.house} setFlash={this.setFlash} />)} />
              <Route path="/login" component={
                () => (<Login user={this.state.user} house={this.state.house} setFlash={this.setFlash} updateUser={this.updateUser} />)} />
              <Route path="/signup" component={
                () => (<Signup user={this.state.user} house={this.state.house} setFlash={this.setFlash} updateUser={this.updateUser} />)} />
              <Route path="/profile" component={
                () => (<Profile user={this.state.user} house={this.state.house} roommates={this.state.roommates} refreshUser={this.getUser} setFlash={this.setFlash} />)} />
              <Route path="/househub" component={
                () => (<Househub  user={this.state.user} house={this.state.house} roommates={this.state.roommates} refreshUser={this.getUser} setFlash={this.setFlash} />)} />
              <Route path="/newmemo" component={
                () => (<MemoForm refreshList={this.getUser} house={this.state.house} user={this.state.user}/>)} />
              <Route path="/allmemos" component={
                () => (<Allmemos refreshList={this.getUser} house={this.state.house} user={this.state.user}/>)} />
              <Route path="/newbill" component={
                () => (<BillForm mode={"add"} refreshList={this.getUser} house={this.state.house} />)} />
              <Route path="/editbill" component={
                () => (<BillForm mode={"edit"} refreshList={this.getUser} house={this.state.house}/>)}/>
              <Route path="/allbills" component={
                () => (<BillForm mode={"allbills"} refreshList={this.getUser} house={this.state.house}/>)}/>
            <div className="push"></div>
          </div>
        </Router>
        <Footer />
      </div>
    );
  }
}

export default App;