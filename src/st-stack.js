const { NotImplementedError } = require ('../extensions/index.js')

/**
 * Implement the Stack with a given interface via array.
 *
 * @example
 * const stack = new Stack();
 *
 * stack.push(1); // adds the element to the stack
 * stack.peek(); // returns the peek, but doesn't delete it, returns 1
 * stack.pop(); // returns the top element from stack and deletes it, returns 1
 * stack.pop(); // undefined
 *
 */
//throw new NotImplementedError('Not implemented');
// remove line with error and write your code here


module.exports = class Stack {

  res = [];

  push(element) {
    this.res.push(element);
  }

  pop() {
    if (this.res.length === 0) {
      return undefined;
    } else { 
      return this.res.pop();
    }
  }

  peek() {
    if (this.res.length === 0) { 
      return undefined;
    } else {
      return this.res[this.res.length - 1];
    }
    
  }
}
