const performance = require( "../helper/performance")

/*
From CoderByte
    Have the function CorrectPath(str) read the str parameter being passed, which will represent the movements made in a 
    5x5 grid of cells starting from the top left position. 

    The characters in the input string will be entirely composed of: r, l, u, d, ?. 
    Each of the characters stand for the direction to take within the grid,
    Example: r = right, l = left, u = up, d = down. 

    Your goal is to determine what characters the question marks should be in order for a path to be created to go from 
    the top left of the grid all the way to the bottom right without touching previously travelled on cells in the grid.

    For example: if str is "r?d?drdd" then your program should output the final correct string that will allow a path to be formed from the top left of a 5x5 grid to the bottom right. 
    For this input, your program should therefore return the string rrdrdrdd. 
    There will only ever be one correct path and there will always be at least one question mark within the input string.

    Use the Parameter Testing feature in the box below to test your code with different arguments.
*/
function CorrectPath(str) { 
    // Starting position is [0,0]. 
    // Ending position should be at [4,4].
    let x = 0
    let y = 0
    let missingLetters = []
    let numOfQuestions = str.match(/[?]/g).length
    
    // Counts the number of the given x, y movements/
    for (let i = 0; i < str.length; i++) {
      switch (str[i]) {
        case "d":
            x++
            break;
        case "u":
            x--
            break;
        case "l":
            y--
            break;
        case "r":
            y++
            break;
      }
    }
    
    addX = _ => {
      while (x !== 4) {
        if (x < 4) {
            x++
            missingLetters.push("d")
        } else {
            x--
            missingLetters.push("u")
        }
      }
    }
    
    addY = _ => {
      while (y !== 4) {
        if (y < 4) {
            y++
            missingLetters.push("r")
        } else {
            y--
            missingLetters.push("l")
        }
      }
    }
    
    if (x < y) {
        addY()
        addX()
    }
    
    if (x >= y) {
        addX()
        addY()
    }
    
    while (missingLetters.length < numOfQuestions) {
      switch (missingLetters[missingLetters.length - 1]) {
        case "d":
            x++
            missingLetters.push("d")
            addX()
            break;
        case "u":
            x--
            missingLetters.push("u")
            addX()
            break;
        case "l":
            y--
            missingLetters.push("l")
            addY()
            break;
        case "r":
            y++
            missingLetters.push("r")
            addY()
            break;
      } 
    }  
    
    let pathResult = str.split("")
    for (let i = 0; i < pathResult.length; i++) {
        if (pathResult[i] === "?") {
            pathResult[i] = missingLetters.shift()
        }
    }
    
    return pathResult.join("")
}
     
let runCorrectPath = _ => {
    console.log(`
    ##################
    ## Correct Path ##
    ##################
    --- TEST #1 - ${typeof CorrectPath("r?d?drdd") === "string" ? 'PASSED' : 'FAILED'} ---
    Function CorrectPath(strPath) should return a string.
    Your result was a/n => ${typeof CorrectPath("r?d?drdd")}.

    --- TEST #2 - ${CorrectPath("rd?u??dld?ddrr") === "rdrurrdldlddrr" ? 'PASSED' : 'FAILED'} ---
    CorrectPath for "rd?u??dld?ddrr" should be => rdrurrdldlddrr
    Your result was => ${CorrectPath("rd?u??dld?ddrr")}.

    --- TEST #3 - ${CorrectPath("r?d?drdd") === "rrdrdrdd" ? 'PASSED' : 'FAILED'} ---
    CorrectPath for "r?d?drdd" should be => rrdrdrdd.
    Your result was => ${CorrectPath("r?d?drdd")}.

    --- TEST #4 - ${CorrectPath("dddd?uuuurrr????") === "ddddruuuurrrdddd" ? 'PASSED' : 'FAILED'} ---
    CorrectPath for "dddd?uuuurrr????" should be => ddddruuuurrrdddd.
    Your result was => ${CorrectPath("dddd?uuuurrr????")}.

    Performance: ${performance(100, CorrectPath, "dddd?uuuurrr????")}ms.
    `)
}

runCorrectPath();