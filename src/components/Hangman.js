import React from "react";
import image0 from "../images/img0.png";
import image1 from "../images/img1.png";
import image2 from "../images/img2.png";
import image3 from "../images/img3.png";
import image4 from "../images/img4.png";
import image5 from "../images/img5.png";
import image6 from "../images/img6.png";
import image7 from "../images/img7.png";
import win from "../images/win.png";
import lose from "../images/lose.png";
import "./Hangman.css"

const Hangman = props => {
  switch (props.lifes) {
    case 0:
      return <img src={image0} alt=" " className="Image" />;
    case 1:
      return <img src={image1} alt=" " className="Image" />;
    case 2:
      return <img src={image2} alt=" " className="Image" />;
    case 3:
      return <img src={image3} alt=" " className="Image" />;
    case 4:
      return <img src={image4} alt=" " className="Image" />;
    case 5:
      return <img src={image5} alt=" " className="Image" />;
    case 6:
      return <img src={image6} alt=" " className="Image" />;
    case 7:
      return <img src={image7} alt=" " className="Image" />;
    case "win":
      return <img src={win} alt=" " className="Image" />;
    case "lose":
      return <img src={lose} alt=" " className="Image" />;
    default:
      return <img src={image7} alt=" " className="Image" />;
  }
};

export default Hangman;
