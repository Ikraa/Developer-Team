import { getDefaultNormalizer } from '@testing-library/dom';
import React from 'react';
import DeveloperList from '../DeveloperList/DeveloperList';
import './Developer.css';

const Developer = () => {
    
    return (
        <div>
            <div className="row">
                <div className="col-md-9">

                    <DeveloperList />

                </div>

                <div className="col-md-3">
                    {/* ekhane amra cart banabo */}
                    <p>Eikhaney cart krbo</p>
                </div>
            </div>
        </div>
    );
};

export default Developer;