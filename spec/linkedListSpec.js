describe("linkedList", function() {
  var linkedList;

  beforeEach(function() {
    linkedList = makeLinkedList();
  });

  it("should have a head and tail", function() {
    expect(Object.keys(linkedList)).toContain("head");
    expect(Object.keys(linkedList)).toContain("tail");
  });

  it("should have methods named 'addToTail', 'removeHead', and 'contains'", function() {
    expect(linkedList.addToTail).toEqual(jasmine.any(Function));
    expect(linkedList.removeHead).toEqual(jasmine.any(Function));
    expect(linkedList.contains).toEqual(jasmine.any(Function));
  });

  // add more tests here to test the functionality of linkedList

  it("takes a value and adds it to the end of the list", function() {
    linkedList.addToTail(11);
    expect(linkedList.head.value).toEqual(11);
    expect(linkedList.tail.value).toEqual(11);
    linkedList.addToTail(99);
    expect(linkedList.head.value).toEqual(11);
    expect(linkedList.tail.value).toEqual(99);
  });

  it("Removes the first node from the list and returns its value", function() {
    var firstValue = makeNode({foo : "bar"});
    //var tmp2 = {baz : "fue"};
    linkedList.addToTail(firstValue);
    //linkedList.addToTail(tmp2);
    linkedList.removeHead();

  });

  it("Returns boolean reflecting whether or not the passed-in value is in the linked list", function() {
    var tmp1 = {foo : "bar"};
    var tmp2 = {baz : "fue"};
    linkedList.addToTail(tmp1);
    linkedList.addToTail(tmp2);
    expect(linkedList.contain(tmp1)).toEqual(true);
    expect(linkedList.contain(tmp2)).toEqual(true);
    
  });

 

});


