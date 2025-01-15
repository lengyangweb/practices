/**
 * You've learned how to use stacks in JavaScript for various applications. Now, put your knowledge to the test by evaluating an expression in Reverse Polish notation (also known as postfix notation), where operands precede the operator. In other words, the operator comes after the two numbers on which it is supposed to operate.

Your task is to write a function that processes such an expression and returns the result. Remember, in a Reverse Polish Notation expression like "1 2 + 4 -", the operation is performed from left to right. This means you first add 1 and 2, and then subtract 3 from the result, getting -1 as a final result.

Assume the expression only includes + and - operators.
 */

// TODO: Define a function named evaluateReversePolishNotation that accepts an expression as a parameter
function evaluateReversePolishNotation(expression) {
    // TODO: Initialize an empty array to act as the stack
    const stack = [];

    // TODO: Split the expression into tokens and iterate over them
    const tokens = expression.split(' ');
    for (let token of tokens) {
        // TODO: If the token is an operator ('+', '-'), pop the top two elements from the stack for operation
        if (['+', '-'].includes(token)) {
            // TODO: Based on the operator, perform the appropriate operation and push the result back onto the stack
            const num2 = stack.pop();
            const num1 = stack.pop();
            const result = token === '+' ? num1 + num2 : num1 - num2;
            stack.push(result);
        }
        // TODO: Otherwise, treat the token as an operand and push it onto the stack
        else {
          stack.push(parseInt(token));
        }
    }
    // TODO: Return the top element of the stack as the result of the expression evaluation
    return stack[stack.length - 1];
}
// Example usage
const expression = "1 2 + 4 -";
console.log(evaluateReversePolishNotation(expression))  // Expected output: -1