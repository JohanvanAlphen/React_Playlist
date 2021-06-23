import React, { useContext } from "react"
import { SongContext } from "../context/SongContext";

const Navbar = () => {
    const { songs } = useContext(SongContext);
    return (
        <div
            className="navbar"
        >
            <h1>Johan's Lil' Playlist</h1>
            <p>At the moment you have {songs.length} songs in your playlist...</p>
        </div>
    );
}

export default Navbar