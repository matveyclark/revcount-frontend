import React from 'react';
import { Switch, Route, withRouter } from 'react-router-dom'
import Header from './components/layout/Header'
import LoginForm from './components/auth/LoginForm'
import Homepage from './components/pages/Homepage'
import Dashboard from './components/pages/Dashboard'
import RegisterForm from './components/auth/RegisterForm'
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
          this.props.history.push('/dashboard')
      }).catch(error => alert(error))
    }
  }

  render() {
    const { username, logout, login, history, clearProject } = this.props
    return (
      <React.Fragment>
        <Header username={username} logout={logout} clearProject={clearProject} />
          <Switch>
            <Route exact path="/" component={(props) => <Homepage {...props} />} />
            <Route path="/login" component={(props) => <LoginForm login={login} {...props} />} />
            <Route path="/register" component={(props) => <RegisterForm {...props} history={history} login={login} />} />
            <Route path="/dashboard" component={(props) => <Dashboard {...props} username={username} /> } />
          </Switch>
      </React.Fragment>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
      login: (username, userType) => {
          dispatch({ type: 'LOGIN_USER', payload: {username, userType} })
      },
      logout: () => {
        dispatch({ type: 'LOGOUT_USER' })
        localStorage.clear()
      },
      clearProject: () => {
        dispatch({ type: 'CLEAR_PROJECT' })
      }
  }
}

const mapStateToProps = state => {
  return {
    username: state.userReducer.username,
    userType: state.userReducer.userType
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App))
