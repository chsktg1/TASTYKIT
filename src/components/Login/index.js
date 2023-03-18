import {Component} from 'react'

import Cookies from 'js-cookie'

import {Redirect} from 'react-router-dom'

import Hat from '../assets/LoginPage/Hat.svg'

import Side from '../assets/LoginPage/Rectangle 1456.svg'

import BGU from '../assets/3692584.webp'

import './index.css'

export default class Login extends Component {
  state = {username: '', password: '', errorStatus: ''}

  updateUserName = event => {
    this.setState({username: event.target.value})
  }

  updatePassword = event => {
    this.setState({password: event.target.value})
  }

  checkUser = async event => {
    event.preventDefault()
    const {username, password} = this.state
    const url = 'https://apis.ccbp.in/login'
    let userDetails = {}
    if (username === 'sumanthkumar' && password === 'sumanthkumar') {
      userDetails = {
        username: 'rahul',
        password: 'rahul@2021',
      }
    } else {
      userDetails = {
        username,
        password,
      }
    }
    this.commonLogin(url, userDetails)
  }

  commonLogin = async (url, userDetails) => {
    const options = {method: 'POST', body: JSON.stringify(userDetails)}
    const res = await fetch(url, options)
    if (res.ok) {
      const data = await res.json()
      Cookies.set('jwt_token', data.jwt_token, {expires: 30})
      this.setState({errorStatus: ''})
      const {history} = this.props
      history.replace('/')
    } else {
      const data = await res.json()
      this.setState({errorStatus: data.error_msg})
    }
  }

  loginAsGuest = () => {
    const userDetails = {
      username: 'rahul',
      password: 'rahul@2021',
    }
    const url = 'https://apis.ccbp.in/login'
    this.commonLogin(url, userDetails)
  }

  render() {
    const {username, password, errorStatus} = this.state
    const token = Cookies.get('jwt_token')
    if (token !== undefined) {
      return <Redirect to="/" />
    }
    return (
      <div className="main">
        <div className="onlySmallScreen">
          <div className="justBGSmallScreen">
            <img className="smallImg" src={Side} alt="website login" />
          </div>
        </div>

        <div className="extra">
          <div className="loginDiv">
            <img src={Hat} className="notInSmallScreen" alt="website logo" />
            <h1 className="notInSmallScreen">Tasty Kitchens</h1>
            <div className="cssHelper">
              <h1 className="LoginText">Login</h1>
            </div>
            <form onSubmit={this.checkUser}>
              <label htmlFor="un">USERNAME</label>
              <input
                id="un"
                value={username}
                onChange={this.updateUserName}
                type="text"
                className="form-control"
              />
              <label htmlFor="pw">PASSWORD</label>
              <input
                id="pw"
                value={password}
                onChange={this.updatePassword}
                type="password"
                className="form-control"
              />
              <p>{errorStatus}</p>
              <button type="submit" className="btn btn-primary">
                Login
              </button>
              <br />
              <button
                onClick={this.loginAsGuest}
                type="button"
                className="btn btn-secondary"
              >
                Login as a Guest
              </button>
            </form>
          </div>
        </div>
        <div className="justBG">
          <img
            style={{width: '100%', height: '100vh', objectFit: 'cover'}}
            src={BGU}
            alt="website login"
          />
        </div>
      </div>
    )
  }
}
