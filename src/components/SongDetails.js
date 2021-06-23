import React, { useContext } from "react"
import { SongContext } from "../context/SongContext"

function SongDetails({ song }) {
    const { dispatch } = useContext(SongContext)
    return (
        <li className="song-details">
            <div
                className="title"
            ><p>Title:</p>
                {song.title}

            </div>
            <div
                className="artist"
            >
                <p>Artist:</p>
                {song.artist}

            </div>
            <div
                className="genre"
            >
                <p>Genre:</p>
                {song.genre}
            </div>
            <div
                className="rating"
            >
                <p>Rating:</p>
                {song.rating}
            </div>
            <button
                className="remove-button"
                onClick={() => dispatch({ type: "REMOVE_SONG", id: song.id })}
            >🗑️</button>
        </li>
    )
}

export default SongDetails
