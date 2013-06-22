var makeTree = function(value){
// debugger;
  var newTree = {};
  newTree.value = value;
  newTree.children = undefined;
  _.extend(newTree, treeMethods);
  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value){
	//debugger;
	var tmp = makeTree(value);
};

treeMethods.contains = function(){
};


