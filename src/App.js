import React from "react";
import Component from "./componentes/Component";
import getContentComponents from "./assets/getContentComponents";
import Component2 from "./componentes/Component2";
import getContentComponents2 from "./assets/getContentComponents2";
import Component3 from "./componentes/Component3";
import getContentComponents3 from "./assets/getContentComponents3";
import "./global.css";

export default function App() {
  const data = getContentComponents();
  const data1 = getContentComponents2();
  const data2 = getContentComponents3();
  //console.log(data);
  //const card = data[0]
  return (
    <div className="container_components">
      <div>
        {data.map((component) => {
          return <Component data={component} />;
        })}
      </div>
      <div>
        {data1.map((component) => {
          return <Component2 data1={component} />;
        })}
      </div>
      <div>
        {data2.map((component) => {
          return <Component3 data2={component} />;
        })}
      </div>
    </div>
  );
}
