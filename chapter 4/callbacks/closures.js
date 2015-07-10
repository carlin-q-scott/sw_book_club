function displayMsgs(msg, cb) {
	process.nextTick(function() {
		cb(msg);
	});
}

var msgs = ["Hi", "How are you?", "Goodbye"];

for (i in msgs) {
	var msg = msgs[i];
	displayMsgs(msg, function() {
		console.log(msg);
	});
}

for (i in msgs) {
	var msg = msgs[i];
	(function(m) {
		displayMsgs(m, function() {
			console.log(m);
		});
	})(msg);
}
