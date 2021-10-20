import React from 'react';
import './Developerlist.css'

const DeveloperList = (props) => {
    // console.log(props.developer);
    return (

        // <div className="col-md-4">
        //     <div class="card mb-3 ms-3" style={{ "max-width": "540px;", "border-redius":"20px;" }}>
        //         <div class="col g-0">
        //             <div class="col-md-6">
        //                 <img style={{height:"100%",width:"auto"}} src={props.developer.image} class="img-fluid rounded-start card_image" alt="..." />

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


        <div class="card h-100 " >
            <img class="card-img-top card_img" src={props.developer.image} />
            <div class="card-body card_body2">
                <h5 class="card-text">Name: {props.developer.Name}</h5>
                <p>Profession: {props.developer.Profession}</p>
                <p>Age: {props.developer.Profession}</p>
                <p>Country: {props.developer.Country}</p>
                <p>Email: {props.developer.Email}</p>
                <p>Salary: {props.developer.Salary}</p>
                
                <button>Hire Me</button>
            </div>
        </div>


    );
};

export default DeveloperList;