// You are given an integer array deck where deck[i] represents the number written on the ith card.

// Partition the cards into one or more groups such that:

// Each group has exactly x cards where x > 1, and
// All the cards in one group have the same integer written on them.
// Return true if such partition is possible, or false otherwise.

// Example 1:
// Input: deck = [1,2,3,4,4,3,2,1]
// Output: true
// Explanation: Possible partition [1,1],[2,2],[3,3],[4,4].

// Example 2:
// Input: deck = [1,1,1,2,2,2,3,3]
// Output: false
// Explanation: No possible partition.

// Constraints:
// 1 <= deck.length <= 104
// 0 <= deck[i] < 104

/**
 * @param {number[]} deck
 * @return {boolean}
 */


// Helper function to find the greatest common divisor (GCD) using Euclid's algorithm
function findGCD(a, b) {
    if (b === 0) {
        return a;
    }
    return findGCD(b, a % b);
};

var hasGroupsSizeX = function (deck) {
    var count = 1
    var arr = []

    // edge case if the deck is less than one partition
    if (deck.length <= 1) {
        return false
    }

    // instead of using hash map (because I decided not to), push the count of each card with the same integer value to the new arr
    var sorted = deck.sort();
    for (let i = 0; i < sorted.length; i++) {
        if (sorted[i] == sorted[i + 1]) {
            count++
        } else {
            arr.push(count)
            count = 1
        }
    }

    // Find the greatest common divisor (GCD) of all arr
    // console.log(arr)
    var gcd = arr[0];
    for (let i = 1; i < arr.length; i++) {
        gcd = findGCD(gcd, arr[i]);
    }
    // console.log(gcd)

    // If the GCD is greater than 1, a valid partition is possible
    return gcd > 1;
};

console.log(hasGroupsSizeX([1, 2, 3, 4, 4, 3, 2, 1]))
console.log(hasGroupsSizeX([1, 1, 1, 2, 2, 2, 3, 3]))
console.log(hasGroupsSizeX([1, 1, 2, 2, 2, 2]))
console.log(hasGroupsSizeX([0, 0, 1, 1, 1, 1, 2, 2, 3, 4]))
console.log(hasGroupsSizeX([0, 0, 0, 1, 1, 1, 2, 2, 2]))
