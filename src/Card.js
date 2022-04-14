import React from "react";


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