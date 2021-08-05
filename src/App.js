
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Register from './Components/Register';
import login from './Components/login';
import home from './Components/home';
import Homebar from './Components/Homebar';
import apphome from './Components/apphome';
import Adminpg from './Components/Adminmainpg';
import Profilepg from './Components/Profile';
import Dashboardpg from './Components/Dashboard';
import Weekend from './Components/Weekend';
import Reguser from './Components/Registereduser';
import Past from './Components/PastEvents';
import Events from './Components/EventsReg';

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
    <Route exact path='/Profile'  component={Profilepg}/>
    <Route exact path='/Dashboard'  component={Dashboardpg}/>
    <Route exact path='/Weekend'  component={Weekend}/>
    <Route exact path='/Registereduser'  component={Reguser}/>
    <Route exact path='/PastEvents'  component={Past}/>
    <Route exact path='/EventsRegistered'  component={Events}/>
   </Switch>
   </Router>
     )
  }

export default App;
