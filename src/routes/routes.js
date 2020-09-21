import React from "react"
import {Switch, Route, Redirect} from "react-router-dom"
import {Main} from "../pages/homePage"
import {LocationPage} from "../pages/locationPage";
import {ForecastPage} from "../pages/forecastPage"
import {CurrentPage} from "../pages/currentPage";

export const Routes = () => {



        return (
            <Switch>
                <Route path="/location" exact>
                    <LocationPage />
                </Route>
                <Route path="/forecast/:id?">
                    <ForecastPage />
                </Route>
                <Route path="/current/:id?">
                    <CurrentPage />
                </Route>
                <Route path="/v1" exact>
                    <Main />
                </Route>
                <Redirect to="/v1" />
            </Switch>
        )

}