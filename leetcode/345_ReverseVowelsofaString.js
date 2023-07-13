// Given a string s, reverse only all the vowels in the string and return it.

// The vowels are 'a', 'e', 'i', 'o', and 'u', and they can appear in both lower and upper cases, more than once.


// Example 1:
// Input: s = "hello"
// Output: "holle"

// Example 2:
// Input: s = "leetcode"
// Output: "leotcede"

// Constraints:
// 1 <= s.length <= 3 * 105
// s consist of printable ASCII characters.

/**
 * @param {string} s
 * @return {string}
 */


//indexOf - JS method to get index of array element. 
// Returns -1 if not found

var reverseVowels = function (s) {
    let left = 0
    let right = s.length - 1
    let arr = s.split("")
    let vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', "I", 'O', 'U']

    while (left < right) {
        // Check if both characters at the left and right pointers are vowels
        if (vowels.indexOf(arr[left]) !== -1 && vowels.indexOf(arr[right]) !== -1) {
            // Swap the vowels by destructuring assignment
            [arr[left], arr[right]] = [arr[right], arr[left]]
            // Move the pointers inward
            ++left;
            --right;
        }

        // Check if the character at the left pointer is not a vowel
        if (vowels.indexOf(arr[left]) == -1) {
            // Move the left pointer to the right
            ++left;
        }

        // Check if the character at the right pointer is not a vowel
        if (vowels.indexOf(arr[right]) === -1) {
            // Move the right pointer to the left
            --right;
        }
    }
    return arr.join("")

};
console.log(reverseVowels("hello"))
console.log(reverseVowels("leetcode"))
console.log(reverseVowels("cow girl"))