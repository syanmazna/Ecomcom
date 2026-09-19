import logo from './assets/vite.svg'
import styles from './Header.module.css'

function Header(){
    return(
        <header>
            <div className={styles.box}>
                <img src={logo} alt="logo" className={styles.logo}/>
                <span className={styles.logo}>Ecomcom</span>
                <h5>Platform Belanja Ter-Oke</h5>
            </div>
        </header>
    );
}

export default Header