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

    const SolutionContainer = () => {
        return (
            <>
                <div
                    className = {`${styles['solution-container']}`}
                >
                    <span
                        className = {`${styles['solution-author']}`}
                    >
                        Written by: {author}
                    </span>
                    <h2
                        className = {`${styles['solution-container-heading']}`}
                    >
                        Explanation
                    </h2>
                    <p
                        className = {`${styles['solution-container-para']}`}
                    >
                        {explanation}
                    </p>
                    <h2
                        className = {`${styles['solution-container-heading']}`}
                    >
                        Solution
                    </h2>
                    <code
                        className = {`${styles['solution-container-para']}`}
                    >   
                        <pre
                            className = {`${styles['solution-code']}`}
                        >
                            {solution}
                        </pre>
                    </code>
                    <h2
                        className = {`${styles['solution-container-heading']}`}
                    >
                        Notes:
                    </h2>
                    <p
                        className = {`${styles['solution-container-para']}`}
                    >
                        {notes}
                    </p>
                </div>
            </>
        )
    }

    const CommentCard = ({ comment }) => {
        const { author, content } = comment;

        return (
            <>
                <div
                    className = {`${styles['comment-card']}`}
                >
                    <p
                        className = {`${styles['comment-author']}`}
                    >
                        {author}
                    </p>
                    <p
                        className = {`${styles['comment-content']}`}
                    >
                        {content}
                    </p>
                </div>
            </>
        )
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
                    className = {`${styles['heading']}`}
                >
                    {name}
                </h1>
                
                <SolutionContainer>
                </SolutionContainer>
                <h2
                    className = {`${styles['comments-container-heading']}`}
                >
                    Comments
                </h2>
                <div
                    className = {`${styles['comments-container']}`}
                >
                    
                    {
                        comments.map((comment, id) => {
                            return (
                                <CommentCard
                                    key = {id}
                                    comment = {comment}
                                >
                                </CommentCard>
                            )
                        })
                    }
                </div>
            </div>
        </>
    )
}

export default SolutionPage;