import React, { useContext } from "react"
import { SongContext } from "../context/SongContext";

const Navbar = () => {
    const { songs } = useContext(SongContext);
    return (
        <div
            className="navbar"
        >
            <h1>Johan's Lil' Playlist</h1>
            <p>Momenteel heb je {songs.length} songs in je playlist...</p>
        </div>
    );
}

export default Navbar