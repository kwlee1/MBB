const path = require('path');
const question = require('../controllers/questions.js')
const answer = require('../controllers/answers.js')

// routing exports a function that takes app
module.exports = function(app){
	app.get("/all", function(req, res){
		question.all(req, res);
	});
	app.post("/newquestions", function(req, res){
		question.create(req, res);
	});
	app.get("/show", function(req, res){
		console.log("at routes", req);
		answer.show(req, res);
	});
	app.post("/newans", function(req, res){
		answer.create(req, res);
	});
	// app.put("/players/:id", function(req, res, ){
	// 	player.update(req, res);
	// });
	// app.delete("/players/:id", function(req, res){
	// 	player.destroy(req, res);
	// });

    // catch all to serve the index
    // make sure your file path matches the name of your angular app folder
    app.all("*", (req, res, next) => {
        res.sendFile(path.resolve("./public/dist/index.html"))
    });
};