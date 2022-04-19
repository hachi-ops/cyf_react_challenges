import React from 'react';
import JobDetails from './JobDetails';

function Info (props) {
    return (
        <div className='info'>            
              <div>{props.item.company}</div>
              <div>{props.item.position}</div>
              <JobDetails item={props.item}/>  
        </div>
    )
}

export default Info;