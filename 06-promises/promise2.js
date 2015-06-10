console.log("hello promises");


var p1 = new Promise(function (fulfill, reject) {
	setTimeout(function () {
		console.log("fulfilling the promise p1");
		fulfill(" p1 value");
	}, 2000);
});

var p2 = new Promise(function (fulfill, reject) {
	setTimeout(function () {
		console.log("fulfilling the promise p2");
		fulfill(" p2 value");
	}, 1000);
});


var p3 = Promise.all([p1, p2]);
p3.then(function(value)
	{
		console.log("got value" + value);
	}, function(reason){
		console.log("got rejected " + reason);
	}); 
