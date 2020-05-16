import { createStore, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';
import reducers from './reducer';
import thunk from 'redux-thunk'

const logger = createLogger();

export function configureStore(initialState) {

    const middlewares = [logger,thunk];

    const store = createStore(
        reducers,
        initialState,
        applyMiddleware(...middlewares)
    );

    return store;
}
