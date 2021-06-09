import React from 'react';
import "./styles/Card.css";

export default function Card(props) {
    return (
        <>
            <div className={`card ${props.data.theme}`}>
                <div className="card__header">
                    <img src={props.data.img} alt={`Avatar de ${props.data.name}`}/>
                    <div className="header-card__name-container">
                        <p className="name">{props.data.name}</p>
                        <p className="ocupation">{props.data.ocupation}</p>
                    </div>
                </div>
                <div className="card__title">
                    <p>
                        {props.data.title}
                    </p>
                </div>
                <div className="card__description">
                    <p>
                        {props.data.description}
                    </p>
                </div> 
            </div>  
        </>
    )
}
