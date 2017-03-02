class Domain {
	constructor(domain) {
		this.domain = domain;

		this.whois = require('whois');
	}

	check() {
		this.whois.lookup(this.domain, (err, data) => {
			if (err) {
				return false;
			} else {
				let isRegistered = data.indexOf('No match for domain') === -1,
					expirationDate;

				if (isRegistered) {
					let expirationDateMathes = /Expiration Date: (.*)/g.exec(data); // Work only for "com"
					if (expirationDateMathes.length > 1) {
						expirationDate = new Date(expirationDateMathes[1]);
					}
				}
				

				console.log(isRegistered, expirationDate);

			}
		});
	}
}
module.exports = Domain;

let domain = new Domain('zhaloba.com');
domain.check();