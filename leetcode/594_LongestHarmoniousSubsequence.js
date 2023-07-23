// We define a harmonious array as an array where the difference between its maximum value and its minimum value is exactly 1.

// Given an integer array nums, return the length of its longest harmonious subsequence among all its possible subsequences.

// A subsequence of array is a sequence that can be derived from the array by deleting some or no elements without changing the order of the remaining elements.

// Example 1:
// Input: nums = [1,3,2,2,5,2,3,7]
// Output: 5
// Explanation: The longest harmonious subsequence is [3,2,2,2,3].

// Example 2:
// Input: nums = [1,2,3,4]
// Output: 2

// Example 3:
// Input: nums = [1,1,1,1]
// Output: 0

// Constraints:
// 1 <= nums.length <= 2 * 104
// -109 <= nums[i] <= 109

/**
 * @param {number[]} nums
 * @return {number}
 */

var findLHS = function (nums) {
    // // var temp = nums[0]
    // allEqual = nums => nums.every(num => num === nums[0])
    // if (allEqual(nums)) {
    //     return 0
    // }

    // var count = 0
    // var final = 0
    // var sorted = nums.sort((a, b) => a - b)
    // // console.log(sorted)
    // for (let i = 0; i < sorted.length; i++) {
    //     if (sorted[i] === sorted[i + 1] || sorted[i + 1] - sorted[i] === 1) {
    //         count++;
    //     }
    //     if (count > final) {
    //         final = count
    //     }
    // }
    // return final


    // Create a map to store the count of each number in the array
    const numCount = new Map();

    // Calculate the count of each number in the array
    for (let num of nums) {
        numCount.set(num, (numCount.get(num) || 0) + 1);
    }

    console.log(numCount)
    
    let longestHarmoniousSubseq = 0;

    // Iterate over the keys (numbers) in the map
    for (let num of numCount.keys()) {
        if (numCount.has(num + 1)) {
            // If the current number and the next number (num + 1) both exist in the array,
            // calculate the length of the harmonious subsequence and update the longestHarmoniousSubseq
            longestHarmoniousSubseq = Math.max(longestHarmoniousSubseq, numCount.get(num) + numCount.get(num + 1));
        }
    }

    return longestHarmoniousSubseq;
};
console.log(findLHS([1, 3, 2, 2, 5, 2, 3, 7]));
console.log(findLHS([1, 2, 3, 4]));
console.log(findLHS([1, 1, 1, 1]));