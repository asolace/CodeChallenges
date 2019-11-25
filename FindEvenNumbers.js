const isEqual = require( "./helper/isEqual")
const performance = require( "./helper/performance")

// -------------------------------------------------------------------------------------------------
// Return an array of even number between 2 numbers.
// Example: findEvenNumber(1,10) -> 2,4,6,8
// -------------------------------------------------------------------------------------------------
function findEvenNumber(l, r) {
    let results =  []

    for (let i = l + 1; i < r; i++) {
      if (i % 2 === 0)
      results.push(i)
    }

    return results
  }
  
  let runFindEvenNumber = _ => {
    console.log(`
    #####################################
    ## Array of Non-repeating In Array ##
    #####################################
    --- TEST #1 - ${Array.isArray(findEvenNumber(1,10)) ? 'PASSED' : 'FAILED'} ---
    Function findEvenNumber(arr) should return an array.
    Your result was a/n => ${typeof findEvenNumber(1,10)}.
    
    --- TEST #2 - ${isEqual(findEvenNumber(1,10), [2,4,6,8]) ? 'PASSED' : 'FAILED'} ---
    Even numbers array should have => 2,4,6,8
    Your result was => ${findEvenNumber(1,10)}.
  
    --- TEST #3 - ${isEqual(findEvenNumber(-10, 0), [-8,-6,-4, -2]) ? 'PASSED' : 'FAILED'} ---
    Even numbers array should have => -8,-6,-4, -2
    Your result was => ${findEvenNumber(-10, 0)}.

    Performance: ${performance(100, findEvenNumber, 1, 10)}ms.
    `)
  }

  runFindEvenNumber()