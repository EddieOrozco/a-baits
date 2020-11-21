import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Nav from './components/layout/Nav';
import Home from './components/pages/Home';
import Footer from './components/layout/Footer';

// Routes
import About from './components/pages/About';
import Baits from './components/pages/Baits';
import Lines from './components/pages/Lines';
import RodsReels from './components/pages/RodsReels';
import TerminalTackle from './components/pages/TerminalTackle';
import Gear from './components/pages/Gear';
import Antiques from './components/pages/Antiques';

function App() {
  return (
    <Router>
      <div className='App'>
        <Nav />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/about' component={About} />
          <Route exact path='/bait' component={Baits} />
          <Route exact path='/lines' component={Lines} />
          <Route exact path='/rodsReels' component={RodsReels} />
          <Route exact path='/terminalTackle' component={TerminalTackle} />
          <Route exact path='/gear' component={Gear} />
          <Route exact path='/antiques' component={Antiques} />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
