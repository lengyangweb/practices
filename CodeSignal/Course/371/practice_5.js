/**
 * In this task, you will harness the power of stack operations in JavaScript. 
 * Imagine a scenario where brackets need to be balanced to ensure that a system operates correctly. 
 * Your mission is to calculate the minimum number of removals required to balance an invalid parentheses string. 
 * Use the stack manipulation techniques you've learned to achieve equilibrium in our virtual system! Test your solution on the input string "()))(()".
 * Note: assume that in this task you only have a single type of brackets - ( and ).
 */

// Create a function that determines the minimum number of bracket removals needed for a valid string.
function minRemovalsToBalance(brackets) {
  // TODO: Initialize an empty array to act as the stack
  const stack = [];
  const map = { '(': ')' };
  // TODO: Iterate through each bracket in the input string
  for (let char of brackets) {
    // TODO: Add conditions to handle the opening and closing brackets appropriately using stack operations
    if (!stack.length) {
      stack.push(char);
    } else {
      const compare = map[stack[stack.length - 1]];
      if (char === compare) {
        stack.pop();
      } else {
        stack.push(char);
      }
    }
  }
  // TODO: Return the count of brackets that need to be removed to make the string valid
  return stack.length;
}

// Example usage
let invalidParentheses = "()))(()";
let removalsNeeded = minRemovalsToBalance(invalidParentheses);
console.log(removalsNeeded);  // Expected output: 3