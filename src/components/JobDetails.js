import React from "react";



function JobDetails (props) {
    return (
            <div className="job-details">            
              <ul>
                <li>{props.item.postedAt}</li>
                <li>{props.item.contract}</li>
                <li>{props.item.location}</li>
              </ul>               
                  </div>       
       
    )
}

export default JobDetails;