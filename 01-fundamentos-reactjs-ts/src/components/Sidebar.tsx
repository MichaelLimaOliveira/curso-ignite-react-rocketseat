import styles from './Sidebar.module.css';
import { PencilSimpleLine } from "phosphor-react";
import { Avatar } from './Avatar';

export function Sidebar() {
    return (
        <aside className={styles.sidebar}>
            <img 
                className={styles.cover} 
                src="https://images.unsplash.com/photo-1525498128493-380d1990a112?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=50" />

            <div className={styles.profile}>
                <Avatar 
                    src='https://github.com/MichaelLimaOliveira.png'
                    hasBorder
                />

                <strong>Michael Lima</strong>
                <span>Full Stack dev</span>
            </div>
            <footer>
                <a href="#">
                    <PencilSimpleLine size={18}/>
                    Editar seu Perfil
                </a>
            </footer>
        </aside>
    );
}