/**
 * Let's see if you can handle adding some critical parts of the code from scratch. Specifically, focus on evaluating whether an expression's parentheses are balanced using stack operations. The string might also contain some letters and signs on top of parentheses, but you can just ignore them.

Remember, it's essential not only to check for matching pairs but also to ensure that every opening parenthesis is properly closed in the correct order.
 */

// Complete the function to properly use stack operations for parenthesis matching
function isValidExpression(expression) {
  let stack = [];
  for (let char of expression) {
    if (char === '(' || char === '[' || char === '{') {
      stack.push(char);
    } else if (char === ')' || char === ']' || char === '}') {
      // TODO: Determine if the stack is empty OR the last character does not match the corresponding opening character
      if (!stack.length) {
        stack.push(char);
      }
      if (stack[stack.length - 1] !== char) {
        stack.pop();
      } 
    } else {
      // TODO: What to do if the `char` is not a parenthesis?
      continue;
    }
  }
  // TODO: Check if the stack is empty, indicating that the expression is balanced
  return !stack.length ? true : false;  // Modify this line appropriately
}

// Example usage
let sampleExpression = "([a+b]{c+d})";
console.log(isValidExpression(sampleExpression));  // Expected output: true

let badExpression = "([a+b]{c+d}))";
console.log(isValidExpression(badExpression));  // Expected output: falsepra