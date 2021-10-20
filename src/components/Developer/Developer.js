import React from 'react';
import { useEffect, useState } from 'react';
import DeveloperList from '../DeveloperList/DeveloperList';
import './Developer.css';

const Developer = () => {
    const [developers, setDeveloper] = useState([])

    useEffect(() => {
        fetch('/developer.json')
            .then(res => res.json())
            .then(data => setDeveloper(data));
    }, [])

    return (
        <div className="container">
            {/* <div className="row">
                <div className="col-md-9">
               <div className="row">
               {
                developers.map(developer=><DeveloperList
                developer={developer}
                ></DeveloperList>)
                }

               </div>
                </div>

                <div className="col-md-3">
                     ekhane amra cart banabo }
                    <p>Eikhaney cart krbo</p>
                </div>
            </div> */}
            <div className="row mt-3">
                <div className="col-md-9">
                    <div className="container">
                        <div className="row">
                            {
                                developers.map(developer =>
                                    <div className="col-md-4 py-2">
                                        <DeveloperList
                                            developer={developer}
                                        ></DeveloperList>

                                    </div>

                                )
                            }

                        </div>

                    </div>


                </div>
                <div className="col-md-3"><p>Eikhaney cart krbo</p></div>


            </div>





        </div>
    );
};

export default Developer;