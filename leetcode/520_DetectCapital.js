// We define the usage of capitals in a word to be right when one of the following cases holds:

// All letters in this word are capitals, like "USA".
// All letters in this word are not capitals, like "leetcode".
// Only the first letter in this word is capital, like "Google".
// Given a string word, return true if the usage of capitals in it is right.

// Example 1:
// Input: word = "USA"
// Output: true

// Example 2:
// Input: word = "FlaG"
// Output: false

// Constraints:
// 1 <= word.length <= 100
// word consists of lowercase and uppercase English letters.

/**
 * @param {string} word
 * @return {boolean}
 */


const regexUppercase = /^[A-Z]+$/;
const regexLowercase = /^[a-z]+$/;

var detectCapitalUse = function (word) {
    // if (word == word.toLowerCase() || word == word.toUpperCase()) {
    //     return true;
    // } 

    // for(let i = 1; i < word.length; i++) {
    //     if (!(word[i] == word[i].toLowerCase())){
    //         return false
    //     } 
    // }
    // return true

    if (regexUppercase.test(word) || regexLowercase.test(word)) return true;
    let output = false;

    for (let i = 0 ;i < word.length; i++) {
        if (regexUppercase.test(word[i]) && !i) output = true;
        if (regexUppercase.test(word[i]) && i) output = false;
    }
    return output;
};

console.log(detectCapitalUse("USA"))
console.log(detectCapitalUse("FlaG"))
console.log(detectCapitalUse("Flag"))