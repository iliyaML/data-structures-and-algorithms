let text = "Hello world";

// length of text
text.length;

// character at index
text.charAt(i);

// code at index
text.charCodeAt(i);

// returns a string from character code
String.fromCharCode(97);

// substring, 1st value is position, 2nd value is end position
text.substring(1, s.length - 1);

// substr, 1st value is position, 2nd value is length
// some say this method is deprecated
text.substr(1, 3);

// normal for loop going through character by character
for (let i = 0, l = text.length; i < l; ++i) {
  console.log(i);
}

// loop through text
for (let c of text) {
  console.log(c);
}
