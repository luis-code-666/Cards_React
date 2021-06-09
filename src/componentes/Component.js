import React from "react";
import "./styles/Component-Frame-5.css";
// <div className=""> </div>//
export default function Component(props) {
  return (
    <>
      <div className="componentframe5_4_2">
        <div className="componentframe5_4_2__header">
          <div className={`ctitle ${props.data.theme}`}>
            <p>{props.data.title}</p>
          </div>
          <div className="puntos">
            <img src={props.data.point1} alt="" />
          </div>
        </div>
        <div className="componente_description">
          <p>{props.data.description}</p>
        </div>
        <div className="vectorline">
          <div className="iconos">
            <div className="day">
              <img src={props.data.date2} alt="" />

              <p>{props.data.date3}</p>
            </div>
            <div className="mens">
              <img src={props.data.mensage1} alt="" />

              <p>{props.data.mensage2}</p>
            </div>
            <div className="adj">
              <img src={props.data.adjunt1} alt="" />
              <p>{props.data.adjunt2}</p>
            </div>
          </div>
          <img
            src={props.data.image_perfil}
            alt={`Avatar de ${props.data.title}`}
          />
        </div>
      </div>
    </>
  );
}
