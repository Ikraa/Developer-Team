import React from 'react';
import { useEffect, useState } from 'react';
import DeveloperList from '../DeveloperList/DeveloperList';
import './Developer.css';
import Cart from '../Cart/Cart';

const Developer = () => {
    // useState developer
    const [developers, setDeveloper] = useState([]);

    //  UseState cart
    const [cart, setCart] = useState([]);

    //  adding function add To cart part
    const addToCart = (developer) => {
        
        const newCart = [...cart, developer];
        setCart(newCart)
        // console.log(newCart);
    }
    //  fetch and load data part
    useEffect(() => {
        fetch('/developer.json')
            .then(res => res.json())
            .then(data => setDeveloper(data));
    }, [])

    return (
        //  developer list part
        <div className="container">

            <div className="row mt-3">
                <div className="col-md-9">
                    <div className="container">
                        <div className="row">
                            {
                                developers.map(developer =>
                                    <div className="col-md-4 py-2">
                                        <DeveloperList
                                            developer={developer}
                                            addToCart={addToCart}
                                        ></DeveloperList>

                                    </div>
                                )
                            }
                        </div>
                    </div>
                </div>
                <div className="col-md-3">
                    <Cart 
                    cart={cart}></Cart>
                </div>
            </div>
        </div>
    );
};

export default Developer;