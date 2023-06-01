// You are given an integer array nums consisting of n elements, and an integer k.

// Find a contiguous subarray whose length is equal to k that has the maximum average value and return this value. Any answer with a calculation error less than 10-5 will be accepted.


// Example 1:

// Input: nums = [1,12,-5,-6,50,3], k = 4
// Output: 12.75000
// Explanation: Maximum average is (12 - 5 - 6 + 50) / 4 = 51 / 4 = 12.75 

function findMaxAverage(nums, k) {
    let sum = 0;

    // Calculate the initial sum of the first k numbers
    for (let i = 0; i < k; i++) {
        sum += nums[i];

    }

    let maxAverage = sum / k; // Initialize the maximum average

    // Iterate through the array starting from the (k+1)th element
    for (let i = k; i < nums.length; i++) {
        sum += nums[i] - nums[i - k]; // Update the sum by adding the next number and subtracting the first number of the previous group
        maxAverage = Math.max(maxAverage, sum / k); // Update the maximum average if the current average is higher
    }

    return maxAverage;
}

// console.log(findMaxAverage([1, 12, -5, -6, 50, 3], 4)); // Output: 12.75
console.log(findMaxAverage([1, 2, 3, 4], 2)); // 