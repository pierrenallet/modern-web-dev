console.log("hello promises");

var promiseFunction = function (fulfill, reject) {
	setTimeout(function () {
		console.log("fulfilling the promise");
		fulfill("some value");
	}, 1000);
};
var p = new Promise(promiseFunction);
p.then(
	function (value) {
		console.log("got the value " + value);
	},
	function (reason) {
		console.log("got rejected reason = " + reason);
	}
	);
	
var p2 = p.then(function(value){
		return new Promise(function(fulfill, reject)
			{
				setTimeout(function() {
					console.log("fulfilling p2");
					fulfill( value + 2);	
				}, 1000);
			});
	});
	
var p3 = p.then(function(value){
	console.log("rejecting in p3");
	throw new Error("error from p3");
	//return value + 3;
	});
	
var p4 = p.then(null, function(reason)
	{
		throw reason;
		return "got some error but I am OK";	
	})	;
p4.then(function(value){
	console.log("Yes: promise fulfilled: " + value);
},
function(reason)
{
	console.log('got problem ' + reason);
});
	
p3.then(function(value){
		console.log("got value from p3 " + value);
	}, function(reason){
		console.log("got rejected in p3" + reason);
	})	
	;	
p2.then(function(value)
	{
		console.log("got value from p2 " + value);
	})	;

