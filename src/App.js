
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Register from './Components/Register';
import login from './Components/login';
import home from './Components/home';
import Homebar from './Components/Homebar';
import apphome from './Components/apphome';

function App() {
  return (
    <Router>
    <Switch>
	  <Route exact path='/Register'  component={Register}/>
		<Route exact path='/' component={login} />
    <Route exact path='/home'  component={home}/>
    <Route exact path='/Homebar'  component={Homebar}/>
    <Route exact path='/apphome'  component={apphome}/>
   </Switch>
   </Router>
     )
  }

export default App;
