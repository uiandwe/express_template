
/*
 * GET home page.
 */
var db = require('mongojs').connect('member', ['info']); 


exports.index = function(req, res){
  db.info.count(
	{},function(error,result){
		if(!error)
			console.log("count succeed!");
		console.log(result);
		 res.render('index', { title: 'Express' , name:'uiandwe', count:result});
		db.close();
	});
 
};
