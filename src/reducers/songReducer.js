export const songReducer = (state, action) => {
    const newId = state.length + 1
    console.log(action)
    switch (action.type) {
        case "ADD_SONG":
            return [...state, {
                title: action.song.title,
                artist: action.song.artist,
                genre: action.song.genre,
                rating: action.song.rating,
                id: newId
            }]
        case "REMOVE_SONG":
            return state.filter(song => song.id !== action.id)
        case "SORT_ARTIST":
            return [...state, {
                artist: action.song.artist,
            }].sort((a, b) => {
                return parseInt(b.artist) - parseInt(a.artist)
            })

        default:
            return state
    }

}