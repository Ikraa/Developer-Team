import React from 'react';
import './Header.css';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';

const Header = () => {
    return (
        <div className='container font py-1 w-75'>
            <div className="pt-3 border bg-light rounded-pill text-center">
                <h1 className="py-3 fw-bold text-secondary">
                    Developer Team
                </h1>
                <p>
                    The Developer Team is  just for the benefit of the people
                    so that anyone can choose <br></br>the desired developer if they need to build  project.
                    We provide all type of developer.
                </p>
                <h2>Budget: 6.5 Million</h2>
            </div>
            <div className="pt-3">
                <h3 className="mt-3 text-center ">You can choose your desired Developer you want</h3>
            </div>
        </div>

    );
};

export default Header;