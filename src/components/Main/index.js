import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Series from '../../containers/Series'
import SingleSeries from '../../containers/SingleSeries'

const Main = props => (
  <Switch>
    <Route exact path="/tv-series-app-react" component={ Series } />
    <Route path="/tv-series-app-react/series/:id" component={ SingleSeries } />
  </Switch>
)

export default Main