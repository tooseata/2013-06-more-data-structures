describe("tree", function() {
  var tree;

  beforeEach(function() {
    tree = makeTree();
  });

  it("should have methods named 'addChild' and 'contains', and a property named 'value'", function() {
    expect(tree.addChild).toEqual(jasmine.any(Function));
    expect(tree.contains).toEqual(jasmine.any(Function));
    expect('value' in tree).toBe(true);
  });

 it("takes any value, sets that as the target of a node, and adds that node as a child of the tree", function() {
    //debugger;
    tree.addChild('first');
    //expect(tree.value).toEqual('first');
  });







});