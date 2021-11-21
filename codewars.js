// Reverse Words Kata

function reverseWords(str) {
	
	let wordsArr;
	let result = "";

	if(str.includes("  ")) {
		wordsArr = str.split("  ");
		for(let word of wordsArr) {
			let reverseWord = word.split("").reverse().join("");
			console.log(word);
	
			result += reverseWord + "  ";
			
		}
	} else {
		wordsArr = str.split(" ");
		for(let word of wordsArr) {
			let reverseWord = word.split("").reverse().join("");
			console.log(word);
	
			result += reverseWord + " ";
			
		}
	}

	

	

	return result;
}
  
console.log(reverseWords("This is an example!"));
console.log(reverseWords("double  spaces"));




// function reverseWords(str) {
// 	let wordsArr = str.split(" ");

// 	let result = "";

// 	for(let word of wordsArr) {
// 		let reverseWord = word.split("").reverse().join("");
		
// 		result += reverseWord + " ";
// 	}
	
// 	return result;
// }
  
// console.log(reverseWords("This is an example!"));
// console.log(reverseWords("double  spaces"));
// console.log(reverseWords("ehT kciuq nworb xof spmuj revo eht yzal .god ' to equal 'ehT kciuq nworb xof spmuj revo eht yzal .god"));