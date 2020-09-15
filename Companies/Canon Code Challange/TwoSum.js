function TwoSum(arr) { 
  if (!Array.isArray(arr)) return -1;
  if (arr.length <= 2) return -1;
  
  let sum = arr.shift();
  let results = [];
  
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < sum && Number.isInteger(arr[i])) {
      for (let j = i + 1; j < arr.length; j++) {
        if (arr[i] + arr[j] === sum) {
          results.push(`${arr[i]},${arr[j]}`);
        }
      }
    }
  }
  
  if (results.length === 0) return -1
  
  return results.join(" "); 
}
   
// keep this function call here 
console.log(TwoSum(readline()));