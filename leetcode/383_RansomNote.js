// Given two strings ransomNote and magazine, return true if ransomNote can be constructed by using the letters from magazine and false otherwise.

// Each letter in magazine can only be used once in ransomNote.

// Example 1:
// Input: ransomNote = "a", magazine = "b"
// Output: false

// Example 2:
// Input: ransomNote = "aa", magazine = "ab"
// Output: false

// Example 3:
// Input: ransomNote = "aa", magazine = "aab"
// Output: true

// Constraints:
// 1 <= ransomNote.length, magazine.length <= 105
// ransomNote and magazine consist of lowercase English letters.

/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */

var canConstruct = function (ransomNote, magazine) {
    ransomNote = ransomNote.split('').sort().join('')
    magazine = magazine.split('').sort().join('')
    // edge case 
    if (ransomNote.length > magazine.length) {
        return false
    }

    let subsequence = 0;
    for (let i = 0; i < magazine.length; i++) {
        if (ransomNote[subsequence] === magazine[i]) {
            // ! if it is matching, increment subsequence
            subsequence++;
        }
    }
    if (subsequence === ransomNote.length) {
        return true
    } else {
        return false
    }
};
console.log(canConstruct("a", "b"))
console.log(canConstruct("aa", "ab"))
console.log(canConstruct("aa", "aab"))
console.log(canConstruct("aab", "baa"))