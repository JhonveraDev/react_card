import React from 'react'
import '../assets/cards.css'


export default function Card({title,image,url}) {
    return (
        <div className="card text-center bg-dark animate__animated animate__bounce">
            <img src={image} className="card-img-top"></img>
            <div className="card-body text-light" >
                <h4 className="card-title">{title}</h4>
                <p className="card-text text-secondary">
                   Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                   Quo cum aliquid illum nobis aspernatur nisi libero non modi, 
                   saepe sapiente eius, unde, enim ipsa. Alias in blanditiis totam nisi.Qui.
                </p>
                <a href={url} className=" btn btn-outline-secondary" target="_blank">
                    Go to this website
                </a>
            </div>
        </div>
    )
}

