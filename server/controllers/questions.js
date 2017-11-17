var mongoose=require('mongoose');
var Question=mongoose.model("Question");
module.exports={
	all: function(req, res){
		Question.find({}, function(err, questions){
			if(err){
				res.json(err);
			}else{
				res.json(questions);
			};
		});
	},
	create: function(req, res){
        console.log(req.body);
		var question=new Question(req.body);
		question.save(function(err){
			if(err){
				res.json(err);
			}else{
				res.json({success: true});
			};
		});
	},
};