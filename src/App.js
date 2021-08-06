import './App.css';
import './user/styles/style.css';

import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import {
    BrowserRouter as Router,
    Route,
  } from "react-router-dom";


import Header from './user/composants/Header.js';
import Footer from './user/composants/Footer.js';
import Home from './user/pages/Home.jsx';
import Compteur from './user/pages/Compteur.jsx';
import AdminPage from './admin/pages/Admin';
import Nav from './user/composants/Nav';

import { db } from './firebase';




function App() {

  const [currentvisitor, setCurrent] = useState();
  db.collection("visitor").doc("Tyl2gJYGTnmuyJc2175F").onSnapshot((doc) => {
    setCurrent(doc.data().current);
  });

  const [totalVisitor, setTotalVisitor] = useState();
  db.collection("visitor").doc("Tyl2gJYGTnmuyJc2175F").onSnapshot((doc) => {
    setTotalVisitor(doc.data().total);
  });

  const [user, setUser] = useState(false);


    
  return (
          <Router>
              <Route exact path="/">
                  <Header />
                 
                  <Home user={user} setUser={setUser}/>
                  <Footer />
              </Route>

              <Route exact path="/compteur">
                <Header />
                
                <Compteur current={currentvisitor} user={user} totalVisitor={totalVisitor} />
              </Route>

              <Route exact path="/admin">
                <Header />
                <AdminPage current={currentvisitor} db={db} setCurrent={setCurrent} totalVisitor={totalVisitor}/>
                <Footer />
              </Route>
              
          </Router>
  )

}

export default App;
