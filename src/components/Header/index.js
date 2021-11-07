import {Component} from 'react'

import {Link, withRouter} from 'react-router-dom'

import Cookies from 'js-cookie'

import './index.css'

import Hat from '../assets/LoginPage/Hat.svg'

class Header extends Component {
  LogMeOut = () => {
    Cookies.remove('jwt_token')
    const {history} = this.props
    history.replace('/login')
  }

  render() {
    const {homeOrCart} = this.props
    return (
      <>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <Link className="navbar-brand" to="/">
            <img src={Hat} alt="website logo" />
          </Link>
          <p className="text"> Tasty Kitchen</p>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"> </span>
          </button>
          <div
            className="collapse navbar-collapse MakeIt"
            id="navbarNavAltMarkup"
          >
            <ul className="navbar-nav">
              <li>
                <Link
                  id={homeOrCart ? 'colorIt' : 'NoColorIt'}
                  className="nav-item nav-link"
                  to="/"
                >
                  <p>Home</p>
                </Link>
              </li>
              <li>
                <Link
                  className="nav-item nav-link"
                  id={!homeOrCart ? 'colorIt' : 'NoColorIt'}
                  to="/cart"
                >
                  <p>Cart</p>
                </Link>
              </li>
              <div>
                <button
                  type="button"
                  className="btn btn-primary"
                  onClick={this.LogMeOut}
                >
                  Logout
                </button>
              </div>
            </ul>
          </div>
        </nav>
      </>
    )
  }
}

export default withRouter(Header)
