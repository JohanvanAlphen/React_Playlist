import SongContextProvider from './context/SongContext';
import Navbar from './components/Navbar';
import SongList from './components/SongList';
import NewSongForm from './components/SongForm';

function App() {
  return (
    <div className="App">
      <SongContextProvider>
        <Navbar />
        <NewSongForm />
        <SongList />
      </SongContextProvider>
    </div>
  );
}

export default App;
