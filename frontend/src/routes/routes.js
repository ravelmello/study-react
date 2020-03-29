import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Login from '../pages/Login';
import Register from '../pages/Register';
import Profile from '../pages/Profile';
import CreateIncident from '../pages/Incident/Create'

export default function Routes(){
    return(
       <BrowserRouter>
            <Switch>
               <Route path="/" exact component={Login}></Route>  
               <Route path="/register" component={Register}></Route> 
               <Route path="/profile" component={Profile}></Route>  
               <Route path="/incident/new" component={CreateIncident}></Route>        
            </Switch>     
           
       </BrowserRouter>
    );
}