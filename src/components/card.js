import React, { useState } from "react"



const Card = ({images,title,price,desc,items,setItems}) => {

  
  const [name, setName]=useState("Add to Cart")

  const addtoCart = () => {
    if (name === "Add to Cart") {
      setItems(items+1);
      setName("Remove from Cart");
    } else {
      setItems(items-1);
      setName("Add to Cart");
    }
  };
  
  return (
    <div className="card">
      
      <img src={images} className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <h4 className='cart-title'>{price}</h4>
        <p className="card-text">{desc}</p>
        <button className="btn btn-primary" onClick={addtoCart}>{name}</button>
      </div>
    </div>
  )
}

export default Card
