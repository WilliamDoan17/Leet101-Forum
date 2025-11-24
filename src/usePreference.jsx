import React, { useState, createContext, useEffect } from "react";
import { initialDifficulties } from "./data/difficulties";
import { initialTopics } from "./data/topics";

export const PreferenceContext = createContext();

export const PreferenceProvider = ({ children }) => {
    const [keyword, setKeyword] = useState('');
    const [difficulties, setDifficulties] =  useState([...initialDifficulties])
    const [topics, setTopics] = useState([...initialTopics]);
    
    return (
        <>
            <PreferenceContext.Provider
                value = {{ keyword, setKeyword, difficulties, setDifficulties, topics, setTopics }}
            >
                {children}
            </PreferenceContext.Provider>
        </>
    )
}