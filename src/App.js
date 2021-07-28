

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Register from './Components/Register';
import login from './Components/login';
import home from './Components/home';
import Homebar from './Components/Homebar';
import apphome from './Components/apphome';
import Adminpg from './Components/Adminmainpg';

function App() {
  return (
    <Router>
    <Switch>
	  <Route exact path='/Register'  component={Register}/>
		<Route exact path='/' component={login} />
    <Route exact path='/home'  component={home}/>
    <Route exact path='/Homebar'  component={Homebar}/>
    <Route exact path='/apphome'  component={apphome}/>
    <Route exact path='/Adminmainpg'  component={Adminpg}/>
   </Switch>
   </Router>
     )
  }

export default App;
