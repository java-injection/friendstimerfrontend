import React, {useEffect, useState} from 'react';
import axios from "axios";

export default function CheckAuth() {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [isLoading, setIsLoading] = useState(true);
    useEffect(() => {
        console.log("sto eseguendo la feeeetch");
        // Chiamata al server per verificare il cookie
        axios.get("http://localhost:8080/user/id", { withCredentials: true })
            .then((response) => {
                // Se la risposta è positiva, l'utente è autenticato
                setIsAuthenticated(true);
                setIsLoading(false);  // Rimuovi il loading quando la risposta arriva
            })
            .catch((err) => {
                // Se c'è un errore, significa che non è autenticato
                setIsAuthenticated(false);
                setIsLoading(false);  // Rimuovi il loading anche in caso di errore
            });
    }, []);
    return isAuthenticated;
}