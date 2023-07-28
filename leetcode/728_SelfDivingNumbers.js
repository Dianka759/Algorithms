// A self-dividing number is a number that is divisible by every digit it contains.

// For example, 128 is a self-dividing number because 128 % 1 == 0, 128 % 2 == 0, and 128 % 8 == 0.
// A self-dividing number is not allowed to contain the digit zero.

// Given two integers left and right, return a list of all the self-dividing numbers in the range [left, right].

// Example 1:
// Input: left = 1, right = 22
// Output: [1,2,3,4,5,6,7,8,9,11,12,15,22]

// Example 2:
// Input: left = 47, right = 85
// Output: [48,55,66,77]

// Constraints:
// 1 <= left <= right <= 104

/**
 * @param {number} left
 * @param {number} right
 * @return {number[]}
 */
var selfDividingNumbers = function (left, right) {
    //     const arr = []; // Initialize an empty array to store the numbers that meet the condition
    //     for (let i = left; i <= right; i++) {
    //         // Loop from 'left' to 'right' (inclusive) to check each number in the range
    //         let num = i; // Assign the current number to the variable 'num'
    //         let flag = true; // Initialize a flag variable to true, assuming the number meets the condition

    //         // While loop to check if each digit of the number 'num' divides the number 'i'
    //         while (num > 0) {
    //             let a = num % 10; // Get the last digit of the number 'num'
    //             if (i % a !== 0) {
    //                 // If 'i' is not divisible by 'a' (the last digit of 'num'), set the flag to false
    //                 flag = false;
    //                 break; // Exit the loop as the number 'i' doesn't meet the condition
    //             }
    //             num = Math.floor(num / 10); // Remove the last digit from 'num' by integer division
    //         }

    //         if (flag)
    //             arr.push(i); // If the flag is still true, add the number 'i' to the 'arr' array
    //     }

    //     return arr; // Return the array containing the numbers that meet the condition


    let res = []; // Initialize an empty array to store the numbers that meet the condition

    // Loop from 'left' to 'right' (inclusive) to check each number in the range
    for (let i = left; i <= right; i++) {
        let temp = i.toString().split(''); // Convert the current number 'i' to a string and split it into an array of characters

        // Check if the array 'temp' does not include the digit '0'
        if (!temp.includes('0')) {
            let pass = true; // Initialize a flag variable 'pass' to true, assuming the number meets the condition

            // Loop through each digit of the number 'i' represented as an array of characters
            for (let j = 0; j < temp.length; j++) {
                // If 'i' is not divisible by the current digit 'temp[j]', set 'pass' to false
                if (i % Number(temp[j]) !== 0) {
                    pass = false;
                }
            }

            // If 'pass' is still true after checking all digits of the number 'i', add 'i' to the 'res' array
            if (pass) {
                res.push(i);
            }
        }
    }

    return res; // Return the array containing the numbers that meet the condition
};
console.log(selfDividingNumbers(1, 22));
console.log(selfDividingNumbers(47, 85));