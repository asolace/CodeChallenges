const performance = require( "../helper/performance")

/*
From CoderByte
    Have the function MinWindowSubstring(strArr) take the array of strings stored in strArr, 
    which will contain only two strings, the first parameter being the string N and the second parameter being a string K of some characters, 
    and your goal is to determine the smallest substring of N that contains all the characters in K. 
    
    For example: if strArr is ["aaabaaddae", "aed"] then the smallest substring of N that contains the characters a, e, and d is "dae" located at the end of the string. 
    So for this example your program should return the string dae.

    Another example: if strArr is ["aabdccdbcacd", "aad"] then the smallest substring of N that contains all of the characters in K is "aabd" which is located at the beginning of the string. 
    Both parameters will be strings ranging in length from 1 to 50 characters and all of K's characters will exist somewhere in the string N. 
    Both strings will only contains lowercase alphabetic characters.

    Use the Parameter Testing feature in the box below to test your code with different arguments.
*/

function MinWindowSubstring(strArr) { 
    if (strArr.length < 2) return ""
    
    let stringN = strArr[0]
    let stringK = strArr[1]
    let result = ""
    
    let stringKMap = {}
    for (let i = 0; i < stringK.length; i++) {
      let letter = stringK.charAt(i)
      
      if (stringKMap[letter] != null) {
        stringKMap[letter] = stringKMap[letter] + 1
      } else {
        stringKMap[letter] = 1
      }
    }
    
    let stringNMap = {}
    let counter = 0
    let remaining = 0
    let minLength = stringN.length + 1
    for (let i = 0; i < stringN.length; i++) {
      let letter = stringN.charAt(i)
      
      if (stringKMap[letter] != null) {
        if (stringNMap[letter] != null) {
          if (stringNMap[letter] < stringKMap[letter]) {
            counter++
          }
          
          stringNMap[letter] = stringNMap[letter] + 1
        } else {
          stringNMap[letter] = 1
          counter++
        }
      }
      
      if (counter === stringK.length) {
        let track = stringN.charAt(remaining)
        
        while ((stringNMap[track] == null) || stringNMap[track] > stringKMap[track]) {
          if (stringNMap[track] != null && stringNMap[track] > stringKMap[track]) {
            stringNMap[track] = stringNMap[track] - 1
          }
          
          remaining++
          track = stringN.charAt(remaining)
        }
        
        if (i - remaining + 1 < minLength) {
          result = stringN.substring(remaining, i + 1)
          minLength = i - remaining + 1
        }
      }
    }
    
    return result; 
  }
     
  let runMinWindowSubstring = _ => {
    console.log(`
    ##########################
    ## Min Window Substring ##
    ##########################
    --- TEST #1 - ${typeof MinWindowSubstring(["aaabaaddae", "aed"]) === "string" ? 'PASSED' : 'FAILED'} ---
    Function MinWindowSubstring(strPath) should return a string.
    Your result was a/n => ${typeof MinWindowSubstring(["aaabaaddae", "aed"])}.

    --- TEST #2 - ${MinWindowSubstring(["ffadeahardfdgfgdfanrre", "dfg"]) === "fdg" ? 'PASSED' : 'FAILED'} ---
    MinWindowSubstring for ["ffadeahardfdgfgdfanrre", "dfg"] should be => fdg
    Your result was => ${MinWindowSubstring(["ffadeahardfdgfgdfanrre", "dfg"])}.

    --- TEST #3 - ${MinWindowSubstring(["aaabaaddae", "aed"]) === "dae" ? 'PASSED' : 'FAILED'} ---
    MinWindowSubstring for ["aaabaaddae", "aed"] should be => dae.
    Your result was => ${MinWindowSubstring(["aaabaaddae", "aed"])}.

    Performance: ${performance(100, MinWindowSubstring, ["aaabaaddae", "aed"])}ms.
    `)
}

runMinWindowSubstring();