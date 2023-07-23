import styles from './header.module.scss';

export function Header(){
    return(
            <header className={styles.header}>
                <span>Real-time Experince</span>
                <div className={styles.line}></div>
            </header>
    )
}