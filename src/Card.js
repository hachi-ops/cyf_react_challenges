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
            <div>Image</div>       
                <h1>Heading</h1>
                <button>New!</button>
                <button>Featured</button>      
                <h2>Title</h2>
                <ul>
                    <li>d ago</li>
                    <li>work pattern</li>
                    <li>Location</li>
                </ul>
                <hr />
                <div className="=tag">Tag</div>
        </div>
    )
}

export default Card;