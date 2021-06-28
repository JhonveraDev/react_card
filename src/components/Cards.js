import React from 'react';
import Card from './Card';
import image1 from '../assets/images/image1.jpg'
import image2 from '../assets/images/image2.jpg'
import image3 from '../assets/images/image3.jpg'


const cards = [
    {
        id: 1,
        title: 'Git Hub',
        image:  image1 ,
        url: 'https://github.com/synapsedeveloper',

    },
    {
        id: 2,
        title: 'Linkedin',
        image:  image2 ,
        url:'https://www.linkedin.com/in/andersonveradeveloper/',

    },
    {
        id: 3,
        title: 'Instagram',
        image:  image3 ,
        url:'https://www.instagram.com/andersonvera1027/?hl=es-la',
    }
]

function Cards() {
    console.log(cards)
    return (
        <div className="container d-flex justify-content-center align-items-center h-100">
            <div className="row">
                {cards.map(card => (
                    <div className="col-md-4" key={card.id}>
                        <Card title={card.title} image={card.image} url={card.url} />
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Cards
