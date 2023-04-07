function hasTargetSum(array, target) {
  // Write your algorithm here
  const numSet = new Set();

  for (let num of array) {
    const complement = target - num;
    if (numSet.has(complement)) {
      return true;
    }
    numSet.add(num);
  }

  return false;
}

/* 
  Write the Big O time complexity of your function here
  Time complexity: O(n), where n is the length of the input array.
*/

/* 
  Add your pseudocode here
  1. Create a new Set to keep track of numbers
  2. Iterate through the array
  3. For each number, calculate its complement (target - num)
  4. Check if the complement is already in the Set
  5. If yes, return true, as a pair of numbers that add up to the target has been found
  6. If no, add the current number to the Set
  7. If the loop finishes without finding a pair of numbers, return false
*/

/*
  Add written explanation of your solution here
  The hasTargetSum function uses a Set to keep track of numbers in the input array. It iterates through the array and calculates the complement of each number with respect to the target sum. If the complement is already present in the Set, that means a pair of numbers that add up to the target sum has been found, and the function returns true. If the loop finishes without finding a pair of numbers, the function returns false.
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;
