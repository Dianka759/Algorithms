//  Find the difference 

var findTheDifference = function (s, t) {
    sortedS = s.split('').sort();
    sortedT = t.split('').sort();
    
    // console.log(sortedS)
    // console.log(sortedT)

    for (let i = 0; i < sortedT.length; i++) {
        if (sortedS[i] !== sortedT[i]) {
            return sortedT[i];
        }
    }
};

console.log(findTheDifference("abcd", "abcde"))


//  Works for multiple letter/numbers differences. 
// const stringDiff = (str1, str2) => {
//     for (var i = 0; i < str2.length; i++) {
//         var placer = str1.indexOf(str2[i])
//         if (placer >= 0) {
//             str2 = str2.slice(0, i) + str2.slice(i + 1)
//             str1 = str1.slice(0, placer) + str1.slice(placer + 1)
//             i--
//         }
//     } return str2
// }
// console.log(stringDiff("abcd", "abcdetr"));