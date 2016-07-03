
// Practicing functions; generating a random phone number.


var pickRandomNumber = function (number) {
	return number[Math.floor(Math.random() * number.length)];
}

generateRandomPhoneNumber = function () {
	// Here I'm saying: generateRandomPhoneNumber is a function
	var areaCode = ["341", "637", "123", "736", "555"];
	// You need an area code
	var middleNumbers = ["826", "226", "275", "875", "867", "726"];
	// You need three middle numbers
	var lastNumbers = ["8265", "7962", "7414", "8562", "2657", "9361"];
	// And you need four numbers at the end
	
	var randomString = "(" + pickRandomNumber(areaCode) + ") " +  pickRandomNumber(middleNumbers) + "-" + pickRandomNumber(lastNumbers);
	
	return randomString;
};

generateRandomPhoneNumber();