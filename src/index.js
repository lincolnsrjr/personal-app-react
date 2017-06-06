import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Site from './site/components/Site';
import Login from './login/components/Login';

ReactDOM.render((
    <Router>
        <Switch>
            <Route exact path="/" component={Site} onEnter={(nextState, replace) => alert('teste')}/>            
            <Route path="/login" component={Login} />            
        </Switch>
    </Router>

), document.getElementById('root'));

registerServiceWorker();
