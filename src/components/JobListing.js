import React from "react";


function JobListing (props) {
    return (
        <div>
          {props.data.map((item) => {
            return (
              <div>
                <div>
                  <img src={item.logo} alt={"logo"} style={{width: "80px"}} />
                </div>                
                <h1>{item.company}</h1>
                <h2>{item.position}</h2>            
                <div>JobBriefDetails</div>
                <div>JobTags</div>                                         
              </div>
            )
          })}          
        </div>
    )
}

export default JobListing;