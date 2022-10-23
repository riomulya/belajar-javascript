function convertHTML(str) {
  var characters = [/&/g, /</g, />/g, /\"/g, /\'/g];
  var entities = ['&amp;', '&lt;', '&gt;', '&quot;', '&apos;'];
  console.log(str);

  for (var i = 0; i < characters.length; i++) {
    str = str.replace(characters[i], entities[i]);
    console.log(str);
  }

  return str;
}

console.log(convertHTML('Dolce  Gabbana'));

// function decodeHTMLEntities(text) {
//   var textArea = document.createElement('textarea');
//   textArea.innerHTML = text;
//   return textArea.value;
// }
