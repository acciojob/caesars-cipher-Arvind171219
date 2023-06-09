function rot13() {
  var encodedString = prompt("Enter a ROT13 encoded string:");
  var decodedString = "";

  for (var i = 0; i < encodedString.length; i++) {
    var charCode = encodedString.charCodeAt(i);

    if (charCode >= 65 && charCode <= 90) {
      // Decode uppercase letters
      charCode = ((charCode - 65 + 13) % 26) + 65;
    }

    decodedString += String.fromCharCode(charCode);
  }

  console.log("Decoded string: " + decodedString);
}

rot13();
