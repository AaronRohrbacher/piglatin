// function vowelIndex(word){
//   for (var i = 0; i < word.length; ++i)
// }

function isVowel(letter){
  if(letter === 'a'||letter === 'e'||letter === 'i'||letter === 'o'||letter === 'u'){
    return true;
  }else{
    return false;
  }
}
function isVowelY(letter) {
  if(letter === 'a'||letter === 'e'||letter === 'i'||letter === 'o'||letter === 'u'||letter === 'y'){
    return true;
  }else{
    return false;
  }
}

function isItY(letter) {
  if(letter === 'y'){
    return true;
  }else{
    return false;
  }
}

function converter(sentence) {
  var arr = sentence.split(" ");
  var lettersBeforeVowel = "";
  for(var i = 0; i < arr.length; ++i) {
    var firstLetter = arr[i].charAt(0);
    var word = arr[i];
    if(isVowel(firstLetter)){
      arr[i] = word+"way";
    }
    if(!(isVowel(firstLetter))){
      for (var j = 0; j < word.length; ++j) {
        alert(word);
        if(isVowel(word[j])){
          nord = word.slice(j);
          arr[i] = word+lettersBeforeVowel+"ay";
          lettersBeforeVowel = "";
        }else if(isItY(word[j])){

          word = word.slice(j);
          arr[i] = word+lettersBeforeVowel+"ay";
          lettersBeforeVowel = "";
        }else {
          lettersBeforeVowel += word[j];
        }
      }
    }
  }
  return arr.join(" ");
}
// function converter(sentence) {
//   arr = sentence.split(" ");
//  for(i = 0; i < arr.length; ++i) {
//   var firstLetter = arr[i].charAt(0);
//   var word = arr[i];
//   if(firstLetter === 'a'||firstLetter === 'e'||firstLetter === 'i'||firstLetter === 'o'||firstLetter === 'u'){
//     arr[i] = word+"way";
//     }else {
//     word = word.slice(1);
//     arr[i] = word+firstLetter+"ay";
//     }
//
//    return arr.join(" ");
// }

$(document).ready(function() {
  $("form#pigLatin").submit(function(event) {
    event.preventDefault();
    var input = $("input#pigLatinInput").val();
    $("#output").text(converter(input));
  });
});
