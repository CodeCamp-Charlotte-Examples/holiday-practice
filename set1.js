// should return true if char is one of !@#$%&, false otherwise
function isSpecialSymbol(char) {
  const specialSymbols = '!@#$%&';
  return specialSymbols.indexOf(char) > -1;
}

// should return true if password contains one of !@#$%& and is 
// at least 6 characters long, false otherwise 
function isValidPassword(password) {
  
  if (password.length < 6) {
    return false;
  }

  for (let i = 0; i < password.length; i++) {
    if (isSpecialSymbol(password[i])) {
      return true;
    }
  }

  return false;
}

// test isSpecialSymbol
console.log("Testing isSpecialSymbol");
console.log(isSpecialSymbol('a')); // false
console.log(isSpecialSymbol(' ')); // false
console.log(isSpecialSymbol('[')); // false
console.log(isSpecialSymbol('#')); // true

// test isValidPassword
console.log("\nTesting isValidPassword");
console.log(isValidPassword('asdf')); // false
console.log(isValidPassword('asdfasdf')); // false
console.log(isValidPassword('asdf!')); // false
console.log(isValidPassword('asdfasdf!')); // true


// BONUS MISSIONS

function isWhitespace(char) {
  const whitespaceChars = ' \t\n';
  return whitespaceChars.indexOf(char) > -1;
}

function isValidPasswordBonus(password) {

  let hasSpecialSymbol = false;
  let hasWhitespace = false;
  
  if (typeof password !== 'string') {
    return false;
  }

  if (password.length < 6) {
    return false;
  }

  for (let i = 0; i < password.length; i++) {
    if (isSpecialSymbol(password[i])) {
      hasSpecialSymbol =  true;
      break;
    }
  }

  for (let i = 0; i < password.length; i++) {
    if (isWhitespace(password[i])) {
      hasWhitespace =  true;
      break;
    }
  }

  return hasSpecialSymbol && !hasWhitespace;
}

// test bonus missions
console.log("\nTesting isWhitespace");
console.log(isWhitespace('a')); // false
console.log(isWhitespace(' ')); // true
console.log(isWhitespace('\t')); // true
console.log(isWhitespace('\n')); // true


console.log("\nTesting isValidPasswordBonus");
console.log(isValidPasswordBonus(123)); // false
console.log(isValidPasswordBonus([1, 2, 3, 4, 5, 6, 7])); // false
console.log(isValidPasswordBonus(' asdfasdf!')); // false
console.log(isValidPasswordBonus('asdf  asdf!')); // false
console.log(isValidPasswordBonus('asdfasdf! ')); // false