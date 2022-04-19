import React from "react";
import jobsData from "../data";
import Logo from "./Logo";
import Info from "./Info";
import LanguagesAndTools from "./LanguagesAndTools";


function Card () {
    return (
        <div>
            {jobsData.map((item) => {
        return (
          <div className="card">              
            <Logo />         
                <div className="job-container">
                <Info item={item} className="info"/>                  
                <LanguagesAndTools item={item} className="languages-and-tools"/>
              </div>        
            
        </div>
        )
      })}
        </div>
    )
}
export default Card;

