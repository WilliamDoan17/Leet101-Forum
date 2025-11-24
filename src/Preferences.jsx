import { useState } from 'react'
import styles from './Preferences.module.css'

const KeywordPreference = () => {
    const [keywordInput, setKeywordInput] = useState('');

    const handleKeywordChange = (e) => {
        setKeywordInput(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
    }

    return (
        <>
            <div
                className = {`${styles['preference-container']}`} 
            >
                <form
                    onSubmit = {handleSubmit}
                >
                    <label
                        className = {`${styles['keyword-label']}`}
                        htmlFor = 'keyword'

                    >
                        Search by keyword
                    </label>
                    <input
                        className = {`${styles['keyword-input']}`}
                        id = 'keyword'
                        type = "text"
                        name = 'keyword'
                        placeholder = 'Input keyword'
                        value = {keywordInput}
                        onChange = {handleKeywordChange}
                    >
                    </input>
                </form>
            </div>
        </>
    )
}

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
                    <KeywordPreference>
                    </KeywordPreference>
                </div>
            </div>
        </>
    )
}

export default Preferences