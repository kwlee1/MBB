var mongoose=require('mongoose');
var Schema = mongoose.Schema; 
var AnswerSchema=new mongoose.Schema({
    _question: {type: Schema.Types.ObjectId, ref: 'Question'},
    text: { type: String, required: true },
    details: {type: String},
    likes: {type: Number}
}, {timestamps: true});
mongoose.model("Answer", AnswerSchema);