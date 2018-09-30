// PLEASE DON'T change function name
module.exports = function makeExchange(currency) {
let error = {error: "You are rich, my friend! We don't have so much coins for exchange"};
let empty = {};
if (currency > 10000) {
	return (error);
} else if (currency === 0) {
	return (empty);
}
let exchange = {};
let obj = (currency - (currency % 50))/50;
debugger;
if (obj > 0) {
	exchange.H = obj;	
}
let rest = currency - (obj*50);
obj = (rest - (rest % 25))/25;
if (obj > 0) {
	exchange.Q = obj;	
}
rest = rest - (obj*25);
obj = (rest - (rest % 10))/10;
if (obj > 0) {
	exchange.D = obj;	
}
rest = rest - (obj*10);
obj = (rest - (rest % 5))/5;
if (obj > 0) {
	exchange.N = obj;	
}
rest = rest - (obj*5);
obj = (rest - (rest % 1))/1;
if (obj > 0) {
	exchange.P = obj;	
}
return exchange;
}
