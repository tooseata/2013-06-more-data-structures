var HashTable = function(){
  this._limit = 2;

  // Use a limited array to store inserted elements.
  // It'll keep you from using too much space. Usage:
  //
  //   limitedArray.set(3, 'hi');
  //   limitedArray.get(3); // alerts 'hi'
  //

  this._storage = makeLimitedArray(this._limit);
};
HashTable.prototype.insert = function(key, value){
	//debugger;
	var newStorage = getIndexBelowMaxForKey(key, this._limit); 
	if(!!this._storage.get(newStorage)) {
		var valueChecker = this._storage.get(newStorage);
		if (valueChecker[0] === key) {
			valueChecker[1] = value;
		} else {
			var tmpArray = this._storage.get(newStorage);
			tmpArray.push([key,value]);
		}
	} else {
		this._storage.set(newStorage, [[key,value]]);
	}
};
HashTable.prototype.retrieve = function(value){
	var hashValue = getIndexBelowMaxForKey(value, this._limit); 
	if(!!this._storage.get(hashValue)) {
		var valueChecker = this._storage.get(hashValue);
		var result;
		_.each(valueChecker, function(match){
			if(match[0] === value){
				result = match[1];
			} 
		});	
		return result;
	} else {
		return value + "is not contained in storage";
	}
};
HashTable.prototype.remove = function(){

};

// NOTE: For this code to work, you will NEED the code from hashTableHelpers.js
// Start by loading those files up and playing with the functions it provides.
// You don't need to understand how they work, only their interface is important to you