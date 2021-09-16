import './App.css';
import './user/styles/style.css';

import { AuthProvider } from './hooks/useAuth';
import React, { useState, useEffect } from 'react';

import {
    BrowserRouter as Router,
    Route,
    Switch
  } from "react-router-dom";


import Header from './user/composants/Header.js';
import Footer from './user/composants/Footer.js';
import Home from './user/pages/Home.jsx';
import Compteur from './user/pages/Compteur.jsx';
import AdminPage from './admin/pages/Admin';
import NotFound from './user/composants/NotFound';
import NoPermissions from './user/composants/NoPermissions';

import { db } from './firebase';



function App() {

  const [currentvisitor, setCurrent] = useState([]);
  const [totalVisitor, setTotalVisitor] = useState([]);

  useEffect( () => {
    db.collection("visitor").doc("current").onSnapshot((doc) => {
      setCurrent(doc.data());
      console.log('new data current')
    });
    db.collection("visitor").doc("total").onSnapshot((doc) => {
      setTotalVisitor(doc.data());
      console.log('new data total')
    });
  },[])
  

  const [user, setUser] = useState(false);
    
  return (
    <AuthProvider>
          <Router>
            <Header />
            <Switch>
           
              <Route exact path="/">
                  <Home user={user} setUser={setUser}/>
              </Route>

              <Route exact path="/compteur">
                <Compteur current={currentvisitor} user={user} totalVisitor={totalVisitor} />
              </Route>

              <Route exact path="/admin">
                <AdminPage currentdata={currentvisitor} db={db} setCurrent={setCurrent} totalVisitor={totalVisitor}/>
              </Route>

              <Route exact path="/401">
                <NoPermissions />
              </Route>

              <Route path="*">
                <NotFound />
              </Route>

            </Switch>
            <Footer /> 
          </Router>
    </AuthProvider>
  )

}

export default App;
