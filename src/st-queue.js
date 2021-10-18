const { NotImplementedError } = require ('../extensions/index.js')

const { ListNode } = require ('../extensions/list-node.js')

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */

module.exports = class Queue {
  
  res = null;

  getUnderlyingList() {
    return this.res;
  }

  enqueue(value) {
    let newNode = new ListNode(value);
    if (this.res === null) {
      this.res = newNode;
    } 

    else { 
      let current = this.res;
        while (current.next != null) {
        current = current.next;
        }
      current.next = newNode;
    }
  }

  dequeue() {
    if (this.res === null) {
      return undefined;
    }

    let firstNode = this.res;
    this.res = this.res.next;
    return firstNode.value;
    
  }

}