import React, { Component } from 'react';

import { HashRouter as Router, Route } from 'react-router-dom';
// import createBrowserHistory from "history/createBrowserHistory";

import postArgument from './gragpql-front/postArgument';
import postObject from './gragpql-front/postObject';
import postMutation from './gragpql-front/postMutation';
import GraphQLSchema from './gragpql-front/GraphQLSchema';
import ConnectMysql from './gragpql-front/ConnectMysql';

import { createBrowserHistory } from 'history'

// const browserHistory = require("history");
// const createBrowserHistory = browserHistory.createBrowserHistory

const customHistory = createBrowserHistory();

class Main extends Component {
    render() {
        return (
            <Router history={customHistory}>
                <Route exact path="/postArgument" component={postArgument} />
                <Route path="/postObject" component={postObject} />
                <Route path="/postMutation" component={postMutation} />
                <Route path="/GraphQLSchema" component={GraphQLSchema} />
                <Route path="/ConnectMysql" component={ConnectMysql} />
            </Router>
        );
    }
}
export default Main;

