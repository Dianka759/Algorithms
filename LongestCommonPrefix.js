// Write a function to find the longest common prefix string amongst an array of strings.

// If there is no common prefix, return an empty string "".

// Example 1:
// Input: strs = ["flower","flow","flight"]
// Output: "fl"

// Example 2:
// Input: strs = ["dog","racecar","car"]
// Output: ""
// Explanation: There is no common prefix among the input strings.

var longestCommonPrefix = function (strs) {
    let prefix = ' '
    
    if (!strs.length) {
        return prefix;
    }

    // // double looping through the first string, and then the other strings with the second looop
    // for (var i = 0; i <= strs[0].length; i++) {
    //     for (var j = 1; j < strs.length; j++) {
    //          // checking if this character is also present in the same position of each string
    //         //  if it's not present, return the string up to this point and including the previous characters
    //         if (strs[0][i] !== strs[j][i]) {
    //             return strs[0].slice(0, i)
    //         }
    //     }
    // }
    // return strs[0]

    for (let i=0; i < strs[0].length; i++){ 
        const char = strs[0][i] // loop through all characters of the very first string. 

        for (let j = 1; j < strs.length; j++){ 
          // loop through all other strings in the array
            if(strs[j][i] !== char) return prefix
        }
        prefix = prefix + char
    }
    return prefix
};

console.log(longestCommonPrefix(["flower", "flow", "floight"]))