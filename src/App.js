/* eslint-disable */

import {Component} from 'react'

import {Switch, Route} from 'react-router-dom'

import Login from './components/Login'

import ProtectedPath from './components/ProtectedPath'

import Home from './components/Home'

import Cart from './components/Cart'

import SpecificRest from './components/SpecificRest'

import CartContext from './components/CartContext'

import NotFound from './components/NotFound'

import './App.css'

class App extends Component {
  state = {cart: []}

  componentDidMount() {
    const cartFromLC = localStorage.getItem('cart')
    if (cartFromLC === null) {
      this.setState({cart: []})
    } else {
      this.setState({cart: JSON.parse(cartFromLC)})
    }
    console.log('cartFromLC', cartFromLC)
  }

  increaseQuantity = item => {
    const {cart} = this.state
    const index = cart.findIndex(e => e.id === item)
    cart[index]['quantity'] = cart[index]['quantity'] + 1
    localStorage.setItem('cart', JSON.stringify(cart))
    this.setState({cart})
  }
  decreaseQuantity = item => {
    const {cart} = this.state
    const index = cart.findIndex(e => e.id === item)
    if (cart[index]['quantity'] !== 1) {
      cart[index]['quantity'] = cart[index]['quantity'] - 1
      localStorage.setItem('cart', JSON.stringify(cart))
      this.setState({cart})
    } else {
      const newCart = cart.filter(e => e.id !== item)
      localStorage.setItem('cart', JSON.stringify(newCart))
      this.setState({cart: newCart})
    }
  }

  addCartItem = item => {
    const {cart} = this.state
    if (!cart.includes(item)) {
      item.quantity = 1
      this.setState({cart: [...cart, item]})
      localStorage.setItem('cart', JSON.stringify([...cart, item]))
    }
  }

  render() {
    const {cart} = this.state
    console.log('cart', cart)
    return (
      <CartContext.Provider
        value={{
          cartItems: cart,
          setCart: this.addCartItem,
          decQuantity: this.decreaseQuantity,
          incQuantity: this.increaseQuantity,
        }}
      >
        <Switch>
          <Route exact path="/login" component={Login} />
          <ProtectedPath exact path="/" component={Home} />
          <ProtectedPath exact path="/cart" component={Cart} />
          <ProtectedPath
            exact
            path="/restaurant/:id"
            component={SpecificRest}
          />
          <Route component={NotFound} />
        </Switch>
      </CartContext.Provider>
    )
  }
}

export default App
