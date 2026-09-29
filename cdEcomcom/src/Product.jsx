import { useState, useEffect } from "react";
import styles from './Product.module.css'

function Product(){
    const [product, setProduk]= useState([])
    const [isLoading, setIsLoading]= useState(true) 

    useEffect(()=>{
        fetch('https://fakestoreapi.com/products')
        .then (respon => respon.json())
        .then (data =>{
            setProduk(data)
            setIsLoading(false)
        })
    }, [])

    return(
        <>
            <div>
                <h2><strong>Our Product</strong></h2>
                {isLoading? (<div><br /><span>Holon</span></div>): (
                    <div className={styles.badan}>
                    {product.map(item =>
                        <div key={item.id} className={styles.produk} style={{ textAlign: "center"}}>
                            <h4><strong>{item.title}</strong></h4>
                            <img src={item.image} alt={item.title} style={{width: "120px"}} />
                            <p className={styles.harga}>${item.price}</p>
                            <p>Category: {item.category}</p>
                            <p style={{textAlign: "justify"}}>Description: {item.description}</p>
                            <button className={styles.add}>+ Add Cart</button>
                            <button className={styles.check}>Checkout</button>
                            <br />
                        </div>
                    )}
                    </div>
                )}
            </div>
        </>
    );
}

export default Product