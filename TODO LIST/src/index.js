import React from 'react';
import ReactDOM from 'react-dom';

import { createStore } from 'redux';
import { Provider } from 'react-redux';

import App from 'components/App';
import rootReducer from './store/reducers';

const store = createStore(rootReducer);

// подключает redux к react
ReactDOM.render(
    <Provider store={store}> 
            <App />
    </Provider>,
    document.getElementById('app')
)