import styles from './Body.module.css'
import Preferences from './Preferences'
import { PreferenceProvider } from './usePreference'
import { useNavigate, Route, Routes } from 'react-router-dom'
import SearchPage from './SearchPage'
import SolutionPage from './SolutionPage'

const Body = () => {
    const navigate = useNavigate();

    return (
        <>
            <div
                className = {`${styles['container']}`}
            >
                <PreferenceProvider>
                    <Preferences>
                    </Preferences>
                    <Routes>
                        <Route
                            path = "/"
                            element = {
                                <SearchPage></SearchPage>
                            }
                        ></Route>
                        <Route
                            path = "/solution/:name"
                            element = {
                                <>
                                    <SolutionPage
                                    >
                                    </SolutionPage>
                                </>
                            }
                        ></Route>
                    </Routes>
                </PreferenceProvider>
            </div>  
        </>
    )    
}

export default Body