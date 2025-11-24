import React, { useState, createContext, useEffect, useCallback } from "react";
import { initialDifficulties } from "./data/difficulties";
import { initialTopics } from "./data/topics";
import { initialProblems } from './data/problems'

export const PreferenceContext = createContext();

export const PreferenceProvider = ({ children }) => {
    const [keyword, setKeyword] = useState('');
    const [difficulties, setDifficulties] = useState([...initialDifficulties]);
    const [topics, setTopics] = useState([...initialTopics]);
    const [problems, setProblems] = useState([...initialProblems]);

    const getProblemsFromPreferences = useCallback((keyword, difficulties, topics, problems) => {
        const newDifficultyLevels = difficulties
            .filter(({ chosen }) => chosen)
            .map(({ level }) => level);
        
        const newTopicNames = topics
            .filter(({ chosen }) => chosen)
            .map(({ name }) => name);

        const checkKeyword = ({ name }) => {
            if (!keyword) return true;
            return name.toLowerCase().includes(keyword.toLowerCase());
        };

        const checkDifficulty = ({ difficulty }) => {
            if (newDifficultyLevels.length === 0) return true;
            return newDifficultyLevels.includes(difficulty);
        };

        const checkTopic = ({ topic }) => {
            if (newTopicNames.length === 0) return true;
            return newTopicNames.includes(topic);
        };

        const checkPreferences = (problem) => {
            return checkKeyword(problem) && checkDifficulty(problem) && checkTopic(problem);
        };

        return problems.map((problem) => ({
            ...problem,
            chosen: checkPreferences(problem),
        }));
    }, []);

    useEffect(() => {
        const newProblems = getProblemsFromPreferences(keyword, difficulties, topics, problems);
        setProblems(newProblems);
    }, [keyword, difficulties, topics, getProblemsFromPreferences]);

    const contextValue = {
        keyword,
        setKeyword,
        difficulties,
        setDifficulties,
        topics,
        setTopics,
        problems,
        setProblems,
    };

    return (
        <>
            <PreferenceContext.Provider
                value = {contextValue}
            >
                {children}
            </PreferenceContext.Provider>
        </>
    )
}