// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False


// Solution 1
// function anagrams(stringA, stringB) {
//
//   let aCharMap = buildCharMap(stringA);
//   let bCharMap = buildCharMap(stringB);
//
// // Use Object.keys() to get all the keys of the object and calculate the length
//   if (Object.keys(aCharMap).length !== Object.keys(bCharMap).length) {
//     return false;
//   }
//
//   for(let char in aCharMap) {
//     if(aCharMap[char] !== bCharMap[char]) {
//       return false;
//     }
//   }
//
//   return true;
// }
//
// function buildCharMap(str) {
//   const charMap = {};
//
//   // Make use of regex expression to eliminate punctuations and white spaces
//   for (let char of str.replace(/[^\w]/g,"").toLowerCase()) {
//       charMap[char] = charMap[char] + 1 || 1 ;
//   }
//
//   return charMap;
// }

// Solution2
function anagrams(stringA, stringB) {
  return cleanStr(stringA) === cleanStr(stringB);
};

function cleanStr(str) {
  return str.replace(/[^\w]/g, '').split('').sort().join('');
}

module.exports = anagrams;
