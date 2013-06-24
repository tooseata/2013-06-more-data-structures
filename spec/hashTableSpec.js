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

it("should update a value on a key that is already stored", function() {
    hashTable.insert("Chris", "28");
    hashTable.insert("David", "24");
    hashTable.insert("Chris", "Second Chris");
    expect(hashTable.retrieve("Chris")).toEqual("Second Chris");
    
  });

it("should handle collisions", function() {
    hashTable.insert("Chris", "28");
    hashTable.insert("David", "24");
    hashTable.insert("Daniel", "19");
    hashTable.insert("Andrew", "15");
    expect(hashTable.retrieve("Chris")).toEqual("28");
    expect(hashTable.retrieve("Daniel")).toEqual("19");
    
  });

it("should retrieve sucessfully ", function() {
    hashTable.insert("Chris", "28");
    hashTable.insert("David", "24");
    hashTable.insert("Daniel", "19");
    expect(hashTable.retrieve("Chris")).toEqual("28");
    expect(hashTable.retrieve("Daniel")).toEqual("19");    
  });

it("should delete sucessfully ", function() {
    hashTable.insert("Chris", "28");
    hashTable.insert("David", "24");
    hashTable.insert("Daniel", "19");
    hashTable.insert("Andrew", "15");
    hashTable.remove("Chris");
    expect(hashTable.retrieve("Chris")).toEqual("Chris is not contained in storage");
    expect(hashTable.retrieve("David")).toEqual("24");
  });


  // add more tests here to test the functionality of hashTable
});