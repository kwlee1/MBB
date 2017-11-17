var mongoose=require('mongoose');
var Answer=mongoose.model("Answer");
module.exports={
	show: function(req, res){
		console.log("at controller")
		console.log(Answer.findById(req))
		Answer.findOne({_id:req}), (function(err, results){
			if(err){
				res.json('error');
			}else{
				res.json(results)
			}
		})
	},
	create: function(req, res){
        console.log(req.body);
		var answer=new Answer(req.body);
		answer.save(function(err){
			if(err){
				res.json(err);
			}else{
				res.json({success: true});
			};
		});
	},
};