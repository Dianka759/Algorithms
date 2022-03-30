var twoSum = function (nums, target) {
    let newArray = new Array();
    
    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            if (target == nums[i] + nums[j]) {
                newArray[0] = i;
                newArray[1] = j;
                break;
            }
        }
    }

    return newArray;
}

console.log(twoSum([3, 2, 4], 6))
console.log(twoSum([2,7,11,15], 9))