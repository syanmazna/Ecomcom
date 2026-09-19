import { useState, useEffect } from "react";

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
                <h2><strong>Produk Kami</strong></h2>
                {isLoading? (<div><br /><span>Tunggu Sebentar</span></div>): (
                    <div>
                    {product.map(item =>
                        <div key={item.id}>
                            <h4><strong>{item.title}</strong></h4>
                            <img src={item.image} alt={item.title} style={{width: "120px"}} />
                            <p>Harga: ${item.price}</p>
                            <p>Kategori: {item.category}</p>
                            <p>Deskripsi: {item.description}</p>
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