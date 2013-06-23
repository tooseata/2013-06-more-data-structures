describe("hashTable", function() {
  var hashTable;

  beforeEach(function() {
    hashTable = new HashTable();
  });

  it("should have methods named 'insert' and 'retrieve", function() {
    expect(hashTable.insert).toEqual(jasmine.any(Function));
    expect(hashTable.retrieve).toEqual(jasmine.any(Function));
    expect(hashTable.remove).toEqual(jasmine.any(Function));
  });

it("should have methods named 'insert' and 'retrieve", function() {
    hashTable.insert('Chris', 28);
    hashTable.insert('Dave', 24);
    hashTable.insert('Daniel', 19);
    
  });
  // add more tests here to test the functionality of hashTable
});