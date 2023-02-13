import { memo } from "react";
import { products } from "../Components/products";
import { useState } from "react";
export default memo(function About() {
    const [more, setMore] = useState([]);
    const [moreInfoOpen, setMoreInfo] = useState(false);
    return (
        <>
            <div className="products">
                <div className="more-info" style={{display: moreInfoOpen ? "flex" : "none"}}>
                    {more.map(item => {
                        return <div className="more-info-item">
                            <img src={item.picture} alt="" />
                            <div className="information">
                                <h1>{item.category}</h1>
                                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quisquam, quod perspiciatis blanditiis nihil corporis magni voluptas quo modi nobis alias suscipit ea aspernatur, minima exercitationem. Quisquam consequuntur atque alias soluta. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Suscipit aliquam aut a dolor, atque saepe veniam sed.</p>
                            </div>
                            <button onClick={() =>{
                                   setMoreInfo(false)
                            }}>X</button>
                        </div>
                    })}
                </div>
                <div className="product">
                    {products.map(product => {
                        return <div className="product-item" key={product.id}>
                            <h3>{product.category}</h3>
                            <img src={product.picture} />
                            <button onClick={() => {
                                setMore([product]);
                                setMoreInfo(true)
                                
                            }}>Watch More</button>
                        </div>
                    })}
                </div>
            </div>
        </>
    )
}
)