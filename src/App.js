import { useState } from 'react';
import './App.css';
import Home from './components/Feed/Home';
import Sidebar from './components/Sidebar/Sidebar';
import User from './components/Sidebar/User';
import Topbar from './components/topbar/Topbar';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import CreateProject from './components/Sidebar/CreateProject';
import Team from './components/Sidebar/Team';
import AddTeam from './components/Sidebar/AddTeam';
import Projects from './components/Sidebar/Projects';
import EditProject from './components/Sidebar/EditProject';
import { useStateValue } from './StateProvider';
import Login from './components/Login';

const App = () => {
  const [hamburger, setHamburger] = useState(true);
  const [{ user }] = useStateValue();

  return (
    <div className="app">
      {(!user) ? (<Login />) : (
        <Router>
          <Topbar openBurger={() => setHamburger(!hamburger)} />
          <div className="app__body">
            {hamburger && <Sidebar />}
            <Switch>
              <Route path="/" exact component={Home} />
              <Route path="/User" component={User} />
              <Route path="/CreateProject" component={CreateProject} />
              <Route path="/Team" component={Team} />
              <Route path="/AddTeam" component={AddTeam} />
              <Route path="/Projects" component={Projects} />
              <Route path="/EditProject/:editId" component={EditProject} />
              <Route path="/Login" component={Login} />
            </Switch>
          </div>
        </Router>
      )}
    </div>
  );
}

export default App;
