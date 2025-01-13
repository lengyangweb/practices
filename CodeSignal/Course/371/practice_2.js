// Define a function to check for the next available tray without removing it
function nextTray(stack) {
  // TODO: Return the top-most tray without removing it from the stack
  if (!stack.length) {
      return "No trays available.";
  }
  console.log(stack[stack.length -1]);
}

// Initialize the stack with tray IDs
let trayStack = [1001, 1002, 1003];

// TODO: Use the `nextTray` function to check and print which tray will be served next
nextTray(trayStack);

// Simulate removing a tray from the stack
trayStack.pop();

// TODO: Use the `nextTray` function to check and print the next tray after one is removed
nextTray(trayStack);