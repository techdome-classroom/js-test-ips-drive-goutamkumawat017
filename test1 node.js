function smallestMissingPositiveInteger(nums) {
function solution(a) {
let newarray = a.sort(function(a, b) {return a-b})
let lowestnumber = 1
for(i=0; i < newArray.length; i++) {
  if(lowestNumber > newArray[0]) {
      return lowestNumber
  }
  if(lowestNumber == newArray[i]) {
      lowestNumber = lowestNumber + 1
  }
  if(i = newArray.length - 1) {
      return lowestNumber
    }  
  }
}

  // Implement the function smallest_missing_positive_integer

  }
  function smallestMissingPositiveInteger(nums) {
    const n = nums.length;
  
    // Create a set to store the elements of the array.
    const set = new Set(nums);
  
    // Iterate over the numbers from 1 to n.
    for (let i = 1; i <= n; i++) {
      // If the number is not in the set, return it.
      if (!set.has(i)) {
        return i;
      }
    }
  
    // If all the numbers from 1 to n are in the set, return n + 1.
    return n + 1;
  }
  
  
  module.exports = smallestMissingPositiveInteger;(Array)
    return;
     
  
  

