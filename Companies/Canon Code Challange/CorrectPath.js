function CorrectPath(str) {
  // Starting position is [0, 0]. Ending position should be at [4, 4].
  let x = 0
  let y = 0
  let missingLetters = []
  let numberOfQuestions = str.match(/[?]/g).length;

  // Counts the number of the given x, y movements.
  for (let i = 0; i < str.length; i++) {
    switch (str[i]) {
      case 'd': 
        x++
        break;
      case 'u':
        x--
        break;
      case 'l':
        y--
        break;
      case 'r':
        y++
        break;
    }
  }

  // Functions addX and addY be  
  addX = _ => {
    while (x !== 4){
        if (x < 4){
            x++
            missingLetters.push('d');
        } else {
            x--
            missingLetters.push('u');
        }
    }
  }

  addY = _ => {
    while (y !== 4){
      if (y < 4){
        y++
        missingLetters.push('r');
      } else {
        y--
        missingLetters.push('l');
      }
    }
  }

  // Finds what the missing letters are.
  // This will set x, y to [4, 4] (where the end position should be).
  if (x < y){
    addY();
    addX();
  }
  
  if (x >= y){
    addX();
    addY();
  }
  
  console.log("Top : ", x, y, missingLetters)


  while (missingLetters.length < numberOfQuestions) {
    switch (missingLetters[missingLetters.length - 1]) {
      case "r": 
        y++
        missingLetters.push('r');
        addY();
        break;
      case "l": 
        y--
        missingLetters.push('l');
        addY();
        break;
      case "d": 
        x++
        missingLetters.push('d');
        addX();
        break;
      case "u": 
        x--
        missingLetters.push('u');
        addX();
        break;
    }
  }

  console.log("Middle : ", x, y, missingLetters)

  let pathResult = str.split("") // Paths looks something like [r,d,u,r,l,?,?,d].
  for (let i = 0; i < pathResult.length; i++){
    if (pathResult[i] === '?'){
        pathResult[i] = missingLetters.shift();
    }
}
  console.log("Final: ", x, y, missingLetters, pathResult.join(""))
  return pathResult.join("")
}


console.log(CorrectPath("rd?u??dld?ddrr") === "rdrurrdldlddrr")
console.log(CorrectPath("dddd?uuuurrr????") === "ddddruuuurrrdddd")
console.log(CorrectPath("drdr??rrddd?") === "drdruurrdddd")
console.log(CorrectPath("drdr??rrddd?") === "drdruurrdddd")
console.log(CorrectPath("drdr??rrddd?") === "drdruurrdddd")
