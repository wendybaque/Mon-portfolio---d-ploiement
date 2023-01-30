import React from "react";
import "./blob.css";

const Blob = () => {
  return (
    <>
      <div className="blob-effect font-poppins p-10">
        <span></span>
        <span></span>
        <span></span>
        <span className="blob-text">Merci pour votre passage !</span>
      </div>
      <p className="clic-here">Hep, j'ai une dernière chose <br/> à vous dire avant de vous laisser... <br/> <b>Survolez le blob magique ci-dessus pour tout savoir ! </b></p>
    </>
  );
};

export default Blob;
