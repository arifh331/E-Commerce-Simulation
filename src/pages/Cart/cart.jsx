import React, {useContext} from 'react'
import { PRODUCTS } from '../../products'
import { Product } from '../Shop/product'
import { ShopContext } from '../../context/shop-context';
import {CartItem} from './cart-item'
import './cart.css'
import { useNavigate } from 'react-router-dom';

export const Cart = () => {
  const {cartItems,getTotalCartAmount} = useContext(ShopContext)
  const navigate = useNavigate()
  const ttAmount = getTotalCartAmount()
  return (
    <div className='cart'>
      <div>
        <h1>
          Your Cart Items
        </h1>
      </div>
      <div className='cart'>
        {PRODUCTS.map((product)=>{
          if (cartItems[product.itemid] !==0){

            
            console.log(product.id)
            return <CartItem data={product} 
            />
          }
        })}

      </div>
      {ttAmount > 0 ? (
      <div className='checkout'>
        <p>Subtotal: ${ttAmount}</p>
        <button onClick={()=>navigate('/')}>
          Continue Shopping 
        </button>
        <button>Let's Checkout</button>

      </div> 
      ) : (<h1>This cart is empty</h1>) }


    </div>
  )
}
