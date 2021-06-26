import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import { createContext } from 'react';
import { useState } from 'react';
import Login from './Components/Login/Login';
import PublishBlog from './Components/PublishBlog/PublishBlog';
import Home from './Components/Home/Home'
import MakeAdmin from './Components/MakeAdmin/MakeAdmin';
import ManageBlogs from './Components/ManageBlogs/ManageBlogs';
import Navbar from './Components/Navbar/Navbar'
import Dashboard from './Components/Dashboard/Dashboard';
import PrivateRoute from './Components/Login/PrivateRoute'

export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
    <Router>
      <Navbar/>
       <Switch>
          <Route path="/login">
            <Login></Login>
          </Route>
          <Route path="/publish">
              <PublishBlog></PublishBlog>
          </Route>
          <Route path="/admin">
              <MakeAdmin></MakeAdmin>
          </Route>
          <PrivateRoute path="/dashboard">
              <Dashboard></Dashboard>
          </PrivateRoute>
          <Route path="/manageblog">
              <ManageBlogs></ManageBlogs>
          </Route>
          <Route exact path="/">
            <Home></Home>
          </Route>
        </Switch>
    </Router>
    </UserContext.Provider>

  );
}

export default App;
