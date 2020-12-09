import React from 'react'
import Login from './Views/Login/login'
import {useSelector} from 'react-redux'
import {BrowserRouter as Router} from 'react-router-dom'
import Sidebar from './Views/sideBar/sideBar'
import ViewBugPage from './Views/Pages/viewBugs'
function App() {
  const {auth} = useSelector(state => state)
  return ( <>
    {!auth.LoggedIn ? <Login /> :
    <>
        <Sidebar />
        <ViewBugPage />
      </>}
   </>
  );
}

export default App;
