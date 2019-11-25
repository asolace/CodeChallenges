const performance = require( "../helper/performance")

/* Have the function TwoSum(arr) take the array of integers stored in arr, 
and determine if any two numbers (excluding the first element) in the array can sum up to the first element in the array. 

For example: if arr is [7, 3, 5, 2, -4, 8, 11], then there are actually two pairs that sum to the number 7: [5, 2] and [-4, 11]. 
Your program should return all pairs, with the numbers separated by a comma, in the order the first number appears in the array. 
Pairs should be separated by a space. So for the example above, your program would return: 5,2 -4,11

If there are no two numbers that sum to the first element in the array, return -1
*/

function TwoSum1(arr) { 
    if (!Array.isArray(arr)) return "-1";
    if (arr.length <= 2) return "-1";
    
    let sum = arr.shift();
    let results = [];
    
    // Check each element in array.
    for (let i = 0; i < arr.length; i++) {

      if (arr[i] < sum && Number.isInteger(arr[i])) {

          // Check each other element in the array.
        for (let j = i + 1; j < arr.length; j++) {
            
            // Determine if these two elements sum to arr[0]
            if (arr[i] + arr[j] === sum) {
                results.push(`${arr[i]},${arr[j]}`);
            }
        }
      }
    }
    
    if (results.length === 0) return "-1"
    
    return results.join(" "); 
}

function TwoSum2(arr) {
    if (!Array.isArray(arr)) return "-1";
    if (arr.length <= 2) return "-1";
    
    let sum = arr.shift();
    let results = [];
    let hashTable = {};
    
    // Check each element in array.
    for (let i = 0; i < arr.length; i++) {
      
        // Calculate sum - current element
        let sumMinusCurrent = sum - arr[i];

        // Check if this number exists in hash table;
        // If so then we found a pair of numbers.
        if (hashTable[sumMinusCurrent.toString()] !== undefined) {
            results.push(`${arr[i]},${sumMinusCurrent}`);
        }
        
        // Add the current number to the hash table.
        hashTable[arr[i].toString()] = arr[i];
    }
    
    if (results.length === 0) return "-1"
    
    return results.join(" "); 
}

console.log(`
    #############
    ## Two Sum ##
    #############
`)

let runTwoSum1 = _ => {
    console.log(`
    #############
    ## TwoSum1 ##
    #############
    --- TEST #1 - ${typeof TwoSum1([7, 3, 5, 2, -4, 8, 11]) === "string" ? 'PASSED' : 'FAILED'} ---
    Function TwoSum1(arr) should return a string.
    Your result was a/n => ${typeof TwoSum1([7, 3, 5, 2, -4, 8, 11])}.

    --- TEST #2 - ${TwoSum1([7, 3, 5, 2, -4, 8, 11]) === "5,2 -4,11" ? 'PASSED' : 'FAILED'} ---
    TwoSum1 array of [7, 3, 5, 2, -4, 8, 11] should have => 5,2 -4,11.
    Your result was => ${TwoSum1([7, 3, 5, 2, -4, 8, 11])}.

    --- TEST #3 - ${TwoSum1([4, 5, 1, 8]) === "-1" ? 'PASSED' : 'FAILED'} ---
    TwoSum1 array of [4, 5, 1, 8] should be => -1.
    Your result was => ${TwoSum1([4, 5, 1, 8])}.

    Performance: ${performance(10000000, TwoSum1, [7, 3, 5, 2, -4, 8, 11])}ms.
    `)
}

let runTwoSum2 = _ => {
    console.log(`
    #############
    ## TwoSum2 ##
    #############
    --- TEST #1 - ${typeof TwoSum2([7, 3, 5, 2, -4, 8, 11]) === "string" ? 'PASSED' : 'FAILED'} ---
    Function TwoSum2(arr) should return a string.
    Your result was a/n => ${typeof TwoSum2([7, 3, 5, 2, -4, 8, 11])}.

    --- TEST #2 - ${TwoSum2([7, 3, 5, 2, -4, 8, 11]) === "2,5 11,-4" ? 'PASSED' : 'FAILED'} ---
    TwoSum2 array of [7, 3, 5, 2, -4, 8, 11] should have => 2,5 11,-4.
    Your result was => ${TwoSum2([7, 3, 5, 2, -4, 8, 11])}.

    --- TEST #3 - ${TwoSum2([4, 5, 1, 8]) === "-1" ? 'PASSED' : 'FAILED'} ---
    TwoSum2 array of [4, 5, 1, 8] should be => -1.
    Your result was => ${TwoSum2([4, 5, 1, 8])}.

    Performance: ${performance(10000000, TwoSum2, [7, 3, 5, 2, -4, 8, 11])}ms.
    `)
}

runTwoSum1();
runTwoSum2();