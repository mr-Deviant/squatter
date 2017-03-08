import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reducer from '../reducers/index.js';

// createStore - creates store to represent application state tree
// applyMiddleware - enhance Redux with middleware
// thunk - allows to do asynchronous dispatches
const createStoreWithMiddleware = applyMiddleware(thunk)(createStore);

export default function configureStore(initialState) {
	// Create store
	const store = createStoreWithMiddleware(reducer, initialState);

	// if (module.hot) ...
	
	return store;
}
