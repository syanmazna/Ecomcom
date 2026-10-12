import { useState, useEffect } from "react";

function Product() {
    const [product, setProduk] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
            .then(respon => respon.json())
            .then(data => {
                setProduk(data);
                setIsLoading(false);
            });
    }, []);

    return (
        <div className="p-2 md:p-4 bg-gray-50 min-h-screen">
            <h2 className="text-xl md:text-2xl font-bold mb-4 ml-2">Our Product</h2>
            
            {isLoading ? (
                <div className="ml-2 text-gray-500"><span>Loading Data...</span></div>
            ) : (
                /* Gap (jarak antar kotak) diperkecil di HP (gap-2), agak lebar di PC (md:gap-4) */
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-2 md:gap-4 p-1 md:p-2">
                    {product.map(item => (
                        <div 
                            key={item.id} 
                            className="flex flex-col bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden"
                        >
                            {/* Kotak Gambar */}
                            <div className="w-full aspect-square p-3 flex items-center justify-center border-b border-gray-100">
                                <img 
                                    src={item.image} 
                                    alt={item.title} 
                                    className="w-full h-full object-contain" 
                                />
                            </div>

                            {/* Kotak Info Barang*/}
                            <div className="p-2 md:p-3 flex flex-col grow text-left">
                    
                                {/* Area Tombol*/}
                                <div className="mt-auto flex flex-col gap-1.5">
                                     <h4 className="text-[11px] md:text-[13px] text-gray-800 line-clamp-2 leading-tight mb-1 font-medium">
                                    {item.title}
                                </h4>
                                     <p className="font-bold text-[13px] md:text-[15px] text-[#fa591d] mb-2">
                                    ${item.price}
                                </p>
                                    <button className="w-full bg-[#212121] text-white text-[11px] md:text-[12px] py-1.5 md:py-2 rounded-md hover:bg-gray-800 transition-colors font-medium active:bg-mist-600">
                                        + Add Cart
                                    </button>
                                    <button className="w-full bg-white text-[#212121] border border-[#212121] text-[11px] md:text-[12px] py-1.5 md:py-2 rounded-md hover:bg-gray-500 active:bg-green-200 transition-colors font-medium">
                                        Checkout
                                    </button>
                                </div>
                                
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}

export default Product;