// Given an integer x, return true if x is palindrome integer.

// An integer is a palindrome when it reads the same backward as forward.

// For example, 121 is a palindrome while 123 is not.


// Example 1:

// Input: x = 121
// Output: true
// Explanation: 121 reads as 121 from left to right and from right to left.


var isPalindrome = function (x) {
    var xString = x.toString();
    var reverse = xString.split('').reverse().join('')

    if (x == reverse) {
        return true
    }
    return false
};

/////////////////////////////////////////////////////////////////////////////////////////////////////

var isPalindrome = function (x) {
    const xString = x.toString();
    // find the length of the string
    const len = xString.length;
    
    // loop through half of the string
    for (let i = 0; i < len / 2; i++) {
        // check each position
        // between the first and the last character
        if (xString[i] !== xString[len - 1 - i]) {
            return false;
        } 
    }
    return true;
}

console.log(isPalindrome(121))
console.log(isPalindrome(1000021))
