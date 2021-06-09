import React from "react";
import "./styles/Component-Frame-37.css";
// <div className=""> </div>//
export default function Component(props) {
  return (
    <>
      <div className="componentframe37">
        <div className="componentframe37__header">
          <p>{props.data2.title}</p>
          <img src={props.data2.point} alt="" />
        </div>
        <div className="componentframe37__body1">
          <img src={props.data2.imagenperfil1} alt="" />
          <h1>
            {props.data2.subtitulo1}
            <h2>{props.data2.trabajo1}</h2>
          </h1>

          <img src={props.data2.imagenperfil2} alt="" />
          <h1>
            {props.data2.subtitulo2}
            <h2>{props.data2.trabajo2}</h2>
          </h1>
        </div>
        <div className="componentframe37__body2">
          <img src={props.data2.imagenperfil3} alt="" />
          <h1>
            {props.data2.subtitulo3}
            <h2>{props.data2.trabajo3}</h2>
          </h1>
          <div className="add_member">
            <img src={props.data2.circuloperfil} alt="" />
            <p>{props.data2.subtitulo4}</p>
          </div>
        </div>
      </div>
    </>
  );
}
