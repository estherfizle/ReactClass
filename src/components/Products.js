import React from "react";
import './Product.css'
import ProductProps from "./ProductProps";
import productlist from "./Productlist";

const Products = () =>{
    return (
        <div>
            <div className="header">
                <h1> Featured  Products</h1>
            </div>
            <div className="pro-wrap">
                {productlist.map((el) =>(
                    <ProductProps
                    key={el.productName}
                    img={el.img}
                    productName={el.productName}
                    price={el.price}
                    />
                ))}

                

                
            </div>
        </div>
    )
}
export default Products