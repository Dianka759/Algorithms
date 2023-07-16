// Given a string array words, return an array of all characters that show up in all strings within the words (including duplicates). You may return the answer in any order.

// Example 1:
// Input: words = ["bella","label","roller"]
// Output: ["e","l","l"]

// Example 2:
// Input: words = ["cool","lock","cook"]
// Output: ["c","o"]

// Constraints:
// 1 <= words.length <= 100
// 1 <= words[i].length <= 100
// words[i] consists of lowercase English letters.

/**
 * @param {string[]} words
 * @return {string[]}
 */

var commonChars = function (words) {
    let arr = []

    // Iterate over each character in the first word
    for (let i = 0; i < words[0].length; i++) {
        let char = words[0][i]
        let commonChar = true;

        // Check if the character is present in all other words
        for (let j = 1; j < words.length; j++) {
            if (!words[j].includes(char)) {
                // If the character is not found in a word, set commonChar to false and break the loop
                commonChar = false
                break;
            } else {
                // If the character is found in a word, remove it from the word
                words[j] = words[j].replace(char, '')
            }
        }
        // If commonChar is true, the character is common to all words, so add it to the array
        if (commonChar) {
            arr.push(char)
        }
    }
    return arr
};
console.log(commonChars(["bella", "label", "roller"]))