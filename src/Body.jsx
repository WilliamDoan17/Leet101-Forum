import styles from './Body.module.css'
import Preferences from './Preferences'
import { PreferenceProvider } from './usePreference'

const Body = () => {
    return (
        <>
            <div
                className = {`${styles['container']}`}
            >
                <PreferenceProvider>
                    <Preferences>
                    </Preferences>
                </PreferenceProvider>
            </div>  
        </>
    )    
}

export default Body