import React, { useState, useContext } from "react"
import { SongContext } from "../context/SongContext"

function NewSongForm() {
    const { dispatch } = useContext(SongContext)
    const [title, setTitle] = useState("")
    const [artist, setArtist] = useState("")
    const [genre, setGenre] = useState("")
    const [rating, setRating] = useState("")
    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch({
            type: "ADD_SONG", song: {
                title, artist, genre, rating
            }
        });
        setTitle("");
        setArtist("");
        setGenre("");
        setRating("");
    }
    return (
        <form onSubmit={handleSubmit}
        >
            <input
                type="text"
                placeholder="Song title..."
                required
                value={title}
                onChange={(e) => setTitle(e.target.value)}
            />
            <input
                type="text"
                placeholder="Artist..."
                required
                value={artist}
                onChange={(e) => setArtist(e.target.value)}
            />
            <select
                name="dropdowngenre"
                className="dropdown-genre"
                value={genre}
                onChange={(e) => setGenre(e.target.value)}
                required>
                <option
                    value=""
                    id="1"
                >Kies uw genre</option>
                <option
                    value="pop"
                    id="2"
                >Pop</option>
                <option
                    value="rock"
                    id="3"
                >Rock</option>
                <option
                    value="klassiek"
                    id="4"
                >Klassiek</option>
                <option
                    value="reggae"
                    id="5"
                >Reggae</option>
                <option
                    value="house"
                    id="6"
                >House</option>
                <option
                    value="lovesongs"
                    id="7"
                >Lovesongs</option>
                <option
                    value="overig"
                    id="8"
                >Overig</option>
            </select>
            <select
                name="dropdownrating"
                value={rating}
                onChange={(e) => setRating(e.target.value)}
                required>
                <option
                    value=""
                    id="1"
                >Rating...</option>
                <option
                    value="one"
                    id="2"
                >1</option>
                <option
                    value="two"
                    id="3"
                >2</option>
                <option
                    value="three"
                    id="4"
                >3</option>
                <option
                    value="four"
                    id="5"
                >4</option>
                <option
                    value="five"
                    id="6"
                >5</option>
            </select>
            <button
                type="submit"
            >
                Voeg Nummer Toe
            </button>
            {/* <input
                className="add-button"
                type="submit"
                value="Voeg Nummer Toe"
            /> */}
        </form>
    )
}

export default NewSongForm
