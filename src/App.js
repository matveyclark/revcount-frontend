import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Header from './components/Header'
import LoginForm from './components/LoginForm'
import Homepage from './components/Homepage'
import Dashboard from './components/Dashboard'
import RegisterForm from './components/RegisterForm'
import { connect } from 'react-redux'
import API from './API'
import './App.css';

class App extends React.Component {

  componentDidMount() {
    if(localStorage.token) {
        API.validate(this.props.username)
        .then(data => {
            if(data.error) throw Error(data.error)
            this.props.login(data.email)
        }).catch(error => alert(error))
    }
  }

  render() {
    return (
      <Router>
        <Header />
        <Route exact path="/" component={(props) => <Homepage {...props} />} />
        <Route path="/login" component={(props) => <LoginForm login={this.props.login} {...props} />} />
        <Route path="/register" component={(props) => <RegisterForm {...props} />} />
        <Route path="/dashboard" component={Dashboard} />
      </Router>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
      login: username => {
          dispatch({ type: 'LOGIN_USER', payload: username })
      }
  }
}

const mapStateToProps = state => {
  return {
    username: state.username
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
