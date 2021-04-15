import React from "react";
import proizvostvoshoot1 from "../images/lemon.png";
import proizvostvoshoot2 from "../images/small.png";
import proizvostvoshoot3 from "../images/lemonbig.png";
import "./proizvodstvo.css";

export default function Proizvostvo() {
  return (
    <div className="container4">
      <div className="proizvostvo1">
        <h3>Производство</h3>
        <div className="proiz">
          <img src={proizvostvoshoot1} />
          <img src={proizvostvoshoot2} />
          <img src={proizvostvoshoot3} />
        </div>
      </div>
      <div className="proizvodstvo2">
        <h3>Оборудование </h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam,
          purus sit amet luctus venenatis, lectus magna fringilla urna,
          porttitor rhoncus dolor purus non enim praesent elementum facilisis
          leo, vel fringilla est ullamcorper eget nulla facilisi etiam dignissim
          diam quis enim
          <br />
          lobortis scelerisque fermentum dui faucibus in ornare quam viverra
          orci sagittis eu volutpat odio facilisis mauris sit amet massa vitae
          tortor
          <br /> condimentum lacinia quis vel eros donec ac odio tempor orci
          dapibus ultrices in iaculis nunc sed augue lacus, viverra vitae congue
          eu,
          <br /> consequat ac felis donec et odio pellentesque diam volutpat
          commodo sed egestas egestas fringilla phasellus faucibus
        </p>
      </div>
      <div className="proizvodstvo3">
        <h5>Печатает около 100 страниц в минуту</h5>
      </div>
    </div>
  );
}
