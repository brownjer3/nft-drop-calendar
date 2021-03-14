// import logo from './logo.svg';
import './App.css'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import NavbarContainer from './Containers/NavbarContainer'
import Home from './Containers/Home'
import Discover from './Containers/Discover'
import TodayContainer from './Containers/TodayContainer'

function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <NavbarContainer />
          <Route exact path="/" component={Home} />
          <Route exact path="/today" component={TodayContainer} />
          <Route exact path="/discover" component={Discover} />
        </div>
      </Router>
    </div>
  );
}

export default App;
