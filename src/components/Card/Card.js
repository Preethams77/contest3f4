import React from 'react'
import "./Card.css";
const Card = ({imgUrl,id,title,poster,year,date,summary}) => {
  return (
    <div className="cardContainer">
        <div className="imgContainer">
            <img src={imgUrl}/>
        </div>
        <div className="cardText">Title :{id}</div>
        <div className="cardText">Type :{title}</div>
        <div className="cardText">Year :{year}</div>
        <div className="cardText">poster :{poster}</div>
        <div className="cardText">release date :{date}</div>
        <div className="cardText">summary :{summary}</div>
        
       
    </div>
  );
};

export default Card;