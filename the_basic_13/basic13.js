//  what's a variable: variable = has a name and a value : store data and call it back by is name
//  var, let, const

// Changing variable's value
// var x = 2
// x + 2 //GOTTA REDEFINE IT  x += 2
// console.log(x) 


/* data types in JS
Numbers (integers, decimal, floats)
Strings - a string of different characters, typically stored as TEXT.
Boolean - false (0) and true (1)
Null - is empty, void, no value
undefined - made a variable but nothing is inside of it

Object in JS are the same as Dictionaries in other languages

Data structures/types in JS
Objects/DictionariesL key value pairs, like an array but you can access the key name. Can also 
Array (lists in Python): a way to store several pieces of data into a variable and then we access individual values using an INDEX VALUE.
Function
- need to be called to execute their code
- a code of block that only runs when called upon: doesn't run in order it appears: ASYNCHRONOUSLY
-  reusable code
- parameters are values that are passed in when we call on the function that are passed in when we call o the function
- this allows us to have moredynamic function that can use several different values
- parameters are variables that are declared inside the function

function addNum(num1, num2) {
 var sum = 0;
 sum = num1 + num2;

}
*/

/*
Why are data types important? 
var num = 12;
num = num + "12" //when we add string to another value, it becomes a concatenated string
*/

// var cat = Minerva; 
// var num = 7
// num + 2;
// num = num + 2;
// num += 2


/* For Loops are jow we iterate one dimensionally tough a series of actions/data/etc
for (var i = 0;  //start of the loop
    i <= 10; //stop condition of the loop
    i++ // increments by one, how the start variable changes BEFORE the condition is checked!
) {
    console.log(i)
}
console.log(i)
*/


// Arrays/lists
// let arr = [2,3,4,5,'too'];

// console.log(arr[2])
// console.log(arr[5]) == undefined

//  BUILT IN METHODS
// arr.pop() //removes last
// arr.push('butts')
// arr.shift() // removes the FIRST 
// arr.unshift(200) // adds to the front

// arr.length = arr.length - 1;

// arr[2] = 100

// console.log(arr.pop()) // too

// for (var i = 0; i < arr.length; i++) {
//     console.log(arr[i])
// }








// print 1 to 255
function print1To255() {
    for (i = 1; i < 256; i++) {
        console.log(i)
    }
}
print1To255()


// print odds 1-255
// printOdds1To255()
function printOdds1To255() {
    for (i = 1; i < 256; i++) {
        if (i % 2 != 0) {
            console.log(i)
        } else {
            continue;
        }
    }
}
printOdds1To255()

function printOdds1To255() {
    for (i = 1; i < 256; i += 2) {
        console.log(i)
    }
}
printOdds1To255()




// print ints and sum 0-255 
function printIntsAndSum0To255() {
    let sum = 0;

    for (let i = 0; i < 256; i++) {
        sum += i
        console.log(i, sum)
    }
}
printIntsAndSum0To255()


// Iterate and Pring Array 
function printArrayVals(arr) {
    for (let i = 0; i < arr.length; i++) {
        console.log(arr[i])
    }
}
printArrayVals([1, 2, 3, 4, 5])



// 5. Find and Print Max
// printMaxOfArray(arr)
//Given an array, find and print its largest element.

function printMaxOfArray(arr) {
    // look at the array we were given, compare each number to the next number and whichever is greater is going to the next step
    var max = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > max) { //if the value at arr[i] is bigger than the value stored in the max variable, then 
            max = arr[i]  // set the max variable to the value at arr[i]
        }
    }
    console.log(max)
}
printMaxOfArray([3, 8, 10, 666, 20, 1, 6, 69, 420])


// 6. Get and Print Average
// Analyze an array’s values and print the average.
function printAverageOfArray(arr) {
    var average = 0
    for (let i = 0; i < arr.length; i++) {
        average += arr[i]
    }
    average /= arr.length;
    return Math.round(average)
}
var total = printAverageOfArray([69, 666, 2])
console.log(total)



// 7. Array with Odds
// Create an array with all the odd integers between 1 and 255 (inclusive).
function returnOddsArray1To255() {
    var arr = []
    for (i = 1; i < 256; i += 2) {
        arr.push(i)
    }
    return arr
}

var total = returnOddsArray1To255()
console.log(total)


// 8. Square the Values
// Square each value in a given array, returning that
// same array with changed values.
function squareArrayVals(arr) {
    for (let i = 0; i < arr.length; i++) {
        arr[i] = arr[i] ** 2
    }
    return arr
}
var result = squareArrayVals([1, 2, 3, 4, 5])
console.log(result)


// 9. Greater than Y
// Given an array and a value Y, count and print the
// number of array values greater than Y.
function printArrayCountGreaterThanY(arr, y) {
    var count = 0
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > y) {
            count++
        }
    }
    return count
}
var result = printArrayCountGreaterThanY([1, 2, 3, 4, 5, 6], 3)
console.log(result)


// 10. Zero Out Negative Numbers
// Return the given array, after setting any negative
// values to zero.
function zeroOutArrayNegativeVals(arr) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < 0) {
            arr[i] = 0
        }
    }
    return arr
}
var result = zeroOutArrayNegativeVals([-2, 0, 4, 2, -9])
console.log(result)


// 11. Max, Min, Average
// Given an array, print the max, min and average
// values for that array.
function printMaxMinAverageArrayVals(arr) {
    var max = 0
    var min = arr[0]
    var average = 0
    for (let i = 0; i <= arr.length; i++) {
        if (max < arr[i]) {
            max = arr[i]
        }
        if (min > arr[i]) {
            min = arr[i]
        }
        average += arr[i]
    }
    average /= arr.length
    return [max, min, average]
}
var result = printMaxMinAverageArrayVals([1, 2, 3, 4, 5, 9])
console.log(result)


// 12. Shift Array Values
// Given an array, move all values forward (to the left) by one index, dropping the first value and leaving a 0
// (zero) value at the end of the array.

// function shiftArrayValsLeft(arr) {
//     arr.shift()
//     arr.push(0)
//     return arr
// }



function shiftArrayValsLeft(arr) {
    for (let i = 0; i < arr.length; i++) {
        if (i = 0) {
            arr.shift()
        }
        else {
            (arr[i] = arr[i - 1])
        }
    }
    console.log(arr)
}
shiftArrayValsLeft([1, 2, 3, 4, 5])






var result = shiftArrayValsLeft([1, 2, 3, 4, 5])
console.log(result)


// 13. Swap String For Array Negative Values
// Given an array of numbers, replace any negative
// values with the string 'Dojo'.
function swapStringForArrayNegativeVals(arr) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < 0) {
            arr[i] = "DoJo"
        }
    }
    return arr
}

var result = swapStringForArrayNegativeVals([1, -2, 3, -4, 5])
console.log(result)
