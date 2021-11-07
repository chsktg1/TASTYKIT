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
  constructor(props) {
    super(props)
    const cartFromLC = localStorage.getItem('cartData')
    if (cartFromLC === null) {
      this.state = {cart: [], op: false}
    } else {
      this.state = {cart: JSON.parse(cartFromLC), op: false}
    }
  }

  // state = {cart: [], op: false}

  // componentDidMount() {
  //   const cartFromLC = localStorage.getItem('cartData')
  //   if (cartFromLC === null) {
  //     this.setState({cart: []})
  //   } else {
  //     this.setState({cart: JSON.parse(cartFromLC)})
  //   }
  //   console.log('cartFromLC', cartFromLC)
  // }

  placingOrder = () => {
    this.setState({op: true})
    localStorage.removeItem('cartData')
    this.setState({cart: []})
  }

  increaseQuantity = item => {
    const {cart} = this.state
    const index = cart.findIndex(e => e.id === item)
    cart[index]['quantity'] = cart[index]['quantity'] + 1
    localStorage.setItem('cartData', JSON.stringify(cart))
    this.setState({cart})
  }

  decreaseQuantity = item => {
    const {cart} = this.state
    const index = cart.findIndex(e => e.id === item)
    if (cart[index]['quantity'] !== 1) {
      cart[index]['quantity'] = cart[index]['quantity'] - 1
      localStorage.setItem('cartData', JSON.stringify(cart))
      this.setState({cart})
    } else {
      const newCart = cart.filter(e => e.id !== item)
      localStorage.setItem('cartData', JSON.stringify(newCart))
      this.setState({cart: newCart})
    }
  }

  addCartItem = item => {
    const {cart} = this.state
    if (!cart.includes(item)) {
      let a = {}
      a.quantity = 1
      a.cost = item.cost
      a.imageUrl = item.image_url
      a.id = item.id
      a.name = item.name
      this.setState({cart: [...cart, a], op: false})
      localStorage.setItem('cartData', JSON.stringify([...cart, item]))
    }
  }

  render() {
    const {cart, op} = this.state
    return (
      <CartContext.Provider
        value={{
          cartItems: cart,
          setCart: this.addCartItem,
          decQuantity: this.decreaseQuantity,
          incQuantity: this.increaseQuantity,
          orderPlaced: op,
          setOrderPlaced: this.placingOrder,
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
