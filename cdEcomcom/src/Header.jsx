import logo from './assets/vite.svg'
import cartIcon from './assets/cart.jpg'
import React, { useState, useEffect } from 'react';
// import styles from './Header.module.css'

function Header({ searchTerm, setSearchTerm }) {
    const belum = (fitur) => {
        alert("Belum jadi hehe");
    }; 


    return(
        <header>
            <nav className="bg-[#1a1a1a] text-white p-4 flex justify-between items-center w-full">
            <div >
                <span className="text-white">Ecomcom</span>
            </div>
            <div className="w-full md:w-auto">
                <input type="text" placeholder="Search..." className="px-2 py-1 rounded-md text-black bg-amber-50 w-full m-1" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
            </div>
            <div>
                <button onClick={() => belum("Keranjang")} className="bg-[#fcf8eb] p-2 rounded-lg text-black active:scale-85 transition m-2">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"></path>
                    </svg>
                </button>
            </div>
            </nav>
        </header>
    );
}

export default Header