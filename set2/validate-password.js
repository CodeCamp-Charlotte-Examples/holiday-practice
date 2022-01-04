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

module.exports = isValidPassword;