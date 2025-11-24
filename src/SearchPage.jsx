import { useContext } from 'react'
import styles from './SearchPage.module.css'
import { PreferenceContext } from './usePreference'

const ResultCard = ({ problem, index }) => {
    const {name, difficulty, topic} = problem;
    const { difficulties } = useContext(PreferenceContext)

    const getDiffifcultyLabelColor = () => {
        const { labelColor } = difficulties.find(({ level }) => level === difficulty);
        return labelColor
    }

    const difficultyLabelColor = getDiffifcultyLabelColor();

    const DifficultyTag = () => {
        const DifficultyTagStyles = {
            color: difficultyLabelColor,
        }

        return (
            <span
                className = {`${styles['difficulty-tag']}`}
                style = {DifficultyTagStyles}
            >
                {difficulty}
            </span>
        )
    }

    return (
        <>
            <div
                className = {`${styles['result-card']}`}
            >
                <span
                    className = {`${styles['result-index']}`}
                >
                    {index + 1}
                </span>
                <div
                    className = {`${styles['result-info']}`}
                >
                    <a
                        className = {`${styles['result-name']}`}
                        href = {`/solution/${name}`}
                    >
                        {name}
                    </a>
                    <div
                        className = {`${styles['result-tag-container']}`}
                    >
                        <DifficultyTag>
                        </DifficultyTag>
                    </div>
                </div>
                

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
                            dipslayProblems.map((problem, index) => {
                                return (
                                    <ResultCard
                                        key = {problem.name}
                                        problem = {problem}
                                        index = {index}
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