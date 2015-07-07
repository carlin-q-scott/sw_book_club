var immediate = function() {
	console.log("IMMEDIATE")
};

var tick = function() {
	console.log("TICK");
}

var timer = function() {
	console.log("TIMER");
} 

setTimeout(timer, 5);
setImmediate(immediate);
process.nextTick(tick);
setImmediate(immediate);