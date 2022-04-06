// Implement strStr().

// Given two strings needle and haystack, return the index of the first occurrence of needle in haystack, or -1 if needle is not part of haystack.

// Clarification:
// What should we return when needle is an empty string? This is a great question to ask during an interview.

// For the purpose of this problem, we will return 0 when needle is an empty string. This is consistent to C's strstr() and Java's indexOf().

// Example 1:

// Input: haystack = "hello", needle = "ll"
// Output: 2
// Example 2:

// Input: haystack = "aaaaa", needle = "bba"
// Output: -1

var strStr = function (haystack, needle) {
    if (needle.length === 0) {
        return 0;
    }

    for (var i = 0; i < haystack.length; i++) {
        for (var j = 0; j < needle.length; j++) {
            if (haystack[j + i] !== needle[j]) {
                break;
            }

            if (needle.length - 1 === j) {
                return i;
            }
        }
    }

    return -1;
};

console.log(strStr("hello", "ll"))