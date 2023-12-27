export const addItemToCart = (cartItems, product) =>{
    const productInCart = cartItems.find((item) => item.id === product.id)


if (productInCart){
    return cartItem.map ((item) => 
     item.id === productInCart.id ? {...item, quantity : item.quantity+1}
     : item
     )
}

return [...cartItem, { ...product, quantity:1}]
}

export const removeItemFromCart =(cartItem, id) =>{
const productInCart = cartItems.find((item) => item.id === product.id)


if (productInCart.quantity>1){
    return cartItem.map ((item) => 
     item.id === productInCart.id ? {...item, quantity : item.quantity-1}
     : item
     )
}



return cartItem.filter(item => item.id !== productInCart.id)
}

export const resetShippingCost = (cartItems, shippingCost)=>{
    if(cartItems.length === 1 && cartItems[0].quantity===1){
        return 0;
    }
    return shippingCost;
}