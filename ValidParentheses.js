// Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

// An input string is valid if:

// Open brackets must be closed by the same type of brackets.
// Open brackets must be closed in the correct order.


// Example 1:

// Input: s = "()"
// Output: true
// Example 2:

// Input: s = "()[]{}"
// Output: true
// Example 3:

// Input: s = "(]"
// Output: false

var isValid = function (s) {
    const parentheses = {
        '}': '{',
        ']': '[',
        ')': '(',
    }
    let i = 0;
    let order = [];

    if (s.length === 1) {
        return false;
    }
    while (i !== s.length) {
        let c = s[i];
        if (c === '{' || c === '[' || c === '(') {
            order.push(c);
        }
        else {
            if (parentheses[c] !== order.pop()) {
                return false;
            }
        }
        i++;
    }
    return order.length === 0;
}

console.log(isValid("("))
console.log(isValid("()"))
console.log(isValid("([)"))