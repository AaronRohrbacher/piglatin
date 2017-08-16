function isVowel(letter){
  if(letter === 'a'||letter === 'e'||letter === 'i'||letter === 'o'||letter === 'u'){
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

        if(isVowel(word[j])){
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


$(document).ready(function() {
  $("form#pigLatin").submit(function(event) {
    event.preventDefault();
    var input = $("input#pigLatinInput").val();
    $("#output").text(converter(input));
  });
});
