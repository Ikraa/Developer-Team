import React from 'react';

const Cart = (props) => {
const {cart}=props||{}

    return (
        <div>
            <h3><i class="fas fa-shopping-cart text-white"> {cart.length}</i></h3>
            <div className="border bg-white">
            <ul> 
                {
                    cart.map(developer=><li>{developer.Name}</li>)
                }
            </ul>
            </div>
        </div>
    );
};

export default Cart;