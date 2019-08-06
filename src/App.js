import React, { Component, Fragment, useContext, useState } from 'react';
import {BrowserRouter, Switch, Route, withRouter} from 'react-router-dom'

import {Homepage} from './js/Homepage';
import {Header } from './js/Header';
import {Footer} from './js/Footer';
import {SearchPage} from './js/SearchPage';
import { SeatsPage } from './js/SeatsPage';
import { PassengersPage } from './js/PassengersPage';
import { PaymentPage } from './js/PaymentPage';
import { ApiService } from './js/ApiService';


import { ApiServiceContext } from './js/context'

const apiService = new ApiService();

const App = () => {
  if (sessionStorage.searchParams === undefined && sessionStorage.currentTrain === undefined) {
    sessionStorage.searchParams = JSON.stringify({});
    sessionStorage.currentTrain = JSON.stringify({});

  }

      const HeaderComponent = withRouter(Header);

      const [searchParams, setSearchParams] = useState(JSON.parse(sessionStorage.searchParams));
      const [currentTrain, setCurrentTrain] = useState(JSON.parse(sessionStorage.currentTrain));
      const [trains, setTrains] = useState([]);
      return (
        <BrowserRouter >
        <ApiServiceContext.Provider value={apiService}>
          <HeaderComponent setSearchParams={params => {
            setSearchParams(params);
            sessionStorage.searchParams = JSON.stringify(params);
            }}/>
          <Switch>
            <Route path='/search' 
                   render={props => <SearchPage 
                                      {...props}  
                                      searchParams={searchParams} 
                                      trains={trains}
                                      setTrains={trains => setTrains(trains)}
                                      setCurrentTrain={train => {
                                        setCurrentTrain(train);
                                        sessionStorage.currentTrain = JSON.stringify(train)
                                      }} />}
                                      />
            <Route path='/seats' 
                   render={props => <SeatsPage 
                                      {...props} 
                                      currentTrain={currentTrain}/>}
                                    />
            <Route path='/payment' component={PaymentPage}/>
            <Route path='/passengers' component={PassengersPage}/>
            <Route path='/' exact component={Homepage}/>
          </Switch>
          <Footer/>
          </ApiServiceContext.Provider>
        </BrowserRouter>
      )

  }

export default App;

