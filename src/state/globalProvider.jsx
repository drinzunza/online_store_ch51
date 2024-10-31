import { useState } from 'react';
import DataContext from './dataContext';

function GlobalProvider(props) {
    const [cart, setCart] = useState([]);
    const [user, setUser] = useState({ name:"Sergio", id:128847 });

    function addToCart(product) {
        const copy = [...cart];

        // find if the product already exist in the cart
        let found = false;
        for(let i=0; i < copy.length; i++) {
            let existingProduct = copy[i];
            if(existingProduct._id === product._id) {
                found = true;
                //existingProduct.quantity = existingProduct.quantity + product.quantity;
                existingProduct.quantity += product.quantity;
            }
        }

        if(!found) {
            copy.push(product);
        }
        
        setCart(copy);
    }

    function removeFromCart() {
    }

    function clearCart() {
    }

    return (
        <DataContext.Provider value={{ 
            cart: cart,
            user: user,
            addToCart: addToCart,
            removeFromCart: removeFromCart,
            clearCart: clearCart
        }}>
           {props.children}
        </DataContext.Provider>
    );
}

export default GlobalProvider;