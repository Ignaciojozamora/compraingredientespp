import React from "react";
import "./item.css";
import { ButtonChild } from "../Button/Button";


import { Link } from "react-router-dom";

function Item({ id, title, ingredientes, detail, imgurl }) {
    
  const urlDetail = `/item/${id}`;


  return (
    
      <div className="item-card">
        
        <div className="item-card_header">
          <h2>{title}</h2>
        </div>
        <div className="item-card_img">
        
          <img src={imgurl} alt="imagen"></img>
          
        </div>

        <div className="item-card_detail">
          <small>{detail}</small>
        </div>
        <Link to={urlDetail}>
        <ButtonChild>Ver detalle</ButtonChild>
        </Link>
        
      </div>
    
  );
}

export default Item;