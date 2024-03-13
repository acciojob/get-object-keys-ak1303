//your JS code here. If required.
let student = {
	name:'Abhishek'
}
Object.prototype.getKeys = function() {
	let arr=[];
	for(let i in this){
		arr.push(i);
	}
}