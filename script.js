// Your Script here.
function rot13(encodedString) {
  var decodedString = "";
  
  for (var i = 0; i < encodedString.length; i++) {
    var charCode = encodedString.charCodeAt(i);
    
    if (charCode >= 65 && charCode <= 90) {
      // Decode uppercase letters
      charCode = ((charCode - 65 + 13) % 26) + 65;
    }
    
    decodedString += String.fromCharCode(charCode);
  }
  
  return decodedString;
}

// Example usage:
var encoded = "EBG13 rknzcyr.";
var decoded = rot13(encoded);
console.log(decoded); 
