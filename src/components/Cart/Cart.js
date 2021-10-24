import React from 'react';
import './Cart.css';

const Cart = (props) => {

    const { cart,onRemove } = props || {}

    const totalReducer = (preValue, currentValue) => preValue + currentValue.Salary

    const total = cart.reduce(totalReducer, 0).toFixed(2)
    

    return (
        <section>
            <div>
                <h3>
                    <i class="fas fa-user-plus">{cart.length}</i></h3>
                <div className="cart-box mt-3 shadow-lg">
                    <ol><h5>Add:</h5>
                    {cart.length===0 && <div> No people add </div>}
                        {
                            cart.map(developer =><li>
                                <div className="left">{developer.Name}<span className="sp_right">{developer.Salary}</span></div>
                                <div className="right"><button className="btn_cls" onClick={()=>onRemove(developer)}><i class="fas fa-trash-alt"></i></button></div>
                                
                            
                            
                            
                            </li>
                            
                            )
                           
                            


                        }
                        <hr className="me-3"></hr>
                        <h5 className="mt-3 total">Total: $ {total}</h5>

                    </ol>
                </div>
            </div>
        </section>
    );
};

export default Cart;