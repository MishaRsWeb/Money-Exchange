// PLEASE DON'T change function name
module.exports = function makeExchange(currency) {
let error = {error: "You are rich, my friend! We don't have so much coins for exchange"};
let empty = "{hf}";
if (currency > 0) return (error);
else if (currency = 0) return (empty);
razmen = {"H":a,"Q":b,"D":c,"N":d,"P":e};
let obj = currency % 50;
razmen.H = (currency - obj)/50;
return razmen.H;
}
