var makeSet = function(){
  var set = Object.create(setPrototype);
  set._storage = {};
  return set;
};

var setPrototype = makeSet.prototype;

setPrototype.add = function(value){
	this._storage[value] = true; 
};

setPrototype.contains = function(value){
	return this._storage[value];
};

setPrototype.remove = function(value){
	delete this._storage[value];
	return this._storage[value];
};
