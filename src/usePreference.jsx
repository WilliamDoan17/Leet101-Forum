import React, { useState, createContext, useEffect } from "react";
import { initialDifficulties } from "./data/difficulties";

export const PreferenceContext = createContext();

export const PreferenceProvider = ({ children }) => {
    const [keyword, setKeyword] = useState('');
    const [difficulties, setDifficulties] =  useState([...initialDifficulties])
    
    
    return (
        <>
            <PreferenceContext.Provider
                value = {{ keyword, setKeyword, difficulties, setDifficulties }}
            >
                {children}
            </PreferenceContext.Provider>
        </>
    )
}