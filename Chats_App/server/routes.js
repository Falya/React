var router = require("express").Router();
var fs = require("fs");
var uuid = require("node-uuid");
var data = require("./data.json");
var msg = require("./msgs.json");


router.post("/login", function(req, res){
	console.log(req.body);
	if(req.body.name == "aaa" && req.body.pwd == 123){
		res.json({status: "ok", token: JSON.stringify(req.body)});
	}
	else {
		res.sendStatus(401);
	}
});

router.get("/api", function(req, res){
	console.log(req.url);
	res.send(data);
});

router.get("/api/:roomId/messages", function(req, res){
	var roomId = req.params.roomId;
	if( msg.messages.findIndex(function(room){
		return room.roomId === roomId
	}) !== -1 ) {
		var roomMessages = msg.messages.filter(function(item){
			return item.roomId === roomId;
		});	
		res.json(roomMessages);
	}
	else {
		res.sendStatus(404);
	}
	
});

router.post("/api/addmessage", function(req, res){
	var newMsgObj = {
		text: req.body.text,
		roomId: req.body.roomId,
		userId: req.body.userId
	};
	var arr = [...msg.messages];
	arr.push(newMsgObj);
	msg.messages = arr;
	fs.writeFile("./msgs.json", JSON.stringify(msg), function(err){
		if(!err){
			res.json(msg.messages);
		}
	});	
	
});

module.exports = router;
