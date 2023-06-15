// The power of the string is the maximum length of a non-empty substring that contains only one unique character.

// Given a string s, return the power of s.

// Example 1:
// Input: s = "leetcode"
// Output: 2
// Explanation: The substring "ee" is of length 2 with the character 'e' only.

// Example 2:
// Input: s = "abbcccddddeeeeedcba"
// Output: 5
// Explanation: The substring "eeeee" is of length 5 with the character 'e' only.

// Constraints:
// 1 <= s.length <= 500
// s consists of only lowercase English letters.

/**
 * @param {string} s
 * @return {number}
 */


var maxPower = function (s) {
    var arr = s.split("")
    var counter = 0
    var max = 0

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === arr[i + 1]) {
            counter++
        } else {
            counter++
            if (max < counter) {
                max = counter
            }
            counter = 0
        }
    }
    return max
};

console.log(maxPower("leetcode"))
console.log(maxPower("abbcccddddeeeeedcba"))
console.log(maxPower("yayeeeeeeeeeeeeeeeeeeet"))