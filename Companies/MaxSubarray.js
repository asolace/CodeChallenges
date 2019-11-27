const performance = require( "../helper/performance")

/* 
From CoderByte
    Have the function MaxSubarray(arr) take the array of numbers stored in arr 
    and determine the largest sum that can be formed by any contiguous subarray in the array. 

    For example, if arr is [-2, 5, -1, 7, -3] then your program should return 11 because 
    the sum is formed by the subarray [5, -1, 7]. Adding any element before or after this 
    subarray would make the sum smaller.

    Use the Parameter Testing feature in the box below to test your code with different arguments.
*/

// O(n^3)
let maxSubArray1 = function(nums) {
    if (nums.length === 0) return null
    if (nums.length === 1) return nums[0]

    let maxSum = Number.NEGATIVE_INFINITY
    
    for (let i = 0; i < nums.length; i++) {
        for (let j = i; j < nums.length; j++) {
            let currentSubArray = nums.slice(i, j)
            
            let currentSum = currentSubArray.reduce((a, b) => a + b, 0)
            
            maxSum = Math.max(maxSum, currentSum)
        }
    }
    
    return maxSum
};

// O(n^2)
let maxSubArray2 = function(nums) {
    if (nums.length === 0) return null
    if (nums.length === 1) return nums[0]

    let maxSum = Number.NEGATIVE_INFINITY
    
    for (let i = 0; i < nums.length; i++) {
        let currentSum = 0

        for (let j = 1; j <= nums.length; j++) {
            if (i + j > nums.length) break;
            currentSum += nums[i + j -1] // Last element of new subarray
            maxSum = Math.max(currentSum, maxSum)
        }
    }
    
    return maxSum
};

// O(n)
let maxSubArray3 = function(nums) {
    if (nums.length === 0) return null
    if (nums.length === 1) return nums[0]

    let maxSum = Number.NEGATIVE_INFINITY
    let maxCurrentSum = 0

    for (let i = 0; i < nums.length; i++) {
        maxCurrentSum = Math.max(nums[i], nums[i] + maxCurrentSum)
        maxSum = Math.max(maxCurrentSum, maxSum)
    }

    return maxSum
};

console.log(`
    ##################
    ## Max Subarray ##
    ##################
`)

let runMaxSubArray1 = _ => {
    console.log(`
    ##################
    ## MaxSubarray1 ##
    ##################
    --- TEST #1 - ${typeof Number.isInteger(maxSubArray1([-2, 5, -1, 7, -3])) ? 'PASSED' : 'FAILED'} ---
    Function maxSubArray1(arr) should return a string.
    Your result was a/n => ${typeof maxSubArray1([-2, 5, -1, 7, -3])}.

    --- TEST #2 - ${maxSubArray1([-2, 5, -1, 7, -3]) === 11 ? 'PASSED' : 'FAILED'} ---
    maxSubArray1 array of [-2, 5, -1, 7, -3] should be => 11.
    Your result was => ${maxSubArray1([-2, 5, -1, 7, -3])}.

    --- TEST #3 - ${maxSubArray1([7, 3, 5, 2, -4, 8, 11]) === 32 ? 'PASSED' : 'FAILED'} ---
    maxSubArray1 array of [7, 3, 5, 2, -4, 8, 11] should be => 32.
    Your result was => ${maxSubArray1([7, 3, 5, 2, -4, 8, 11])}.

    Performance: ${performance(100, maxSubArray1, [7, 3, 5, 2, -4, 8, 11])}ms.
    `)
}

let runMaxSubArray2 = _ => {
    console.log(`
    ##################
    ## MaxSubarray2 ##
    ##################
    --- TEST #1 - ${typeof Number.isInteger(maxSubArray2([-2, 5, -1, 7, -3])) ? 'PASSED' : 'FAILED'} ---
    Function maxSubArray2(arr) should return a string.
    Your result was a/n => ${typeof maxSubArray2([-2, 5, -1, 7, -3])}.

    --- TEST #2 - ${maxSubArray2([-2, 5, -1, 7, -3]) === 11 ? 'PASSED' : 'FAILED'} ---
    maxSubArray2 array of [-2, 5, -1, 7, -3] should be => 11.
    Your result was => ${maxSubArray2([-2, 5, -1, 7, -3])}.

    --- TEST #3 - ${maxSubArray2([7, 3, 5, 2, -4, 8, 11]) === 32 ? 'PASSED' : 'FAILED'} ---
    maxSubArray2 array of [7, 3, 5, 2, -4, 8, 11] should be => 32.
    Your result was => ${maxSubArray2([7, 3, 5, 2, -4, 8, 11])}.

    Performance: ${performance(100, maxSubArray2, [7, 3, 5, 2, -4, 8, 11])}ms.
    `)
}

let runMaxSubArray3 = _ => {
    console.log(`
    ##################
    ## MaxSubarray3 ##
    ##################
    --- TEST #1 - ${typeof Number.isInteger(maxSubArray3([-2, 5, -1, 7, -3])) ? 'PASSED' : 'FAILED'} ---
    Function maxSubArray3(arr) should return a string.
    Your result was a/n => ${typeof maxSubArray3([-2, 5, -1, 7, -3])}.

    --- TEST #2 - ${maxSubArray3([-2, 5, -1, 7, -3]) === 11 ? 'PASSED' : 'FAILED'} ---
    maxSubArray3 array of [-2, 5, -1, 7, -3] should be => 11.
    Your result was => ${maxSubArray3([-2, 5, -1, 7, -3])}.

    --- TEST #3 - ${maxSubArray3([7, 3, 5, 2, -4, 8, 11]) === 32 ? 'PASSED' : 'FAILED'} ---
    maxSubArray3 array of [7, 3, 5, 2, -4, 8, 11] should be => 32.
    Your result was => ${maxSubArray3([7, 3, 5, 2, -4, 8, 11])}.

    Performance: ${performance(100, maxSubArray3, [7, 3, 5, 2, -4, 8, 11])}ms.
    `)
}

runMaxSubArray1()
runMaxSubArray2()
runMaxSubArray3()