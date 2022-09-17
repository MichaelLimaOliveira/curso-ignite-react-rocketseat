import styles from './Header.module.css'
import iginitelogo from '../assets/ignite-logo.svg'

export function Header() {
    return (
        <header className={styles.header}>
            <img src={iginitelogo} alt="Logotipo do Ignite" />
        </header>
    )
};