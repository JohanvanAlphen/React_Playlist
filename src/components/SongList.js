import React, { useContext } from "react"
import { SongContext } from "../context/SongContext"
import SongDetails from "./SongDetails"

const SongList = (song) => {
    const { songs } = useContext(SongContext)
    const { dispatch } = useContext(SongContext)

    return songs.length ? (
        <div
            className="song-list"
        >
            <button
                onClick={() => dispatch({ type: "SORT_ARTIST", title: song.title })}

            >Sort artist</button>
            <ul>
                {songs.map(song => {
                    return (
                        <SongDetails
                            song={song}
                            key={song.id}
                        />
                    )
                })}

            </ul>
        </div>
    ) : (
        <div
            className="empty"
        >
            Geen songs meer in je lijst, het wordt tijd om wat nieuwe songs toe te voegen ;))
        </div>
    )
}

export default SongList