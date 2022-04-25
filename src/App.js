import React from "react";
// import Card from "./components/Card";
// import Filter from "./components/Filter";
import logo from './logo.png';
import './App.css';
import jobsData from "./data.json";

function App () {
  return (
    <div className="App">
      <header className="header"></header>  
        <div>
            <input placeholder="Filter jobs..." />
        </div>   
        <div>
            {jobsData.map((item) => {
        return (
          <div className="card">              
             <div className="logo">
            <img src={logo} alt={"logo"} style={{width: "80px"}} />
            </div>        
                <div className="job-container">
               <div className='info'>            
              <h1>{item.company}</h1>
              <h2>{item.position}</h2>
                  <div className="job-details">            
              <ul>
                <li>{item.postedAt}</li>
                <li>{item.contract}</li>
                <li>{item.location}</li>
              </ul>               
                  </div>    
        </div>
                <hr />         
  
        <div>
              {/* <div>
                    {jobsData.map((val, index) => {
                          return (
                                <li key={index}>{val}</li>
                          )
                    })}
              </div> */}
            <ul className='languages-and-tools'>
              <li>{item.role}</li>
              <li><button>{item.level}</button></li>
              <li><button>{item.languages}</button></li>
              <li><button>{item.tools}</button></li>
            </ul>
        </div> 
        </div>                
        </div>
        )
      })}
        </div>
    
   
    </div>
  )
}

export default App;