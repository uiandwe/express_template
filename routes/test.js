

exports.get = function(req, res){
	console.log(req.param("id"));
	res.render('test');
};

var db = require('mongojs').connect('member', ['info']); 



exports.post = function(req, res){
	db.info.insert(
		req.body,function(error,result){
			if(!error)
				console.log("insert succeed!");
			console.log(req.body);
			db.close();
			res.render('test');
	});
	
};
