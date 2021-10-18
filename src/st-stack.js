import { NotImplementedError } from '../extensions/index.js';

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

export default class Stack {
  
  res = []
  
  push(element) {
    this.res.push(element)
  }
  
  pop() {
    if (this.res.length === 0) {
      return undefined;
    } 
    this.res.pop(element)
  }

  peek() {
    if (this.res.length == 0) {
      return undefined; 
    }
    return this.res[this.res.length - 1];
  }
}
