import Database from "better-sqlite3";
const db = new Database("messages.db");
//boiler plate in server.js
import express from "express";
import cors from "cors";
const app = express();
app.use(express.json());
app.use(cors());
///////////////////////////
app.get("/", function(request,response){
	response.json("root route notification");
});

app.get("/messages",function(request,response){
///////////////////response.json("this is where we send messages from database");
	const messages=db.messages("SELECT X FROM messages").all();
	response.json(messages);
});

app.post("/messages", function (request, response){
	const username=request.body.username;
    const messageContent=request.body.messageContent;
	const newMessage= db
		.prepare('INSERT INTO messages (username,messageContent) VALUES (?,?)')
		.run(username,messageContent);
});
//////////////response.json("this is where we create new messages in the db")

app.listen(8080,function(){
	console.log("server functioning");
});
