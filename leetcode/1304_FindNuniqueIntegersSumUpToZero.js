// Given an integer n, return any array containing n unique integers such that they add up to 0.

// Example 1:
// Input: n = 5
// Output: [-7,-1,1,3,4]
// Explanation: These arrays also are accepted [-5,-1,1,2,3] , [-3,-1,2,-2,4].

// Example 2:
// Input: n = 3
// Output: [-1,0,1]
// Example 3:

// Input: n = 1
// Output: [0]

// Constraints:
// 1 <= n <= 1000

/**
 * @param {number} n
 * @return {number[]}
 */

var sumZero = function (n) {
    var arr = []
    for (let i = 1; i <= n / 2; i++) {
        // var randomNum = Math.floor(Math.random() * 100)
        // arr.push(randomNum, -(randomNum))
        arr.push(i, -i)
    }
    if (n % 2) {
        arr.push(0)
    }
    return arr
};

console.log(sumZero(23))