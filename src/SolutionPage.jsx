import { useContext } from 'react';
import styles from './SolutionPage.module.css'
import { Navigate, useNavigate, useParams } from 'react-router-dom';
import { PreferenceContext } from './usePreference';
import { solutionMap } from './data/solutions';

const SolutionPage = () => {
    const { name } = useParams();
    const { problemMap } = useContext(PreferenceContext)
    const problem = problemMap.get(name);
    const { difficulty, topic } = problem;
    const navigate = useNavigate()
    const { author, explanation, solution, notes, comments } = solutionMap.get(name);

    const handleBack = () => {
        navigate('/');
    }

    return (
        <>
            <div
                className = {`${styles['container']}`}
            >
                <a
                    className = {`${styles['back-button']}`}
                    onClick = {handleBack}
                >
                    ← Go Back
                </a>
                <h1
                    className = {`${styles['solution-heading']}`}
                >
                    {name}
                </h1>
            </div>
        </>
    )
}

export default SolutionPage;