import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import DetailPage from '../pages/DetailPage/DetailPage'
import HomePage from '../pages/HomePage/HomePage'
import ErrorPage from '../pages/ErrorPage/ErrorPage'
import EpisodesPage from '../pages/EpisodesPage/EpisodesPage'

const Router = () => {

    return (

        <BrowserRouter>
            <Switch>

                <Route exact path="/">
                    <HomePage />
                </Route>

                <Route exact path="/detail/:id">
                    <DetailPage />
                </Route>

                <Route exact path="/episode/:id">
                    <EpisodesPage />
                </Route>

                <Route>
                    <ErrorPage />
                </Route>

            </Switch>
        </BrowserRouter>
    )
}

export default Router