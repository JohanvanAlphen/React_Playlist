import SongContextProvider from './context/SongContext';
import Navbar from './components/Navbar';
import Container from "./Container"
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import AboutMe from './components/AboutMe';


function App() {
  return (
    <div className="App">
      <Router>
        <SongContextProvider>
          <Navbar />
          <Switch>
            <Route exact path="/">
              <Container />
            </Route>
            <Route exact path="/components/aboutme">
              <AboutMe />
            </Route>
          </Switch>
        </SongContextProvider>
      </Router>
    </div>
  );
}

export default App;
