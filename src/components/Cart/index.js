/* eslint-disable */

import React, {Component} from 'react'

import CartContext from '../CartContext'

import Header from '../Header'

import {AiOutlineMinusSquare, AiOutlinePlusSquare} from 'react-icons/ai'

export default class Cart extends Component {
  render() {
    return (
      <CartContext.Consumer>
        {value => {
          const {cartItems, decQuantity, incQuantity} = value
          const inc = id => {
            decQuantity(id)
          }
          const dec = id => {
            incQuantity(id)
          }

          const getCost = () => {
            if (cartItems.length > 0) {
              let totalCost = cartItems[0]['quantity'] * cartItems[0]['cost']
              for (let i = 1; i < cartItems.length; i++) {
                totalCost =
                  totalCost + cartItems[i]['quantity'] * cartItems[i]['cost']
              }
              return <p>₹ {totalCost}</p>
            }
            return null
          }

          return (
            <>
              <Header />
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-around',
                  marginTop: '30px',
                }}
              >
                <p>Item</p> <p>Quantity</p> <p>Price</p>
              </div>
              <div>
                {cartItems === [] || cartItems === null ? (
                  <p>No ITEMS IN CART</p>
                ) : (
                  cartItems.map(e => (
                    <div
                      key={e.id}
                      style={{
                        display: 'flex',
                        justifyContent: 'space-around',
                        marginTop: '30px',
                      }}
                    >
                      <div>
                        {' '}
                        <img
                          style={{width: '155px'}}
                          src={e.image_url}
                          alt={e.name}
                        />
                        <p>{e.name}</p>
                      </div>
                      <div>
                        <AiOutlineMinusSquare onClick={() => inc(e.id)} />
                        {e.quantity}
                        <AiOutlinePlusSquare onClick={() => dec(e.id)} />
                      </div>
                      <div>{e.cost * e.quantity}</div>
                    </div>
                  ))
                )}
                <div style={{display: 'flex', justifyContent: 'space-around'}}>
                  <p>Order Total :</p>
                  {getCost()}
                </div>
              </div>
            </>
          )
        }}
      </CartContext.Consumer>
    )
  }
}
