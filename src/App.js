// import logo from './logo.svg';
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import NavbarContainer from './Containers/NavbarContainer'
import Home from './Containers/Home'
import Discover from './Containers/Discover'
import Today from './Containers/Today'
import EventForm from './Components/EventForm'

function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <NavbarContainer />
          <Route exact path="/" component={Home} />
          <Route exact path="/today" component={Today} />
          <Route exact path="/discover" component={Discover} />
          <Route exact path="/new" component={EventForm} />
        </div>
      </Router>
    </div>
  );
}

export default App;
