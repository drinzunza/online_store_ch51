import { createContext } from 'react';

/**
 * Its a promise / interface
 * a description of the data structure
 * but not implementation
 */
const DataContext = createContext({
    cart: [],
    user: {},

    addToCart: () => {},
    removeFromCart: () => {},
    clearCart: () => {}
});

export default DataContext;