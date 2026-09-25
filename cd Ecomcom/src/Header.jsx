import logo from './assets/vite.svg'
import styles from './Header.module.css'

function Header(){
    return(
        <header>
            <div className={styles.box}>
                <span className={styles.logo}>Ecomcom</span>
                <h5>Platform Belanja Ter-Oke</h5>
                <button>Cart</button>
            </div>
        </header>
    );
}

export default Header