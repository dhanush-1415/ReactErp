/* eslint-disable react/prop-types */
import React from 'react'
import { Redirect, Route, Switch } from 'react-router-dom';
// import Chat from './chat'
// import Calendar from './calendar'
import Email from './email'
import Invoice from './invoice';
import Receipt from './receipt';
import CreateInvoice from './createInvoice';



const AppIndex = ({ match}) =>(
    <Switch>
        <Redirect exact from={`${match.url}/`} to={`${match.url}/tables-basic`} />
        {/* <Route path={`${match.url}/chat`} component={Chat} /> */}
        <Route path={`${match.url}/invoice`} component={Invoice} />
        {/* <Route path={`${match.url}/calendar`} component={Calendar} /> */}
        <Route path={`${match.url}/receipt`} component={Receipt} />
        <Route path={`${match.url}/email`} component={Email} />
        <Route path={`${match.url}/create_invoice`} component={CreateInvoice} />

    </Switch>
)

export default AppIndex