import React from "react";
import "./styles/Component-Frame-36.css";
// <div className=""> </div>//
export default function Component(props) {
  return (
    <>
      <div className="componentframe34">
        <div className="componentframe34__header">
          <div className={`ctitle2 ${props.data1.theme}`}>
            <p>{props.data1.title}</p>
          </div>
          <div className="puntos2">
            <img src={props.data1.point1} alt="" />
          </div>
        </div>
        <div className={`componente_description2 ${props.data1.tipo}`}>
          <img src={props.data1.marcador} alt="" />
          <p>{props.data1.description}</p>
        </div>
        <div className="vectorline2">
          <div className="iconos2">
            <div className="day2">
              <img
                src={props.data1.image_perfil}
                alt={`Avatar de ${props.data1.title}`}
              />
              <p>{props.data1.date3}</p>
            </div>
            <div className="mens2">
              <img src={props.data1.mensage1} alt="" />

              <p>{props.data1.mensage2}</p>
            </div>
            <div className="adj2">
              <img src={props.data1.adjunt1} alt="" />
              <p>{props.data1.adjunt2}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
