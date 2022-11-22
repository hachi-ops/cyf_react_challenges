import React from "react";

const fakeData = [
      {
    "id": 1,
    "company": "Photosnap",
    "logo": "./images/photosnap.svg",
    "new": true,
    "featured": true,
    "position": "Senior Frontend Developer",
    "role": "Frontend",
    "level": "Senior",
    "postedAt": "1d ago",
    "contract": "Full Time",
    "location": "USA Only",
    "languages": ["HTML", "CSS", "JavaScript"],
    "tools": []
  },
]


function Card() {
    return (
        <div>
            {fakeData.map((el) => {
               return (
                   <div>
                       <div>{el.logo}src={fakeData.logo} alt={""}</div>
                       <div>{el.company}</div>
                       <div>{el.new}</div>
                       <div>{el.featured}</div>
                       <div>{el.position}</div>
                       <div>{el.role}</div>
                       <div>{el.level}</div>
                       <div>{el.postedAt}</div>
                       <div>{el.contract}</div>
                       <div>{el.location}</div>
                       <div>{el.languages}</div>
                       <div>{el.tools}</div>
                   </div>
               );
            })}
        </div>     
       
    )
}

export default Card;