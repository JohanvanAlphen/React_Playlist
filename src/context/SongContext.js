import React, { createContext, useReducer, useEffect } from "react"
import { songReducer } from "../reducers/songReducer";

export const SongContext = createContext();

const SongContextProvider = (props) => {
    const [songs, dispatch] = useReducer(songReducer, [
        {
            id: 1,
            title: "Love Me Tender",
            artist: "Elvis Presley",
            genre: "Rock",
            rating: "3"
        },
        {
            id: 2,
            title: "Wake Me Up",
            artist: "Avicci",
            genre: "Pop",
            rating: "4"
        },
        {
            id: 3,
            title: "Lady In Red",
            artist: "Chris de Burgh",
            genre: "Lovesongs",
            rating: "2"
        },
    ]);

    useEffect(() => { }, [songs])
    return (
        <SongContext.Provider
            value={{ songs, dispatch }}
        >
            {props.children}

        </SongContext.Provider>
    )
}

export default SongContextProvider