// src/TimerContext.js
import React, { createContext, useContext } from "react";

// Creazione del contesto
const TimerContext = createContext();

// Creazione del provider per il contesto
export const TimerProvider = ({ children }) => {


    const user = {
        id: 1,
        timers: [
            { id: 101, nome: "Timer Studio", progresso: 75 },
            { id: 102, nome: "Allenamento", progresso: 50 },
            { id: 103, nome: "Lettura", progresso: 30 }
        ],
        amici: [
            { id: 201, nome: "Marco" },
            { id: 202, nome: "Giulia" },
            { id: 203, nome: "Luca" }
        ]
    };

    return (
        <TimerContext.Provider value={{ user }}>
            {children}
        </TimerContext.Provider>
    );
};

// Hook personalizzato per accedere al contesto
export const useJson = () => {
    const context = useContext(TimerContext);
    if (context === undefined) {
        throw new Error("useJson deve essere utilizzato all'interno di TimerProvider");
    }
    return context;
};