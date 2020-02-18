import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Header from './components/Layout/Header'
import LoginForm from './components/LoginForm'
import Homepage from './components/Pages/Homepage'
import Dashboard from './components/Pages/Dashboard'
import RegisterForm from './components/RegisterForm'
import { connect } from 'react-redux'
import API from './API'
import './App.css';

class App extends React.Component {

  componentDidMount() {
    if(localStorage.token) {
      API.validate()
      .then(data => {
          if(data.error) throw Error(data.error)
          this.props.login(data.email, data.user_type)
          localStorage.token = data.token
      }).catch(error => alert(error))
    }
  }

  render() {
    return (
      <Router>
        <Header />
        <Route exact path="/" component={(props) => <Homepage {...props} />} />
        <Route path="/login" component={(props) => <LoginForm login={this.props.login} {...props} />} />
        <Route path="/register" component={(props) => <RegisterForm {...props} login={this.props.login} />} />
        <Route path="/dashboard" component={Dashboard} />
      </Router>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
      login: (username, userType) => {
          dispatch({ type: 'LOGIN_USER', payload: {username, userType} })
      }
  }
}

const mapStateToProps = state => {
  return {
    username: state.userReducer.username,
    userType: state.userReducer.userType
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
