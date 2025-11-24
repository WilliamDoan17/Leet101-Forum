import { useContext } from 'react'
import styles from './SearchPage.module.css'
import { PreferenceContext } from './usePreference'

const SearchPage = () => {
    const { keyword, difficulties, topics, problems } = useContext(PreferenceContext);
    console.log(problems);

    return (
        <>
            <div
                className = {`${styles['container']}`}
            >
                <h1
                    className = {`${styles['search-page-heading']}`}
                >
                    Find your LeetCode Solution here
                </h1>
                <p
                    className = {`${styles['search-page-subheading']}`}
                >
                    Here you can find a great resource for solutions that helps you to understand LeetCode problems.
                </p>
                <div
                    className = {`${styles['result-container']}`}
                >
                    
                </div>
            </div>
        </>
    )
}   

export default SearchPage