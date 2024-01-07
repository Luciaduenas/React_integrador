
export const addItemToCart = (cartItems, product) =>{
    const productInCart = cartItems.find((item) => item.id === product.id)


if (productInCart){
    return cartItem.map ((item) => 
     item.id === productInCart.id ? {...item, quantity : item.quantity + 1}
     : item
     )
}

return [...cartItems, { ...product, quantity:1}]
}

export const removeItemFromCart =(cartItem, id) =>{
const productInCart = cartItems.find((item) => item.id === id)


if (productInCart.quantity > 1){
    return cartItems.map ((item) => 
     item.id === productInCart.id ? {...item, quantity : item.quantity-1}
     : item
     )
}



return cartItem.filter(item => item.id !== productInCart.id)
}



export const resetCartTotal = (cartItems, cartTotal) => {
    if(cartItems.length === 1 && cartItems[0].quantity === 1){
        return 0;
    }
    return cartTotal;
}