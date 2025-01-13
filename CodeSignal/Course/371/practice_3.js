/**
 * Great job on learning stacks! Now, let's simulate a scenario in a cafeteria. You are tasked with adding and removing trays from a stack to maintain an organized process.

Your goal is to handle a new tray coming in and one going out. Think about how stacks work and apply it to manage the cafeteria trays.
 */

class CafeteriaStack {
  constructor() {
      this.trayStack = [];  // Stack to hold trays
  }

  addTray(trayId) {
      // TODO: Add a new tray to the stack, considering the LIFO principle
      this.trayStack.push(trayId);
  }

  removeTray() {
      // TODO: Remove a tray from the stack following the LIFO principle and return it
      if (!this.trayStack.length) {
        return null;  // If stack is empty, nothing to pop
      }
      return this.trayStack.pop();
  }
}

// Simulating cafeteria tray management
const cafeteria = new CafeteriaStack();
cafeteria.addTray(101);
cafeteria.addTray(102);
cafeteria.addTray(103);
console.log(cafeteria.removeTray());  // This should print the number of the last tray added