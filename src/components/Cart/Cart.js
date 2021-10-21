import React from 'react';
import './Cart.css';

const Cart = (props) => {
    const { cart } = props || {}

    const totalReducer= (preValue, currentValue) => preValue+currentValue.Salary

    const total =cart.reduce(totalReducer, 0).toFixed(2)


    return (
        <div>
            <h3>
                <i class="fas fa-shopping-cart cartColor"> {cart.length}</i></h3>
            <div className="cart-box mt-3 shadow-lg">
                <ol><h5>Cart:</h5>
                    {
                        cart.map(developer =><li>{developer.Name}-------{developer.Salary}
                        </li>
                        )
                        
                    }
                        <hr className="me-3"></hr>
                        <h5 className="mt-3 total">Total: $ {total}</h5>

                </ol>
            </div>
        </div>
    );
};

export default Cart;