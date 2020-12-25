
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import UserList from './user/UserList';
import User from './user/User';
import Home from './user/Home';


function App() {
  return (
    <Router>
      <Switch>
        <Route path='/userlist'>
          <UserList/>
        </Route>
        <Route path='/user/:id'>
          <User/>
        </Route>
        <Route path='/'>
          <Home/>
        </Route>


      </Switch>
    </Router>
  );
}

export default App;
