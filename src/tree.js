var makeTree = function(value){
// debugger;
  var newTree = {};
  newTree.value = value;
  newTree.children = [];
  _.extend(newTree, treeMethods);
  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value){
	//debugger;
	this.children.push(makeTree(value));
	return this.children[this.children.length-1];
};

treeMethods.contains = function(value){

};


