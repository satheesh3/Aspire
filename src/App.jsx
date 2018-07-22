import React from 'react';
import { Provider } from 'react-redux';
import Register from './components/Register';
import NoMatch from './components/NoMatch';
import Payment from './components/Payment';
import store from './store';

import { BrowserRouter, Switch, Route } from 'react-router-dom';

const App = () => (
    <Provider store={store}>
        <BrowserRouter>
            <Switch>
                <Route exact path='/' component={Register} />
                <Route path='/myloan' component={Payment} />
                <Route component={NoMatch} />
            </Switch>
        </BrowserRouter>
    </Provider >
)

export default App;