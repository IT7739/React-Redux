import React from "react";

export default function Home(props){
    return(
        <div className="container">
            <h2>Home Component</h2>
            <div className="cart-wrapper">
                <div className="img-wrapper">
                    <img src="images.jpeg" alt="" />
                </div>
                <div className="text-wrapper">
                    <span>
                       <b>i-Phone <br/>
                        Price : $10000.00</b>
                    </span>
                </div>
                <div className="btn-wrapper">
                    <button onClick={
                        ()=>props.addToCartHandler({price:10000.00, name:'i-Phone'})
                        }>Add To Cart</button>
                </div>
            </div>
        </div>
    )
}