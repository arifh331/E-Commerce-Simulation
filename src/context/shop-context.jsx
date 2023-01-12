import React, { createContext,useState } from 'react'

import { PRODUCTS } from '../products';


export const ShopContext = createContext(null);

export const ShopContextProvider = (props) => {

  const getDefaultCart = () =>{
      let cart = {}
      for (let i = 1; i < PRODUCTS.length+1;i++){
          cart[i]= 0 ;
      }

      return cart;
       
  }  

  
  const [cartItems,setCartItems]= useState(getDefaultCart());

  const addToCart = (itemid) =>{
      //You are adding the item to cart so use the set state function to add 1 to the previous value
      setCartItems((prev)=> ({...prev, [itemid]: prev[itemid]+1})

      );
    };

  

  const removeToCart = (itemId) =>{
    //You are adding the item to cart so use the set state function to add 1 to the previous value
    setCartItems((prev)=> ({...prev, [itemId]: prev[itemId]-1}));
};

const upDateCartItemCount = (newamount,itemid) =>{
  setCartItems((prev)=>({...prev,[itemid] : newamount}))

}


const getTotalCartAmount = ()=>{
  let totalAmount = 0;

  for (const item in cartItems){
    if(cartItems[item] >0){
      let iteminfo = PRODUCTS.find((product)=>product.itemid === Number(item))
      totalAmount+= cartItems[item] * (iteminfo.price);
    }
  }

  return totalAmount;

}

  



//This is everything you may want to pass 
const contextValue = {cartItems,addToCart,removeToCart,upDateCartItemCount,getTotalCartAmount};
console.log(cartItems)
    return (

    
    <ShopContext.Provider value={contextValue}>
        {props.children}
    </ShopContext.Provider>
  )
 }
