import React from 'react'
import './HeroCard.css'
import { Link } from "react-router-dom";

function HeroCard({img, title, content,page}) {
    return (
        <div className='main__card' >
            <Link to = {page} style={{color:"black",textDecoration:"none"}} >
            <img className='card__img' src = {img} alt=''/>
            <h4 className='card__title'>{title}</h4>
            <p className='card__content'>{content}</p>
                {/* <div className='btn'> <button className='card__button'>Learn More</button> </div> */}
            </Link>
        </div>
    )
}

export default HeroCard
