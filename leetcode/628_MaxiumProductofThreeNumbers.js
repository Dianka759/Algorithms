// Given an integer array nums, find three numbers whose product is maximum and return the maximum product.

// Example 1:

// Input: nums = [1,2,3]
// Output: 6

// Example 2:
// Input: nums = [1,2,3,4]
// Output: 24

// Example 3:
// Input: nums = [-1,-2,-3]
// Output: -6

// Constraints:
// 3 <= nums.length <= 104
// -1000 <= nums[i] <= 1000

/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumProduct = function (nums) {
    // nums.sort((a, b) => b - a); // Sort the array in descending order
    // console.log(nums);

    // // Consider the three possibilities for the maximum product:
    // // 1. The product of the three largest positive numbers
    // // 2. The product of the two smallest negative numbers and the largest positive number
    // // 3. The product of the three largest negative numbers (if there are at least three negatives)
    // return Math.max(nums[0] * nums[1] * nums[2], nums[0] * nums[nums.length - 1] * nums[nums.length - 2], nums[nums.length - 1] * nums[nums.length - 2] * nums[nums.length - 3]);

    let sorted = nums.sort((a, b) => a - b)
    let res1 = sorted[0] * sorted[1] * sorted[nums.length - 1]
    let res2 = sorted[nums.length - 1] * sorted[nums.length - 2] * sorted[nums.length - 3]
    return Math.max(res1, res2);
};
// console.log(maximumProduct([1, 2, 3]))
// console.log(maximumProduct([1, 2, 3, 4]))
// console.log(maximumProduct([-1, -2, -3]))
console.log(maximumProduct([-100, -98, -1, 2, 3, 4]))