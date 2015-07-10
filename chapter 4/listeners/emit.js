var events = require('events');

function Chatter(userName) {
	this.userName = userName;
	this.messages = "";
	events.EventEmitter.call(this);

	//whenever the send is called it will emit a "sendMsg"
	this.send = function(msg) {
		this.message = msg;

		this.emit('sendMsg');
	}
}
Chatter.prototype.__proto__ = events.EventEmitter.prototype;

//------------------------------------------------------------------
//this is the callback used for the "on"
function displayMsgs() {
	console.log(this.userName + ": " + this.message);

	this.message = "";
}

function firstMsg() {
	console.log("-----------------------------");
	console.log("A NEW MESSAGE!");
	console.log("-----------------------------");
}
//---------------------------------------------------------------------

//create a new instance of Chatter with the chat name
var chat = new Chatter("Justin");
chat.once("sendMsg", firstMsg); //this will get called the first time
chat.on("sendMsg", displayMsgs); //this gets called every time

chat.send("Hello");
chat.send("I'm here!");