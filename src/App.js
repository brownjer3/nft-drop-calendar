// import logo from './logo.svg';
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import NavbarContainer from './Containers/NavbarContainer'
import Discover from './Containers/Discover'
import CalendarContainer from './Containers/CalendarContainer'
import EventFormContainer from './Containers/EventFormContainer'
import TweetsContainer from './Containers/TweetsContainer'

function App() {
  return (
    <div className="App">
      <Router>
        <>
          <NavbarContainer />
          <Route exact path="/" component={CalendarContainer} />
          <Route exact path="/tweets" component={TweetsContainer} />
          <Route exact path="/discover" component={Discover} />
          <Route exact path="/new" component={EventFormContainer} />
          </>
      </Router>
    </div>
  );
}

export default App;
