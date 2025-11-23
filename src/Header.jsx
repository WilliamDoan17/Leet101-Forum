import styles from './Header.module.css'

const Header = () => {
    const author = 'Phong Doan';
    const appName = 'Leet101';

    return (
        <>
            <div
                className = {`${styles.container}`}
            >
                <div
                    className = {`${styles['app-info']}`}
                >
                    <p
                        className = {`${styles['app-name']}`}
                    >
                        {appName}
                    </p>
                    <p
                        className = {`${styles['app-author']}`}
                    >
                        by {author}
                    </p>
                </div>
            </div>
        </>
    )
}

export default Header