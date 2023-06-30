// Given an array nums of size n, return the majority element.

// The majority element is the element that appears more than ⌊n / 2⌋ times. You may assume that the majority element always exists in the array.

// Example 1:
// Input: nums = [3,2,3]
// Output: 3

// Example 2:
// Input: nums = [2,2,1,1,1,2,2]
// Output: 2

// Constraints:
// n == nums.length
// 1 <= n <= 5 * 104
// -109 <= nums[i] <= 109

// Follow-up: Could you solve the problem in linear time and in O(1) space?

/**
 * @param {number[]} nums
 * @return {number}
 */

var majorityElement = function (nums) {
    // Initialize solution and count to store the solution and its frequency for respective iterations...
    let solution = 0; 
    let count = 0;
    // For every element i in the array...
    for (let i = 0; i < nums.length; i++) {
        // If count is equal to zero, update solution as solution = i
        if (count == 0) {
            solution = nums[i];
            count = 1;
        }
        // If i is equal to candidate, increment count...
        else if (solution == nums[i]) {
            count++;
        }
        // Otherwise, decrement count...
        else {
            count--;
        }
    }
    // Return & print the solution...
    return solution;
};

console.log(majorityElement([3, 2, 3]))
console.log(majorityElement([2, 2, 1, 1, 1, 2, 2]))