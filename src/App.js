import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Nav from './components/layout/Nav';
import Home from './components/pages/Home';
import Footer from './components/layout/Footer';

// Routes
import About from './components/pages/About';
import BaitItems from './components/pages/BaitItems';
// import LineItems from './components/pages/LineItems';
// import RodReelItems from './components/pages/RodReelItems';
// import TerminalTackleItems from './components/pages/TerminalTackleItems';
import GearItems from './components/pages/GearItems';
import AntiqueItems from './components/pages/AntiqueItems';

function App() {
  return (
    <Router>
      <div className='App'>
        <Nav />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/about' component={About} />
          <Route exact path='/bait' component={BaitItems} />
          {/* <Route exact path='/lines' component={LineItems} /> */}
          {/* <Route exact path='/rodsReels' component={RodReelItems} /> */}
          {/* <Route exact path='/terminalTackle' component={TerminalTackleItems} /> */}
          <Route exact path='/gear' component={GearItems} />
          <Route exact path='/antiques' component={AntiqueItems} />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
