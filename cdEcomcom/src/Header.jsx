import logo from './assets/vite.svg'
import cartIcon from './assets/cart.jpg'
// import styles from './Header.module.css'

function Header(){
    return(
        <header>
            <div className="w-full bg-zinc-900 b-2-solid rounded-lg p-4">
                <span className="text-white">Ecomcom</span>
               <a 
          href="/cart" 
          className="inline-flex items-center justify-center bg-amber-50 rounded-lg p-2"
        >
          <img src={cartIcon} alt="Cart" className="w-8 h-8 object-contain" />
        </a>
            </div>
        </header>
    );
}

export default Header