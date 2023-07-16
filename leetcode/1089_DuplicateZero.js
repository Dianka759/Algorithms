// Given a fixed-length integer array arr, duplicate each occurrence of zero, shifting the remaining elements to the right.

// Note that elements beyond the length of the original array are not written. Do the above modifications to the input array in place and do not return anything.

// Example 1:
// Input: arr = [1,0,2,3,0,4,5,0]
// Output: [1,0,0,2,3,0,0,4]
// Explanation: After calling your function, the input array is modified to: [1,0,0,2,3,0,0,4]

// Example 2:
// Input: arr = [1,2,3]
// Output: [1,2,3]
// Explanation: After calling your function, the input array is modified to: [1,2,3] 

// Constraints:
// 1 <= arr.length <= 104
// 0 <= arr[i] <= 9

/**
 * @param {number[]} arr
 * @return {void} Do not return anything, modify arr in-place instead.
 */

var duplicateZeros = function (arr) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === 0) {
            arr.splice(i + 1, 0, 0)
            arr.pop()
            i++
        }
    }
    // var length = arr.length
    // var i = 0

    // while (i < length)
    //     if (arr[i] === 0) {
    //         // Duplicate the zero by inserting a 0 at the current position
    //         //  splice(positionToInsert, deleteCount, insertValue)
    //         arr.splice(i, 0, 0)
    //         // Increment the index to skip the duplicated zero
    //         i += 2
    //     } else {
    //         // Increment the index if the current element is not 0
    //         i++
    //     }
    // // Truncate the array to remove the extra elements
    // arr.splice(length)
    // // arr.length = length
    // console.log(arr)
};

console.log(duplicateZeros([1, 0, 2, 3, 0, 4, 5, 0]))
console.log(duplicateZeros([1, 2, 3]))
