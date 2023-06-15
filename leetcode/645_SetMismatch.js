// You have a set of integers s, which originally contains all the numbers from 1 to n. Unfortunately, due to some error, one of the numbers in s got duplicated to another number in the set, which results in repetition of one number and loss of another number.

// You are given an integer array nums representing the data status of this set after the error.

// Find the number that occurs twice and the number that is missing and return them in the form of an array.


// Example 1:
// Input: nums = [1,2,2,4]
// Output: [2,3]


// Example 2:
// Input: nums = [1,1]
// Output: [1,2]


// Constraints:
// 2 <= nums.length <= 104
// 1 <= nums[i] <= 104



var findErrorNums = function (nums) {
    var arr = []
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] != nums[i + 1]) {
            continue;
        } else if (nums[0] != 1 || nums[i] < nums[i - 1]) {
            arr.push(nums[i], nums[i] - 1)
        } else {
            arr.push(nums[i], nums[i] + 1)
        }
    }
    return arr
};

console.log(findErrorNums([1, 2, 2, 4]))
console.log(findErrorNums([2, 2]))
console.log(findErrorNums([1, 3, 3, 4, 5]))
console.log(findErrorNums([1, 2, 4, 4, 5]))


