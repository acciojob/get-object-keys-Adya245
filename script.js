//your JS code here. If required.
const student = {
	name : "Richa",
	age : 22,
	city : "Delhi"
}

function getKeys(student)
{
	let keys = Object.keys(student)
	return keys
}

console.log(getKeys(student))