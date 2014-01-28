var sentence = "The Quick Brown Fox Is In The Zoo";

var firstReverse = function (item) {
    var newStr = item.split("").reverse().join("");
    return newStr;
};

var swapCase = function (item) {
    var newArr = item.split("");

    for (var i = 0; i < newArr.length; i++) {
        if (newArr[i] === newArr[i].toUpperCase()) {
            newArr[i] = newArr[i].toLowerCase();
        } else {
            newArr[i] = newArr[i].toUpperCase();
        }
    };

    var item = newArr.join("");
    return item;
};



var letters = function (item) {
	var letters = {};

	for (var i = 0; i < item.length; i++) {
		var l = item.charAt(i);
		letters[l] = (isNaN(letters[l]) ? 1 : letters[l] + 1);
	};
	return letters;
};

var wordletters = function(item) {
	var words = item.split(" ");
	var countArr = [];
	for (var i = 0; i < words.length; i++) {
		var word = letters(words[i]);
		countArr.push(word)
	};
	var index = indexWord(countArr);
	console.log(countArr);
	return words[index];
};

var indexWord = function (arr) {
	countMax = [];

	for (var i = 0; i < arr.length; i++) {
		var maxNum = 0;
		for (key in arr[i]) {
			if (arr[i][key] > maxNum) {
				maxNum = arr[i][key];
			};
		};
		countMax.push(maxNum);
	};
	console.log(countMax);

	var maxInd = 0;
	var max = 0;

	for (var i = 0; i < countMax.length; i++) {
		if (countMax[i] > max) {
			max = countMax[i];
			maxInd = i;
		};
	}

	console.log(maxInd);
	return maxInd;
};



