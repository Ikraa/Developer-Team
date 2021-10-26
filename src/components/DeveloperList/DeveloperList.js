import React from 'react';
import Rating from 'react-rating';
import './Developerlist.css'

const DeveloperList = (props) => {
    // destructuring developer info
    const { Name, Profession, Age, Country, Email, Salary, star } = props.
        developer || {}
    // console.log(props.developer);
    return (

        <div class="card h-100 p-2 background-color shadow" >
            {/* add image */}
            <div>
                <img style={{ height: "250px", width: "250px", borderRedius: "50%" }}
                    src={props.developer.image} class="img-fluid rounded-pill" alt="pic" />
            </div>


            {/* adding developer info */}
            <div class="card-body">
                <h5>Name: {Name}</h5>
                <p><b>Profession:</b> {Profession}</p>
                <p><b>Age:</b> {Age}</p>
                <p><b>Country:</b> {Country}</p>
                <p><b>Email:</b> {Email}</p>
                <p><b>Salary: </b>$ {Salary}</p>
                {/* adding rating & icon  */}

                <div className="text-center">

                    <b>Rating: {star} </b><small><br /><Rating initialRating={star}
                        className=" rate text-warning pt-2"
                        emptySymbol="fa fa-star-o fa-2x"
                        fullSymbol="fa fa-star fa-2x" 
                        readonly/></small>

                    <div className="mt-2">
                        <a target="_blank" href=""><i class="fab fa-linkedin text-primary url-link ms-2"></i>
                        </a>
                        <a target="_blank" href="https://github.com/Ikraa" className="url-link text-dark ms-2">
                            <i class="fab fa-github "></i>
                        </a>
                        <a target="_blank" href="https://github.com/Ikraa" className="url-link text-primary ms-2">
                            <i class="fab fa-facebook-square"></i>
                        </a>
                    </div>

                    {/* adding button */}
                    <div className="button-1">
                        <button onClick={() => props.addToCart(props.developer)}
                            className="rounded py-1 px-2 bg-warning button btn"><b>Hire Me</b></button></div>
                </div>
            </div>
        </div>


    );
};

export default DeveloperList;