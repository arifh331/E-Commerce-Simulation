import React from 'react'
import { useContext } from 'react'
import { ShopContext } from '../../context/shop-context'
import './cart.css'

export const CartItem = (props) => {

    
    const {itemid,productName,price,productImage} = props.data
    const {cartItems,addToCart,removeToCart,upDateCartItemCount} = useContext(ShopContext)

  return (
    <div className="cartItem">
        <img src={productImage}/>
        <div className='description'>
            <p>
                
                <b>
                    {productName}
                </b>
            </p>
            <p>
                ${price}
            </p>
            <div className='countHandler'>
                <button onClick={()=>removeToCart(itemid)}> -</button>
                <input value={cartItems[itemid]} onChange={(e)=> upDateCartItemCount(Number(e.target.value),itemid)}/>

                <button onClick={()=>addToCart(itemid)}> + </button>

            </div>

        </div>


    </div>
  )
}
