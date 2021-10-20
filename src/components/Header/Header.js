import React from 'react';
import './Header.css';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';

const Header = () => {
    return (
        // header part
        <div className='container font py-1 w-75'>
            <div className="pt-3 border rounded-pill backgroundColor text-center">
                <h1 className="py-3 fw-bold">
                    Developer Team
                </h1>
                <p className="p-font">
                    The Developer Team is  just for the benefit of the people
                    so that anyone can choose <br></br>the desired developer if they need to build  project.
                    We provide all type of developer.
                </p>
                <h2>Budget: 6.5 Million</h2>
            </div>
            <div className="pt-3">
                <h4 className="mt-3 text-center text-white">You can choose your desired Developer you want</h4>
            </div>
        </div>

    );
};

export default Header;