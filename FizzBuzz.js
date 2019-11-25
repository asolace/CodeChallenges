const isEqual = require( "./helper/isEqual")
const performance = require( "./helper/performance")

// -------------------------------------------------------------------------------------------------
// 1. Return an aray of every number that is divisible by 3 and 5 between 0 and num;
// 2. If it's divisible by 3 and 5 set that to Fizzbuzz.
// -------------------------------------------------------------------------------------------------
function fizzBuzz(num) {
    let results = []

    for (let i = 1; i < num; i++) {
        if (i % 15 === 0) {
            results.push("Fizzbuzz")
        } else if ((i % 3 === 0) || (i % 5 === 0)) {
            results.push(i)
        }
    }

    return results
  }
  

let runFizzBuzz = _ => {
    console.log(`
    #####################################
    ## Array of Non-repeating In Array ##
    #####################################
    --- TEST #1 - ${Array.isArray(fizzBuzz(10)) ? 'PASSED' : 'FAILED'} ---
    Function fizzBuzz(num) should return an array.
    Your result was a/n => ${typeof fizzBuzz(10)}.

    --- TEST #2 - ${isEqual(fizzBuzz(20), [3,5,6,9,10,12,"Fizzbuzz",18]) ? 'PASSED' : 'FAILED'} ---
    Fizzbuzz array should have => 3,5,6,9,10,12,"Fizzbuzz",18
    Your result was => ${fizzBuzz(20)}.

    --- TEST #3 - ${isEqual(fizzBuzz(-20), []) ? 'PASSED' : 'FAILED'} ---
    Fizzbuzz array should have => none.
    Your result was => ${fizzBuzz(-20)}.

    Performance: ${performance(100, fizzBuzz, 100)}ms.
    `)
}

runFizzBuzz()