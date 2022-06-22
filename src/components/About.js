import React from "react";
import '../css/Main.css';
import comp,{loaction,services,friends} from '../components/Textexp';
const fname = 'Pradeep';
const lname = 'Roy';
const headings = {
    color : '#005487',
    textTransform : 'uppercase',
    fontSize:'40px'
}
const About = () => {
    return(
        <>
        <div className="about_desc">
            <div className="container-fluid"> 
            <div className="row">
                <div className="col-md-12"> 
                <h4>{comp}{loaction}{services}{friends}</h4> 
                 <h1 style={headings}>About Page</h1>
                 <h2>{`My First Name is ${fname} & Last Name is ${lname}`}</h2> 
                 <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. </p> 
                </div>
            </div> 
            </div>
        </div>
       </>
    )

}
export default About;