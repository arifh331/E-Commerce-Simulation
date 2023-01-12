///This is JS file that has a list of all the products 
//You are kinda faking a json file with list of objects
import product1 from './assets/iphobe.png'
import product2 from './assets/djacket.png'
import product3 from './assets/cannoncam.png'
import product4 from './assets/laptop.png'
import product5 from './assets/ledlights.png'


export const PRODUCTS = [

    {
        itemid:1,
        productName:"IPhone Used by Steve Jobs",
        price:999.0,
        productImage:product1,
    },

    {
        itemid:2,
        productName:"Denim Jacket Worn by Michael Jackson",
        price:70.0,
        productImage:product2,
    },


    {
        itemid:3,
        productName:"Cannon Camera Used by Oscar Wilde",
        price:45.0,
        productImage:product3,
    },

    {
        itemid:4,
        productName:"The First Laptop Ever Created",
        price:430.0,
        productImage:product4,
    },

    {
        itemid:5,
        productName:"LED Lights to Shine Up the World",
        price:100.0,
        productImage:product5,
    }

]