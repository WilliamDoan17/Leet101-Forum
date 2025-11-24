import styles from './Body.module.css'
import Preferences from './Preferences'

const Body = () => {
    return (
        <>
            <div
                className = {`${styles['container']}`}
            >
                <Preferences></Preferences>
            </div>  
        </>
    )    
}

export default Body