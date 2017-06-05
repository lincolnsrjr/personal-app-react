import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Site from './site/components/Site';

ReactDOM.render((
    <Router>
        <Switch>
            <Route exact path="/" component={Site}/>            
        </Switch>
    </Router>

), document.getElementById('root'));

registerServiceWorker();
