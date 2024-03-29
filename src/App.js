import './App.css';
import './index.css';
import About from './components/componentsHtml/About'
import Cours from './components/componentsHtml/Cours'
import Contact from './components/componentsHtml/Contact'
import Navbar from './components/Navbar';
import Footer  from './components/Footer';
import All from './components/All'
import Trainers from './components/componentsHtml/Trainers';

import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';

function App() {
  return (

    <Router>
   <Navbar />
    <Switch>
        <Route path="/" exact component={All} />
        <Route path="/about" component={About} />
        <Route path="/courses" component={Cours} />
        <Route path="/trainers" component={Trainers} />
        {/* <Route path="/events" component={Events} />
        <Route path="/pricing" component={Pricing} /> */}
        <Route path="/contact" component={Contact} />
       </Switch>
      <Footer />
    </Router>
    
  );
}

export default App;
