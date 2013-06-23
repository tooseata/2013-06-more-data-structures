describe("set", function() {
  var set;

  beforeEach(function() {
    set = makeSet();
  });

  it("should have methods named 'add', 'contains', and 'remove'", function() {
    expect(set.add).toEqual(jasmine.any(Function));
    expect(set.contains).toEqual(jasmine.any(Function));
    expect(set.remove).toEqual(jasmine.any(Function));
  });

  it("Should be able to add a string to the set", function() {
  	set.add('first');
    set.add('second');
    set.add('third');
 	expect(set._storage.hasOwnProperty('second')).toEqual(true);
 	expect(set._storage.hasOwnProperty('Not In Set')).toEqual(false);
  });

it("Returns True if String is found in set, else return false", function() {
  	set.add('first');
    set.add('second');
    set.add('third');
 	expect(set.contains('third')).toEqual(true);
 	expect(set.contains('Not In Set')).toEqual(undefined);
  });

it("Takes a known string and removed it from the list", function() {
    set.add('first');
    set.remove('first');
    set.add('second');
    expect(set.contains('first')).toEqual(undefined);
    expect(set.contains('second')).toEqual(true);

  });

});