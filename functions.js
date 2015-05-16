/*
 * PROBLEM `checkData`: (easy)
 * Write a function that takes a string and checks to make sure that the string
 * has a length of exactly three. Return true if the string length is three or
 * false if it is not three.
 *
 * If the input is invalid throw an 'Invalid Input' exception.
 */
function checkData(inputString) {
	// your code goes here
	if (typeof inputString !== "string") {
		throw "Invalid Input";
	}
	if (inputString.length === 3) {
		return true;
	}
	else {
		return false;
		}
}

var isLengthThree = checkData("abc");

console.log(isLengthThree);

/*
 * PROBLEM `concatenateArrays`: (easy)
 * Write a function that, given two arrays of integers a and b, returns an array
 * that is formed by the elements of a followed by the elements of b.
 *
 * If the input is invalid throw an 'Invalid Input' exception.
 */
function concatenateArrays(a, b) {

	// your code goes here
	if (typeof a || typeof b === Array && "number") {
		var combo = a.concat(b);
		return combo;		
	}
	else {
		throw "Invalid Input";
	}
}
var array1 = [1,2,3];
var array2 = ["a",5,6];
var testCombo = concatenateArrays(array1, array2);
console.log(testCombo);

/*
 * PROBLEM `fixProperNoun`: (easy)
 * Proper nouns always begin with a capital letter, followed by small letters.
 * Write a function called `fixProperNoun` that takes a potentially improperly
 * capitalized proper noun and returns the same noun with the proper
 * capitalization.
 *
 * If the input is invalid throw an 'Invalid Input' exception.
 */
function fixProperNoun(noun) {
	if (typeof noun !== "string" || noun === "") {
		throw "Invalid Input";
	}
	else {
		var lowercase = noun.toLowerCase();
		var uppercase = lowercase.charAt(0).toUpperCase();
		return uppercase + lowercase.slice(1);
	}
}

var testNoun = fixProperNoun("fOOd");
console.log(testNoun);

/*
 * PROBLEM `sortLetters`: (easy)
 * Write a function called `sortLetters` that returns a string that sorts all 
 * the letters from a given string in the alphabetical order.
 *
 * If the input is invalid throw an 'Invalid Input' exception.
 */
function sortLetters(inputString) {
	if (typeof inputString !== "string") {
		throw "Invalid Input";
	}
	else {
		// var textCase = inputString.toLowerCase();
		var stringArray = inputString.split("");
		var sort = stringArray.sort();
		var rejoin = sort.join("");
		return rejoin;
	}
} 

var testSort = sortLetters("Hope");
console.log(testSort)

/*
 * PROBLEM `absVal`: (easy)
 * Write a function called `absVal` that return the absolute value of a given 
 * integer. Don't use Math.abs(...)
 *
 * If the input is invalid throw an 'Invalid Input' exception.
 */


function absVal(integer) {
	if (isNaN(integer) || integer === null || integer === "" || integer % 1 !== 0) {
		throw "Invalid Input";
	}
	if (integer > 0) {
		return integer;
	}
	else if (integer < 0) {
		return (integer+(integer*(-2)));
	}
	else {
		return 0;
		}
}

var neg = absVal(-45);
console.log(neg);
var pos = absVal(45);
console.log(pos);
var zero = absVal(0);

/*
 * PROBLEM `myMin`: (easy)
 * Write a function called `myMin` that takes two integers and returns the
 * smaller of the two numbers.
 *
 * If the input is invalid throw an 'Invalid Input' exception.
 */

 function myMin(a,b) {
 	if (typeof a !== "number" || typeof b !== "number" || a === NaN || b === NaN || a % 1 !== 0 || b % 1 !==0) {
 		throw "Invalid Input";
 	}
 	if (a > b) {
 		return b;
 	}
 	else {
 		return a;
 	}
 }

 var notEqual = myMin(2,5);
 console.log(notEqual);

/*
 * PROBLEM `myMax`: (easy) - Actual Interview Question
 * Write a function called `myMax` that takes an array of integers ans returns
 * the largest.
 *
 * If the input is invalid throw an 'Invalid Input' exception.
 *
 * Insane mode: do this without using a for loop.
 */

 function myMax(array) {
 	if (Array.isArray(array)) {
 		var largest = Math.max.apply(Math, array);
 		return largest;
 	}
 	else {
 		throw "Invalid Input";
 	}
 }

var max = myMax([1,2,3,4]);
console.log(max);

/*
 * PROBLEM `getMonth`: (easy)
 * Write a function called `getMonth` that maps a given integer to a month.
 *
 * For example:
 * getMonth(1) == 'January'
 * getMonth(3) == 'March'
 * etc.
 *
 * If the input is invalid throw an 'Invalid Input' exception.
 */
function getMonth(month) {
	var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
	if (typeof month !== "number" || month === "" || month % 1 !== 0 || month === null) {
		throw "Invalid Input";
	}
	if (month <=12 && month > 0) {
		return months[month-1];
	}
	else {
		throw "Invalid Input";
	}
}

console.log(getMonth(2));

/*
 * PROBLEM `randomElement`: (medium)
 * Create a function called `randomElement` that takes an array of values and
 * returns one randomly selected value from that array.
 */
 function randomElement(array) {
 	var rnd = Math.floor(Math.random()*array.length);
 	return array[rnd];
 }
var myArray = [1,3,5,8,2,9];
console.log(randomElement(myArray));
/*
 * PROBLEM `studentPairs`: (medium)
 * Create a javascript function called `studentPairs` that takes an array of
 * student names and returns an array of randomly selected pairs of students
 * (array of arrays).
 */

function studentPairs(students) {
	
	var pairs = [];

	do {
		var pair = [];
		
		var rndX = Math.floor(Math.random()*students.length);
		var student1 = students.splice(rndX, 1);

		var rndY = Math.floor(Math.random()*students.length);
		var student2 = students.splice(rndY, 1);
		
		// students.splice(rndX, 1);
		// students.splice(rndY, 1);
		pair.push(student1);
		pair.push(student2);

		pairs.push(pair);

	} while (students.length >= 2);
	
	return pairs;
}


var myStudents = ["Rob", "Tasha", "Atlas", "Dom", "Pat", "Matt", "Ryan", "Jenna"];
console.log(studentPairs(myStudents));


/*
 * PROBLEM `sumSquares`: (medium)
 * Write a function called `sumSquares` that returns the sum of squares of all
 * integers from 1 up to and including a given positive, non-zero integer N.
 *
 * If the input is invalid throw an 'Invalid Input' exception.
 */
function sumSquares(input) {

	if (typeof input !== "number" || input % 1 !==0 || input === "") {
		throw "Invalid Input";
	}
	var sum = 0;

	for (var i = 0; i <= input; i++) {
		var square = (i * i);
		var sum = square + sum;
	}
	return sum;
}

console.log(sumSquares(4));



/* 
 * PROBLEM `findMaxDiff`: (medium)
 * Given an array of integers, write a function called `findMaxDiff` that finds
 * the maximal difference between any two adjacent elements.
 *
 * If the input is invalid throw an 'Invalid Input' exception.
 */

function findMaxDiff(numberArray) {
	
	if (!Array.isArray(numberArray)) {
		throw "Invalid Input";
	}
	var diff = 0;
	var maxDiff = 0;

	for (var i = 0; i <= numberArray.length; i++) {
		// var diff = Math.abs(numberArray.charAt(i) - numberArray.charAt(i + 1));
		var num1 = numberArray[i];
		var num2 = numberArray[i+1];
		var diff = Math.abs(num1 - num2);
		if (diff > maxDiff) {
			maxDiff = diff;
		}
	}
	return maxDiff;
}


console.log(findMaxDiff([1,2,4,5]));




/*
 * PROBLEM `insertDashes`: (medium)
 * Write a function called `insertDashes` that transforms a given sentence into
 * a new one with dashes between each two consecutive letters.
 * For example: insertDashes('abba test') => a-b-b-a t-e-s-t
 *
 * If the input is invalid throw an 'Invalid Input' exception.
 */


function insertDashes(sentence) {

	var dashedSentence = [];
	var splitArray = sentence.split(" ");
	var splitAgain = [];

	for (var i = 0; i < splitArray.length; i++) {

			splitAgain = splitArray[i].split("");
			var merge = splitAgain.join("-");
			dashedSentence.push(merge);
		}

		return dashedSentence.join(" ");
}

console.log(insertDashes("This is a test"));






/* 
 * PROBLEM `mySubstring`mySubstring: (medium)
 * Implement a function called `mySubstring` that can output the substring of 
 * the given string within specified bounds.
 * 
 * For example: mySubstring('abcde', 2, 3) === 'cd'
 * 
 * Don't use String.substring in your solution.
 *
 * If the input is invalid throw an 'Invalid Input' exception.
 */

function mySubstring(string, a, b) {

	if (typeof string !== "string" || typeof a !== "number" || typeof b !== "number" || string === "" || a % 1 !== 0 || b % 1 !== 0 || a === NaN || b === NaN || string === null) {
		throw "Invalid Input";
	}

	var subString = "";

	for (var i = a; i <= b; i++) {
		var sub = string.charAt(i);
		subString = subString + sub;
	}
	return subString;
}
	
console.log(mySubstring("This is a test", 3, 5));




/*
 * PROBLEM `splitSwap`: (medium)
 * Write a function called `splitSwap` that swaps two halves of a given array.
 * If the array has an odd number of elements the array should be split in half
 * by rounding down the number of elements divided by two.
 * 
 * For example: splitSwap([1,2,3,4,5]) === [3,4,5,1,2]
 *
 * If the input is invalid throw an 'Invalid Input' exception.
 */

function splitSwap(array) {

	if (array.length % 2 === 0) {
		var split = array.splice((array.length/2), array.length);
		var swap = split.concat(array);
	}
	else {
		var split = array.splice(Math.floor((array.length/2)), array.length);
		var swap = split.concat(array);
	}

	return swap
}


var myArray = [1,2,3,4,5];

var splitTest = splitSwap(myArray);
console.log(splitTest);




/*
 * PROBLEM `smallMultiples`: (medium)
 * For given n and k write a function called `smallMultiples` that returns the
 * count of the number of multiples of k that are not greater than n.
 *
 * For example smallMultiples(4, 1) === 3 because 1*2, 1*3 and 1*4 are not
 * greater than 4.
 *
 * If the input is invalid throw an 'Invalid Input' exception.
 */

function smallMultiples(a, b) {
	
	var counter = 0;
	for (var i = 2; b * i <= a; i++) {
		var keepTrack = b * i;
		counter = counter + 1;
	}
	return counter;
}

var multTest = smallMultiples(7, 1);
console.log(multTest);




/* 
 * PROBLEM `rot13`: (hard)
 * Create a function called `rot13` that takes an unencrypted string and returns
 * the [ROT-13](http://en.wikipedia.org/wiki/ROT13) version of that string.
 *
 * The input should only contain lower-case alphabetic characters. If the input
 * is invalid throw an 'Invalid Input' exception.
 */

function rot13(string) {
	



	var alphabet = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
	var rot13Array = ["n","o","p","q","r","s","t","u","v","w","x","y","z","a","b","c","d","e","f","g","h","i","j","k","l","m"];


	var rot = [];
	var currentLetter = [];
	var rotLetter = [];
	for (var i = 0; i < string.length; i++) {
		var currentLetter = string.charAt(i)
		for (var n =0; n < alphabet.length; n++) {
			if (alphabet[n] === currentLetter) {
				rotLetter = rot13Array[n];
				rot.push(rotLetter);
			}
			else if (currentLetter === " ") {
				rot.push(" ");
			}
		}
	}

	return rot.join("");
}

var myTest = rot13("hello world how");

console.log(myTest);




/*
 * PROBLEM `derot13`: (hard)
 * Create a function called `derot13` that takes a ROT-13 encrypted string and
 * returns the decrypted version of that string.
 *
 * The input should only contain lower-case alphabetic characters. If the input
 * is invalid throw an 'Invalid Input' exception.
 */

function derot13(string) {
	



	var alphabet = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
	var rot13Array = ["n","o","p","q","r","s","t","u","v","w","x","y","z","a","b","c","d","e","f","g","h","i","j","k","l","m"];



	var DecryptedString = [];
	var currentRot = [];
	var alphaLetter = [];
	for (var i = 0; i < string.length; i++) {
		var currentRot = string.charAt(i)
		for (var n =0; n < rot13Array.length; n++) {
			if (rot13Array[n] === currentRot) {
				alphaLetter = alphabet[n];
				DecryptedString.push(alphaLetter);
			}
			else if (currentRot === " ") {
				DecryptedString.push(" ");
			}
		}
	}

	return DecryptedString.join("");
}

var myTest2 = derot13("uryyb");

console.log(myTest2);


/*
 * PROBLEM `rotn`: (hard)
 * Create a function called `rotn` that takes an unencrypted string and an
 * integer (n) and returns the ROT-N version of that string.
 *
 * The input should only contain lower-case alphabetic characters. If the input
 * is invalid throw an 'Invalid Input' exception.
 */

 function rotn(string, a) {
	



	var alphabet = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
	// var rot13Array = ["n","o","p","q","r","s","t","u","v","w","x","y","z","a","b","c","d","e","f","g","h","i","j","k","l","m"];

	var rot = [];
	var currentLetter = [];
	var rotLetter = [];
	for (var i = 0; i < string.length; i++) {
		var currentLetter = string.charAt(i);
		for (var n = 0; n < alphabet.length; n++) {
			if (currentLetter === alphabet[n]) {
				rotLetter = alphabet[n + a];
				rot.push(rotLetter);
			}
		}
	}

	return rot.join("");
}

var myTest2 = rotn("hello", 3);

console.log(myTest2);

/*
 * PROBLEM `findBoth`: (hard)
 * Write a function called `findBoth` that takes two arrays of integers a and b 
 * returns an array that includes only the elements that appear in both a and b.
 * A value should not appear more than once in the returned array.
 *
 * If the input is invalid throw an 'Invalid Input' exception.
 */

function findBoth(arr1, arr2) {
	common = [];
	arr1.sort();
	arr2.sort();

	for (var i = 0; i < arr1.length; i++) {
		for (var j = 0; j < arr2.length; j++) {
			if (arr1[i] === arr2[j]) {
				common.push(arr1[i]);
			}
		}
	}
	return common;

}

var array1 = [1,2,3,4,5];
var array2 = [2,4,7,8,9];
var same = findBoth(array1, array2);
console.log(same);
 

/*
 * PROBLEM `countBoth`: (hard)
 * Write a function called `countBoth` that takes two arrays of integers a and 
 * b. The function should return the number of elements that exist in both a and
 * b.
 *
 * If the input is invalid throw an 'Invalid Input' exception.
 */

/* 
 * PROBLEM `isDiagonalMatrix`: (hard)
 * In linear algebra, a square matrix (array of arrays) is called a diagonal 
 * matrix if all entries outside the main diagonal are zero (the diagonal from 
 * the upper left to the lower right).
 * For example:
 * [
 *   [1, 0, 0],
 *   [0, 2, 0],
 *   [0, 0, 3]
 * ]
 * is a diagonal matrix.
 *
 * [
 *   [1, 0, 2],
 *   [0, 2, 0],
 *   [0, 0, 3]
 * ]
 * is not a diagonal matrix.
 *
 * [
 *   [1, 0, 0],
 *   [0, 2, 0]
 * ]
 * is not a diagonal matrix.
 *
 * Write a function called `isDiagonalMatrix` that takes a matrix and returns
 * true if the matrix is a diagonal matrix. Otherwise return false.
 *
 * If the input is invalid throw an 'Invalid Input' exception.
 */

/*
 * PROBLEM `isAnagram`: (hard) - Actual Interview Question
 * An anagram is a type of word play, the result of rearranging the letters of a
 * word or phrase to produce a new word or phrase, using all the original
 * letters exactly once.
 *
 * Write a function called `isAnagram` that takes two arrays of strings of equal 
 * lengths arr1 and arr2. The function should return a new array of the same 
 * length as the input with boolean values at each position i. The boolean value
 * at position i of the result array should be true if the strings at position i
 * in arr1 and arr2 are anagrams of each other. Otherwise the boolean at
 * position i of the result array should be false.
 *
 * For example:
 * isAnagram(
 * 		['cinema', 'shot', 'aba', 'rain'],
 * 		['iceman', 'hots', 'bab', 'train']
 * ) === [true, true, false, false];
 *
 * If the input is invalid throw an 'Invalid Input' exception.
 */

/*
 * PROBLEM `validateParentheses`: (hard) - Actual Interview Question
 * Write a function called `validateParentheses` that takes a string of
 * parentheses. The string can contain the following characters repeated any
 * number of times in any order: ()[]{}
 *
 * The function should return true if the parentheses are in a valid order and
 * false if they are not. One type of parentheses cannot close before it has
 * been opened and one type of parentheses cannot be closed while a different
 * type of parentheses is open. All parentheses that are opened must also be
 * closed.
 *
 * For example:
 * validateParentheses(']') === false;
 * validateParentheses('[') === false;
 * validateParentheses('[]') === true;
 * validateParentheses('{[]}') === true;
 * validateParentheses('([)]') === false;
 * validateParentheses('{[(){()}]}') === true;
 *
 * If the input is invalid throw an 'Invalid Input' exception.
 */

/* 
 * PROBLEM `flattenArray`: (hard) - Actual Interview Question
 * Write a function called flattenArray that takes an array of any type of
 * element, and flattens it, such that any element in the given array that is an
 * array is converted to a list of non-arrays. For example:
 *
 * flattenArray([1, {a: [2, 3]}, 4, [5, [6]], [[7], 8, 9], 10])
 * === [1, {a: [2, 3]}, 4, 5, 6, 7, 8, 9, 10]
 *
 * If the input is invalid throw an 'Invalid Input' exception.
 *
 * Insane mode: do this without recursion.
 */



