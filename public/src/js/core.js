module.exports = {
	addDomains: function (state, payload) {
		fetch('/domain/', {
			method: 'POST',
			headers: {
				'Accept': 'application/json',
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(payload)
		}).then(function(response) {
			
		});
		return state;
	}
};
