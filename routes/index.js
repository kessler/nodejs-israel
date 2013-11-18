var fs = require('fs');

var log = fs.createWriteStream('registrations', { flags: 'a' });

var mainPartials = {
	content: 'content'
};

/*
 * GET home page.
 */

exports.index = function(req, res){
	res.setHeader('Content-Type', 'text/xml');
	res.render('index', { partials: mainPartials });
};

exports.content = function(req, res){
	
	res.render('content', 
		{ 
			title: 'Express'
		});
};

exports.register = function(req, res) {	
	log.write(JSON.stringify(req.body) + '\n', function(err) {
		res.render('register');	
	});
};