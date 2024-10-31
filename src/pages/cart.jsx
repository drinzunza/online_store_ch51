import { useContext } from 'react';
import "./styles/cart.css";
import DataContext from '../state/dataContext';


function Cart() {
    const globalCart = useContext(DataContext).cart;

    function getTotal() {   
        let total = 0;
        for(let i=0; i < globalCart.length; i++){
            const prod = globalCart[i];
            total += (prod.quantity * prod.price);
        }

        return total.toFixed(2);
    }

    function countProducts() {
        let count = 0;
        for(let i=0; i<globalCart.length; i++) {
            const prod = globalCart[i];
            count += prod.quantity;
        }

        return count;
    }

    return (
        <div className="cart page">
            <h1>Ready to complete the order?</h1>
            <h5>We have {countProducts()} products ready for you!</h5>

            <div className="parent">
                <div className="list">
                    {globalCart.map( prod => 
                        <div className='cart-prod'>
                            <img src={prod.image} alt=""></img>
                            <h4>{prod.title}</h4>
                            <label>${prod.price}</label>
                            <label>#{prod.quantity}</label>
                            <label>${prod.price * prod.quantity}</label>
                            <button className='btn btn-sm btn-outline-danger'>Remove</button>
                        </div> 
                    )}
                </div>

                <div className="side-menu">
                    <h4>Total</h4>
                    <h2>${getTotal()}</h2>
                    
                    <button className='btn btn-outline-danger'>Clear Cart</button>
                </div>
            </div>
        </div>
    );
}

export default Cart;

// inside the fn
// create a total variable
// create a foor loop to travel the list
// get every p from the list
// add the total for the p to the total :
//    total += (p.price * p.quantity)