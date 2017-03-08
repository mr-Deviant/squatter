import core from '../js/core';

const initialState = {
	add: {
		added: [],
		duplicates: [],
		errors: [],
		fetching: false
	},
	avialable: [{id: 123, name: 'aviable.com'}, {id: 1234, name: 'aviable2.com'}],
	occupied: [{id: 234, name: 'occupied.com'}],
	notChecked: [{id: 345, name: 'not-checked.com'}]
}

export default function reducer (state = initialState, action) {
	switch (action.type) {
		case 'ADD_DOMAINS_REQUEST':
			return {...state, add: {...state.add, fetching: true}}; // Change only 1 add property
		case 'ADD_DOMAINS_SUCCESS':
			return {...state, add: {...action.payload, fetching: false}}; // Change all add properties
		default:
			return state;
	}
}

/*export default combineReducers({
	reducer, ...
})*/
