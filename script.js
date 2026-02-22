//your JS code here. If required.
const student = {
	name : "Richa",
	age : 22,
	city : "Delhi"
}

function getKeys(obj)
{
	return Object.keys(obj)
}

console.log(getKeys(student))