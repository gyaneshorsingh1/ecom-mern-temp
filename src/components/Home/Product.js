import React from "react";
import { Link } from "react-router-dom";
import ReactStars from "react-rating-stars-component";


const ProductCard = ({ product }) => {
  const options = {
    edit: false,
    color:"rga(20,20,20,0.1)",
    activeColor:"tomato",
    size: window.innerHeight < 600 ? 20 : 25,
    value: product.rating,
    isHalf: true,
  };
  return (
    <Link className="productCard" to={product._id}>
      <img src={product.images[0].url} alt={product.name} />
      <p>{product.name}</p>
      <p>{product.description}</p>
      <div>
        <ReactStars {...options} />
        <span> ({`${product.numOfReviews}Reviews`})
        </span>
      </div>
      <span>{`₹${product.price}`}</span>
    </Link>
  );
};

export default ProductCard;