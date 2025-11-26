import styles from './Body.module.css'
import Preferences from './Preferences'
import { PreferenceProvider } from './usePreference'
import { useNavigate, Route, Routes, useLocation } from 'react-router-dom'
import SearchPage from './SearchPage'
import SolutionPage from './SolutionPage'
import { useEffect } from 'react'

const Body = () => {
    const location = useLocation();

    useEffect(() => {
        console.log("Current scroll position:", window.pageYOffset);
        window.scrollTo(0, 0);
        console.log("After scroll position:", window.pageYOffset);
    }, [location.pathname]);

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
                            path = "/search"
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