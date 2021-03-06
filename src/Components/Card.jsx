import React from "react";
import "./card.css"


//  created a single card so that it can be used as many time according to the data available in API
const Card = (props) => {
    return (
        <div>
            <div className="cards">
                <div className="card">
                    <img src={props.imgsrc} alt="img" className="card__img" />
                    <div className="card__info">
                        <span className="card__category">{props.song}</span>
                        <h3 className="card__title">{props.artist}</h3>
                        <a href={props.link} >
                            <button>Play</button>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default Card;