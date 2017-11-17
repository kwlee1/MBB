var mongoose=require('mongoose');
var Schema = mongoose.Schema; 
var QuestionSchema=new mongoose.Schema({
	content: {type: String, required: [true, "Question is required"], minlength: [10, "Question must be at least 10 characters"]},
    description: {type: String},
    answers: [{type: Schema.Types.ObjectId, ref: 'Answer'}]
}, {timestamps: true});
mongoose.model("Question", QuestionSchema);