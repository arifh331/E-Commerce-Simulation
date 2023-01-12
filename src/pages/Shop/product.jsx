import React, { useContext } from 'react'
import { ShopContext } from '../../context/shop-context';
import './shop.css'


export const Product = (props) => {

    
    const {itemid,productName,price,productImage} = props.data;
    const {addToCart,cartItems} = useContext(ShopContext)

    const cartItemsAmount = cartItems[itemid]
  return (
    <div className='product'>
        
        <img src={productImage} />
        <div>
            <p>
                <b> {productName}</b>
            </p>
            <p>${price}</p>

        </div>

        <button className='addToCartBttn' onClick={()=>addToCart(itemid )}>
            
            Add to Cart
            {cartItemsAmount > 0  && <> ({cartItemsAmount})</>}
            
            </button>
        
    </div>
  )
}
