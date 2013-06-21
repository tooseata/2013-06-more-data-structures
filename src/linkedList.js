// Note: don't use an array to do this.
var makeLinkedList = function(){
  //debugger;
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value){
    //debugger;
    var node = makeNode(value); 
    this.tail = node;

    if (this.head === null) {
      this.head = node;
    }
  };

  list.removeHead = function(){
    //debugger;
    var x = this.head;
    console.log(x);
    var y = x.next;
  };

  list.contains = function(value){

  };

  return list;

};

var makeNode = function(value){
  //debugger;
  var newNode = {};
  newNode.value = value;
  newNode.next = null;

  newNode.removeNextNode = function(){
  };

  return newNode;
};
