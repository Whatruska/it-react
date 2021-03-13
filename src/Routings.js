import React from "react";
import { BrowserRouter, Router, Route, Switch } from 'react-router-dom';
import App from './App';
import { AgeScreen } from './pages/AgeScreen';
import { HeightAndWeightScreen } from './pages/HeightAndWeightScreen';
import { HelloScreen } from './pages/HelloScreen';
import { NavigationBar } from './NavigationBar';
import createBrowserHistory from 'history/createBrowserHistory';
const history = createBrowserHistory();
export const Routings = () => {
    return (
        <Router history={history}>
            <Switch>
                <Route path="/" exact>
                    <HelloScreen/>
                </Route>
                <Route path="/age">
                    <AgeScreen/>
                </Route>
                <Route path="/weight">
                    <HeightAndWeightScreen/>
                </Route>
                <Route path="/height">
                    <HeightAndWeightScreen/>
                </Route>
                <Route path="/app">
                    <App/>
                </Route>
                <Route>
                    <HelloScreen/>
                </Route>
            </Switch>
            <NavigationBar/>
        </Router>
    )
}