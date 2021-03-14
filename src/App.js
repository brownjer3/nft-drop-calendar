// import logo from './logo.svg';
import './App.css'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import TodayContainer from './Containers/TodayContainer'
import NavbarContainer from './Containers/NavbarContainer'
import Home from './Containers/Home'

function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <NavbarContainer />
          <Route exact path="/" component={Home} />
          <Route exact path="/today" component={TodayContainer} />
          {/* <Route exact path="/login" component={Login} /> */}
        </div>
      </Router>
    </div>
  );
}

export default App;
