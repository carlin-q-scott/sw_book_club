var cb = function(time) {
	console.timeEnd(time);
};

console.time("five");
setTimeout(cb,5000,"five");

console.time("two");
setTimeout(cb,2000,"two");

console.time("one");
setTimeout(cb,1000,"one");