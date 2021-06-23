import React from 'react'
import NewSongForm from './components/SongForm'
import SongList from './components/SongList';
import Footer from "./components/Footer"


function Container() {
    return (
        <div>
            <NewSongForm />
            <SongList />
            <Footer />
        </div>
    )
}

export default Container
