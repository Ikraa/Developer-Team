import React from 'react';
import Rating from 'react-rating';
import './Developerlist.css'

const DeveloperList = (props) => {

    const { Name, Profession, Age, Country, Email, Salary } = props.
    developer || {}
        // console.log(props.developer);
    return (

        // <div className="row-md-12">
        //     <div class="card mb-3 ms-3" style={{ "max-width": "540px;", "border-redius":"20px;" }}>
        //         <div class="col g-0">
        //             <div class="col-md-6">
        //                 <img style={{height:"100%",width:"auto"}} 
        //  src={props.developer.image} class="img-fluid rounded-start card_image" alt="..." />

        //             </div>
        //             <div class="col-md-6">
        //                 <div class="card-body text-center">
        //                     <h5 class="card-title">Name: {props.developer.Name}</h5>
        //                     <p>Profession: {props.developer.Profession}</p>
        //                     <p>Age: {props.developer.Profession}</p>
        //                     <p>Country: {props.developer.Country}</p>
        //                     <p>Email: {props.developer.Email}</p>
        //                     <p>Salary: {props.developer.Salary}</p>
        //                     <button>Hire Me</button>
        //                 </div>
        //             </div>
        //         </div>
        //     </div>
        // </div>


        <div class="card h-100 p-2 background-color" >
            <div>
                {/* <img class="card-img-top card_img" src={props.developer.image}/> */}
                <img style={{ height: "100%", width: "auto", border: "50%" }}
                    src={props.developer.image} class="img-fluid rounded-start" alt="..." />
            </div>
            <div class="card-body">
                <h5>Name: {Name}</h5>
                <p><b>Profession:</b> {Profession}</p>
                <p><b>Age:</b> {Age}</p>
                <p><b>Country:</b> {Country}</p>
                <p><b>Email:</b> {Email}</p>
                <p><b>Salary: </b>{Salary}</p>
                <div className="text-center">
                    Rating:<small><br /><Rating className=" rate text-warning"
                    emptySymbol="fa fa-star-o fa-2x"
                    fullSymbol="fa fa-star fa-2x"
                    fractions={2}/></small></div>

                <button>Hire Me</button>
            </div>
        </div>


    );
};

export default DeveloperList;