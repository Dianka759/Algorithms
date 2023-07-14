// The next greater element of some element x in an array is the first greater element that is to the right of x in the same array.

// You are given two distinct 0-indexed integer arrays nums1 and nums2, where nums1 is a subset of nums2.

// For each 0 <= i < nums1.length, find the index j such that nums1[i] == nums2[j] and determine the next greater element of nums2[j] in nums2. If there is no next greater element, then the answer for this query is -1.

// Return an array ans of length nums1.length such that ans[i] is the next greater element as described above.

// Example 1:
// Input: nums1 = [4,1,2], nums2 = [1,3,4,2]
// Output: [-1,3,-1]
// Explanation: The next greater element for each value of nums1 is as follows:
// - 4 is underlined in nums2 = [1,3,4,2]. There is no next greater element, so the answer is -1.
// - 1 is underlined in nums2 = [1,3,4,2]. The next greater element is 3.
// - 2 is underlined in nums2 = [1,3,4,2]. There is no next greater element, so the answer is -1.

// Example 2:
// Input: nums1 = [2,4], nums2 = [1,2,3,4]
// Output: [3,-1]
// Explanation: The next greater element for each value of nums1 is as follows:
// - 2 is underlined in nums2 = [1,2,3,4]. The next greater element is 3.
// - 4 is underlined in nums2 = [1,2,3,4]. There is no next greater element, so the answer is -1.

// Constraints:
// 1 <= nums1.length <= nums2.length <= 1000
// 0 <= nums1[i], nums2[i] <= 104
// All integers in nums1 and nums2 are unique.
// All the integers of nums1 also appear in nums2.

// Follow up: Could you find an O(nums1.length + nums2.length) solution?

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var nextGreaterElement = function (nums1, nums2) {
    // const result = [];
    // for (let i = 0; i < nums1.length; i++) {
    //     let max = -1
    //     for (let j = 0; j < nums2.length; j++) {
    //         if (nums1[i] === nums2[j]) {
    //             // Found element in nums2 that matches current element in nums1
    //             while (j !== nums2.length) {
    //                 // Iterate through remaining elements in nums2 to find next greater element
    //                 if (nums2[j] > nums1[i]) {
    //                     // Update max if we find a greater element
    //                     max = nums2[j];
    //                     break;
    //                 }
    //                 j++;
    //             }
    //         }
    //     }
    //     result.push(max);
    // }
    // return result

    let result = [];
    for (let num of nums1) {
        let max = -1;
        for (let i = nums2.indexOf(num) + 1; i < nums2.length; i++) {
            if (nums2[i] > num) {
                max = nums2[i];
                break;
            }
        }
        result.push(max);
    }
    return result;
};
console.log(nextGreaterElement([4, 1, 2], [1, 3, 4, 2]));
console.log(nextGreaterElement([2, 4], [1, 2, 3, 4]));