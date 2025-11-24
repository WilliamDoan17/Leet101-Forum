import { useContext, useState } from 'react'
import styles from './Preferences.module.css'
import { PreferenceContext } from './usePreference';

const KeywordPreference = () => {
    const { keyword, setKeyword } = useContext(PreferenceContext);
    const [keywordInput, setKeywordInput] = useState(keyword);

    const handleKeywordChange = (e) => {
        setKeywordInput(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setKeyword(keywordInput)
    }

    return (
        <>
            <div
                className = {`${styles['preference-container']}`} 
            >
                <legend
                    className = {`${styles['preference-label']}`}

                >
                    Search by keyword
                </legend>
                <form
                    className = {`${styles['keyword-form']}`}
                    onSubmit = {handleSubmit}
                >
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

const DifficultyCheckbox = ({ difficulty, onChange }) => {
    const { level, labelColor, chosen } = difficulty;

    const labelStyles = {
        color: labelColor,
    }

    const checkedCheckboxStyles = {
        accentColor: labelColor,
        border: `1px solid ${labelColor}`,
    }

    const toggleCheckbox = (e) => {
        onChange && onChange(difficulty, e.target.checked)
    }

    return (
        <>
            <div
                className = {`${styles['difficulty-checkbox-container']}`}
            >
                <input
                    className = {`${styles['difficulty-checkbox-input']}`}
                    style = {checkedCheckboxStyles}
                    type = "checkbox"
                    checked = {chosen}
                    onChange = {toggleCheckbox}
                    id = {level}
                    name = {level}
                >
                </input>
                <label
                    className = {`${styles['difficulty-checkbox-label']}`}
                    htmlFor = {level}
                    style = {labelStyles}
                >
                    {level}
                </label>
            </div>
        </>
    )
}

const DifficultiesPreference = () => {
    const { difficulties, setDifficulties } = useContext(PreferenceContext);

    const handleChangeDifficultyChosen = (difficulty, newChecked) => {
        const newDifficulty = {
            ...difficulty,
            chosen: newChecked,
        }
        const newDifficulties = difficulties.map((_difficulty) => {
            if (_difficulty === difficulty) return newDifficulty
            return _difficulty
        })
        
        setDifficulties(newDifficulties); 
    }

    return (
        <>
            <div
                className = {`${styles['preference-container']}`}
            >
                <legend
                    className = {`${styles['preference-label']}`}
                >
                    Difficulty
                </legend>
                {
                    difficulties.map(difficulty => 
                    <DifficultyCheckbox 
                        key = {difficulty.level}
                        difficulty = {difficulty}
                        onChange = {handleChangeDifficultyChosen}
                    ></DifficultyCheckbox>)
                }
            </div>
        </>
    ) 
}

const TopicCheckbox = ({ topic, onChange }) => {
    const { name, chosen } = topic;

    const toggleCheckbox = (e) => {
        onChange && onChange(topic, e.target.checked)
    }


    return (
        <>
            <div
                className = {`${styles['topic-checkbox-container']}`}
            >
                <input
                    className = {`${styles['topic-checkbox-input']}`}
                    type = "checkbox"
                    checked = {chosen}
                    onChange = {toggleCheckbox}
                    id = {name}
                    name = {name}
                >
                </input>
                <label
                    className = {`${styles['topic-checkbox-label']}`}
                    htmlFor = {name}
                >
                    {name}
                </label>
            </div>
        </>
    )
}

const TopicsPreference = () => {
    const { topics, setTopics } = useContext(PreferenceContext);

    const handleChangeTopicsChosen = (topic, newChecked) => {
        const newTopic = {
            ...topic,
            chosen: newChecked,
        }
        
        const newTopics = topics.map((_topic) => {
            if (_topic === topic) return newTopic
            return _topic
        })
        
        setTopics(newTopics)
    }
  
    return (
        <>
            <div
                className = {`${styles['preference-container']}`}
            >
                <legend
                    className = {`${styles['preference-label']}`}
                >
                    Topics
                </legend>
                <div
                    className = {`${styles['topics-container']}`}
                >
                    {
                        topics.map((topic) => {
                            return (
                                <TopicCheckbox
                                    key = {topic.name}
                                    topic = {topic}
                                    onChange = {handleChangeTopicsChosen}
                                >
                                </TopicCheckbox>
                            )
                        })
                    }
                </div>
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
                    <DifficultiesPreference>
                    </DifficultiesPreference>
                    <TopicsPreference></TopicsPreference>
                </div>
            </div>
        </>
    )
}

export default Preferences