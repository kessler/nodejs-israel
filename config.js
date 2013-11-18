var rc = require('rc');

var defaults = {
	innerPort: 3000,
	outerPort: ''
};

module.exports = rc('nodejs-israel', defaults);