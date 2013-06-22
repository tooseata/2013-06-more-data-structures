// Note: don't use an array to do this.
var makeLinkedList = function(){
  //debugger;
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value){
    
    if (this.tail === null) {
      this.tail = makeNode(value);
      this.head = this.tail;
    } else{
      this.tail.next = makeNode(value);
      this.tail  = this.tail.next;
    };

  };

  list.removeHead = function(){
    var tempvar = this.head.value;
    this.head = this.head.next;
    return tempvar;
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
