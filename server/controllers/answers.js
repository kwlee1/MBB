var mongoose=require('mongoose');
var Answer=mongoose.model("Answer");
var Question=mongoose.model("Question");
module.exports={
	show: function(req, res){
		console.log("at controller")
		Question.findOne({_id:req.params.id}).populate('answers').exec(function(err, results){
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