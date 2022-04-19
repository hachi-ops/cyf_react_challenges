import React from 'react';
import JobDetails from './JobDetails';

function Info (props) {
    return (
        <div className='info'>            
              <h1>{props.item.company}</h1>
              <h2>{props.item.position}</h2>
              <JobDetails item={props.item}/>  
        </div>
    )
}

export default Info;