import core from '../js/core';

// TODO: use constants

export function addDomainsRequest(data) {
	return (dispatch) => {
		dispatch({
			type: 'ADD_DOMAINS_REQUEST',
			payload: data
		});

		// TODO: move functions into separate file
		fetch('/domain/', {
			method: 'POST',
			headers: {
				'Accept': 'application/json',
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(data)
		}).then(function (response) {
			return response.json(); // TODO: check response.ok
		}).then(function (data) {
			dispatch({
				type: 'ADD_DOMAINS_SUCCESS',
				payload: data
			});
		});
	}
};
