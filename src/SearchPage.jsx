import { useContext } from 'react'
import styles from './SearchPage.module.css'
import { PreferenceContext } from './usePreference'

const ResultCard = ({ problem }) => {
    const {name, difficulty, topic} = problem;

    return (
        <>
            <div
                className = {`${styles['result-card']}`}
            >
                <p>{name}</p>

            </div>
        </>
    )
}

const SearchPage = () => {
    const { keyword, difficulties, topics, problems } = useContext(PreferenceContext);

    const getDisplayProblems = () => {
        const resultProblems = problems
            .filter(({ chosen }) => chosen)
            .map(problem => problem);
        return resultProblems
    }

    const dipslayProblems = getDisplayProblems();
    console.log(dipslayProblems)

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
                    <h2
                        className = {`${styles['result-container-heading']}`}
                    >
                        Solutions
                    </h2>
                    <div
                        className = {`${styles['result-card-container']}`}
                    >
                        {
                            dipslayProblems.map((problem) => {
                                return (
                                    <ResultCard
                                        key = {problem.name}
                                        problem = {problem}
                                    >

                                    </ResultCard>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </>
    )
}   

export default SearchPage