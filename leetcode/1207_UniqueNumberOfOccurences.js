// Given an array of integers arr, return true if the number of occurrences of each value in the array is unique or false otherwise.

// Example 1:
// Input: arr = [1,2,2,1,1,3]
// Output: true
// Explanation: The value 1 has 3 occurrences, 2 has 2 and 3 has 1. No two values have the same number of occurrences.

// Example 2:
// Input: arr = [1,2]
// Output: false

// Example 3:
// Input: arr = [-3,0,1,-3,1,1,1,-3,10,0]
// Output: true

// Constraints:
// 1 <= arr.length <= 1000
// -1000 <= arr[i] <= 1000

/**
 * @param {number[]} arr
 * @return {boolean}
 */


var uniqueOccurrences = function (arr) {
    var count = {}                          //creating an empty object key:value

    for (let i = 0; i < arr.length; i++) {  //looping thru the array to check for duplicates
        if (count[arr[i]]) {                //does this exist inside our object
            count[arr[i]]++                 //if yes, add one to it
        } else {
            count[arr[i]] = 1               //if it doesn't exist, set to one
        }
    }

    const countValues = Object.values(count)   //shows the values of the keys inside the object as an array

    for (let i = 0; i < countValues.length; i++) {
        for (let j = i + 1; j < countValues.length; j++) {
            if (countValues[i] == countValues[j]) {
                return false
            }
        }
    }
    return true
}

// console.log(uniqueOccurrences([1, 2, 2, 1, 1, 3]))
// console.log(uniqueOccurrences([1, 2]))
console.log(uniqueOccurrences([0, 0, -2, -1, 4, 8, -3, 9, 6]))