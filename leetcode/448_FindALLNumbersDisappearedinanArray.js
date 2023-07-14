// Given an array nums of n integers where nums[i] is in the range [1, n], return an array of all the integers in the range [1, n] that do not appear in nums.

// Example 1:
// Input: nums = [4,3,2,7,8,2,3,1]
// Output: [5,6]

// Example 2:
// Input: nums = [1,1]
// Output: [2]

// Constraints
// n == nums.length
// 1 <= n <= 105
// 1 <= nums[i] <= n

// Follow up: Could you do it without extra space and in O(n) runtime? You may assume the returned list does not count as extra space.


/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDisappearedNumbers = function (nums) {
    let output = []; // Initialize an empty array to store the missing numbers

    // Iterate from 1 to the length of the array (inclusive)
    for (let i = 1; i <= nums.length; i++) {
        // Check if the current number is not found in the array
        if (nums.indexOf(i) < 0) {
            // console.log(nums.indexOf(i))
            // If the number is missing, push it to the output array
            output.push(i);
        }
    }
    return output; // Return the array of missing numbers
};
console.log(findDisappearedNumbers([4, 3, 2, 7, 8, 2, 3, 1]))
// console.log(findDisappearedNumbers([1,1]))