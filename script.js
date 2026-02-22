//your JS code here. If required.
const student = {
	name : "Richa",
	age : 22,
	city : "Delhi"
}

function getKeys(student)
{
	return Object.keys(student)
}

console.log(getKeys(student))