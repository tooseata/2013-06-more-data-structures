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
    tree.addChild('first');
    tree.addChild('second');
    tree.addChild('third');
    tree.addChild('fourth');
    expect(tree.children.length).toEqual(4);
    expect(tree.children[tree.children.length-1].value).toEqual('fourth');

  });

it("Can search for a value and return Ture is found; and False if not found", function() {
    tree.addChild('first');
    tree.addChild('second');
    tree.addChild('third');
    tree.addChild('fourth');
    expect(tree.contains('third')).toEqual(true);
  });



});