const isValidPassword = require('../validate-password.js');

describe("isValidPassword", function() {

  // positive test cases
  it("should return true for passwords with at least 6 characters and 1 special symbol", function(){
    expect(isValidPassword('asdf!asdf')).toBeTrue();
  });

  // negative test cases
  it("should return false for passwords with less than 6 characters and no symbol", function(){
    expect(isValidPassword('asdf')).toBeFalse();
  });

  it("should return false for passwords with more than 6 characters and no special symbol", function(){
    expect(isValidPassword('asdfasdf')).toBeFalse();
  });

  it("should return false for passwords with less than 6 characters and a symbol", function(){
    expect(isValidPassword('asdf!')).toBeFalse();
  });

  // edge cases
  it("should return false for passwords with exactly 5 characters and a symbol", function(){
    expect(isValidPassword('asd#a')).toBeFalse();
  });

  it("should return true for passwords with exactly 6 characters and a symbol", function(){
    expect(isValidPassword('asd#as')).toBeTrue();
  });

  it("should return false for passwords with exactly 6 characters and no symbol", function(){
    expect(isValidPassword('asdfas')).toBeFalse();
  });

});