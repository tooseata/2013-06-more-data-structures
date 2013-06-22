var makeBinarySearchTree = function(){
  var binarySearchTree = {};
  binarySearchTree.left = null;
  binarySearchTree.right = null;
  binarySearchTree.children = [];
  _.extend(binarySearchTree, BinaryTreeMethods);
  
  return binarySearchTree;
};

var BinaryTreeMethods = {};

// method, which accepts a value and places in the tree in the correct position
BinaryTreeMethods.insert = function(value){
};

// method, which accepts a value and returns a boolean reflecting whether or not the value is contained in the tree.
BinaryTreeMethods.contains = function(value){
};

// method, which accepts a callback and executes it on every value contained in the tree.
BinaryTreeMethods.depthFirstLog = function(value){
};