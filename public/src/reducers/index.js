import core from '../js/core';

const initialState = {
	avialable: [],
	occupied: [],
	notChecked: []
}

export default function reducer (state = initialState, action) {
	switch (action.type) {
		case 'ADD_DOMAINS':
			return core.addDomains(state, action.payload);
		default:
			return state;
	}
}
