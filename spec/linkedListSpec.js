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

  it("takes a value and adds it to the end of the list", function() {
    linkedList.addToTail('first');
    expect(linkedList.head.value).toEqual('first');
    expect(linkedList.tail.value).toEqual('first');
    linkedList.addToTail('second');
    expect(linkedList.head.value).toEqual('first');
    expect(linkedList.head.next).toEqual(linkedList.tail);
    expect(linkedList.head.next.value).toEqual('second');
    linkedList.addToTail('third');
    expect(linkedList.tail.next).toEqual(null);

  });

  it("Removes the first node from the list and returns its value", function() {
    linkedList.addToTail('first');
    linkedList.addToTail('second');
    linkedList.addToTail('three');
    expect(linkedList.removeHead()).toEqual('first');

  });

  it("Returns boolean reflecting whether or not the passed-in value is in the linked list", function() {
    linkedList.addToTail('first');
    expect(linkedList.contain('first')).toEqual(true);
  });

 

});


