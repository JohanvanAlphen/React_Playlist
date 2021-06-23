import React, { useContext } from "react"
import { SongContext } from "../context/SongContext"
import SongDetails from "./SongDetails"
import DropdownSort from "./DropdownSort"


const SongList = () => {
    const { songs } = useContext(SongContext)

    return songs.length ? (

        <div
            className="song-list"
        >

            <DropdownSort />
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
            There are no songs in your playlist anymore, about time to add a few... 🎵 🎧 😊
        </div>
    )
}

export default SongList