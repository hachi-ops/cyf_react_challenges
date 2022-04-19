import React from "react";
import Logo from '../Logo';
// import logo from './images/logo.png';


function JobListing (props) {
    return (
        <div>
          {props.data.map((item) => {
            return (
              <div className="card">
                  {/* <img src={item.logo} alt={logo} /> */}
                  <Logo />
                  <div className="job-container">
                    <div className="info">             
                    <h1>{item.company}</h1>
                    {/* <div>{item.new}</div>
                    <div>{item.featured}</div> */}
                    <h2>{item.position}</h2>                    
                    <div className="job-details">
                        <ul>
                            <li>{item.postedAt}</li>
                            <li>{item.contract}</li>
                            <li>{item.location}</li>
                        </ul>           
                    </div>
                    </div>
                    <div className="languages-and-tools">  
                        <div>{item.role}</div>
                        <div>{item.level}</div>       
                        <div>{item.languages}</div>                
                        <div>{item.tools}</div>  
                    </div>
                  </div>
              
                                                  
              </div>
            )
          })}          
        </div>
    )
}


export default JobListing;