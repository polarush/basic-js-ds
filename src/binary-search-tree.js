const { NotImplementedError } = require ('../extensions/index.js')

const { Node }  = require ('../extensions/list-tree.js')

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/

//throw new NotImplementedError('Not implemented');
// remove line with error and write your code here

module.exports = class BinarySearchTree {
  
  constructor() {
    this.rootOfTree = null;
  }

  root() {
    return this.rootOfTree;
  }

  add(data) {
    let newTreePoint = new Node(data);

    if (!this.rootOfTree) { 
     this.rootOfTree = newTreePoint; 
    }
    else {
     addPoint(this.rootOfTree, newTreePoint); 
    }

    function addPoint(node, newTreePoint) {
      if (newTreePoint.data < node.data) {
        if (node.left === null) {
         node.left = newTreePoint;
        }
        else {
         addPoint(node.left, newTreePoint)
        }
      }

      else {
        if (node.right === null){ 
         node.right = newTreePoint;
        }
        else {
         addPoint(node.right, newTreePoint);
        }
      }
    }
  }
  

  has(data) {

    function isCase(node, data) {
      if (!node) {
       return false;
      }
      else if (node.data === data) {
       return true;
      }
      else if (node.data > data) {
       return isCase(node.left, data)
      } 
      else {
       return isCase(node.right, data);
      }
    }


    return isCase(this.rootOfTree, data);

  }

  
  find(data) {
    
    function findCase(node, data) {
      if (!node) {
       return null;
      }
      else if (node.data === data) {
       return node;
      }
      else if (node.data > data) {
       return findCase(node.left, data)
      } 
      else {
       return findCase(node.right, data);
      }
    }
    
    return findCase(this.rootOfTree, data);
  }

  remove(data) {

    function minimum(node) {
      if (node.left === null) {
       return node;
      }

      else {
       return minimum(node.left);
      }
    }

    function removeCases(node, data) {
      if (!node) {
       return null;
      }
      else if (data < node.data) {
       node.left = removeCases(node.left, data)
       return node;
      } 
      else if (data > node.data) {
       node.right = removeCases(node.right, data);
       return node;
      } 
      else {
       if (!node.right && !node.left) {
         node = null;
         return node;
       } 
       else if (!node.left) {
         node = node.right;
         return node;
       } 
       
       else if (!node.right) {
         node = node.left;
         return node;
       } 
       
       let newTreePoint = minimum(node.right);
       node.data = newTreePoint.data;
       node.right = removeCases(node.right, newTreePoint.data);
       return node;
       
      }
    }

    return removeCases(this.rootOfTree, data);
  }

  min() {

    function minimum(node) {
      if (node.left === null) {
       return node;
      }
      else {
       return minimum(node.left);
      }
    }
    return minimum(this.rootOfTree).data;
  }
  
  max() {

    function maximum(node) {
      if (node.right === null) {
       return node.data;
      }
      else {
       return maximum(node.right);
      }
    }

    return maximum(this.rootOfTree);
  }

} 
