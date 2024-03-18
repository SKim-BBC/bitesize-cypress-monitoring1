function randomValueFromArray (array) {
	const value = array[Math.floor(Math.random() * array.length)];

	return value;
}

module.exports = {
	randomValueFromArray
};