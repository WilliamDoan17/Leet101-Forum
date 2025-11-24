import styles from './Preferences.module.css'

const Preferences = () => {
    return (
        <>
            <div
                className = {`${styles.container}`}
            >
                <div
                    className = {`${styles['sticky-container']}`}
                >
                    <p
                        className = {`${styles['preference-container']} ${styles['preference-message']}`}
                    >
                        Adjust your preference of questions below to access solutions for your Leet101 questions!
                    </p>
                </div>
            </div>
        </>
    )
}

export default Preferences