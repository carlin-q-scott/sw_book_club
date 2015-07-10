var fs = require('fs');

var immediate = function() {
	console.log("IMMEDIATE")
};

var tick = function() {
	console.log("TICK");
}

var timer = function() {
	console.log("TIMER");
} 


fs.stat('immediate.js', function(err, stats) {
	if (stats) { console.log("immediate.js exists!"); }
});

setTimeout(timer, 0);
setImmediate(immediate);
process.nextTick(tick);
setImmediate(immediate);