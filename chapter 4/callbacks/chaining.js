function displayMsg(msg, cb) {
	console.log(msg);
	if (msgs.length) {
		process.nextTick(function() {
			cb();
		});
	}
}

function displayMsgs(msgs) {
	var msg = msgs.pop();
	displayMsg(msg, function() {
		displayMsgs(msgs);
	});
}

var msgs = ["Hi", "How are you?", "Goodbye"];
displayMsgs(msgs);