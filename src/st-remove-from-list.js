const { NotImplementedError } = require ('../extensions/index.js')

/**
 * Given a singly linked list of integers l and an integer k,
 * remove all elements from list l that have a value equal to k.
 *
 * @param {List} l
 * @param {Number} k
 * @return {List}
 *
 * @example
 * For l = [3, 1, 2, 3, 4, 5] and k = 3,
 * the output should be [1, 2, 4, 5]
 *
 * Singly - linked lists are already defined with this interface
 * function ListNode(x) {
 *   this.value = x;
 *   this.next = null;
 * }
 */
//throw new NotImplementedError('Not implemented');
// remove line with error and write your code here

module.exports = function removeKFromList(l, k) {

  let res = null;
  let temp = null;
  let cur = l;

  while (cur !== null) {
    if (cur.value !== k) {
      if (temp === null) {
        temp = { value: cur.value, 
                 next: null };
        res = temp;
        
      } else {
        temp.next = { value: cur.value, 
                      next: null };
        temp = temp.next;
      }
    }

    cur = cur.next;
  }
  return res;
}

