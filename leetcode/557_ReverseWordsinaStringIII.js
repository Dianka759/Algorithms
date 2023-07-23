// Given a string s, reverse the order of characters in each word within a sentence while still preserving whitespace and initial word order.

// Example 1:
// Input: s = "Let's take LeetCode contest"
// Output: "s'teL ekat edoCteeL tsetnoc"

// Example 2:
// Input: s = "God Ding"
// Output: "doG gniD"

// Constraints:
// 1 <= s.length <= 5 * 104
// s contains printable ASCII characters.
// s does not contain any leading or trailing spaces.
// There is at least one word in s.
// All the words in s are separated by a single space.

/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function (s) {
    let arr = s.split(' ')
    // console.log(arr)

    for (let i = 0; i <= arr.length - 1; i++) {
        let chars = arr[i].split('')
        // console.log(chars)
        let start = 0
        let end = chars.length - 1
        while (start <= end) {
            let temp = chars[start]
            chars[start++] = chars[end]
            chars[end--] = temp
        }
        arr[i] = chars.join('')
    }
    return arr.join(' ')
};
console.log(reverseWords("Let's take LeetCode contest"))