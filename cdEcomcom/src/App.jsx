import { useState } from 'react';
import Header from "./Header"
import Product from "./Product"
import "./App.css"

function App() {
   const [searchTerm, setSearchTerm] = useState('');
  return (
    <>
     <Header searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
     <Product searchTerm={searchTerm} />
    </>
  )
}

export default App
