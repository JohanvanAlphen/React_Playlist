export const songReducer = (state, action) => {
    const newId = state.length + 1
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

        case "SORT_ARTIST_ASC":
            return state.slice().sort((a, b) => {
                const nameA = a.artist.toLowerCase();
                const nameB = b.artist.toLowerCase();
                if (nameA < nameB)
                    return -1;
                if (nameA > nameB)
                    return 1;
                return 0;
            });
        case "SORT_ARTIST_DES":
            return state.slice().sort((a, b) => {
                const nameA = a.artist.toLowerCase();
                const nameB = b.artist.toLowerCase();
                if (nameA > nameB)
                    return -1;
                if (nameA < nameB)
                    return 1;
                return 0;
            });
        case "SORT_TITLE_ASC":
            return state.slice().sort((a, b) => {
                const titleA = a.title.toLowerCase();
                const titleB = b.title.toLowerCase();
                if (titleA < titleB)
                    return -1;
                if (titleA > titleB)
                    return 1;
                return 0;
            });
        case "SORT_TITLE_DES":
            return state.slice().sort((a, b) => {
                const titleA = a.title.toLowerCase();
                const titleB = b.title.toLowerCase();
                if (titleA > titleB)
                    return -1;
                if (titleA < titleB)
                    return 1;
                return 0;
            });
        case "SORT_GENRE_ASC":
            return state.slice().sort((a, b) => {
                const genreA = a.genre.toLowerCase();
                const genreB = b.genre.toLowerCase();
                if (genreA < genreB)
                    return -1;
                if (genreA > genreB)
                    return 1;
                return 0;
            });
        case "SORT_GENRE_DES":
            return state.slice().sort((a, b) => {
                const genreA = a.genre.toLowerCase();
                const genreB = b.genre.toLowerCase();
                if (genreA > genreB)
                    return -1;
                if (genreA < genreB)
                    return 1;
                return 0;
            });
        case "SORT_RATING_ASC":
            return state.slice().sort((a, b) => {
                const ratingA = a.rating.toLowerCase();
                const ratingB = b.rating.toLowerCase();
                if (ratingA < ratingB)
                    return -1;
                if (ratingA > ratingB)
                    return 1;
                return 0;
            });
        case "SORT_RATING_DES":
            return state.slice().sort((a, b) => {
                const ratingA = a.rating.toLowerCase();
                const ratingB = b.rating.toLowerCase();
                if (ratingA > ratingB)
                    return -1;
                if (ratingA < ratingB)
                    return 1;
                return 0;
            });
        // case "CHANGE_ROUTE":
        //     return state = songs


        default:
            return state
    }

}