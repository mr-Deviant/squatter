module.exports = {
	addDomains: function (store, data) {
		store.dispatch({
			type: 'ADD_DOMAINS',
			payload: data
		});
	}
};