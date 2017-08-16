function converter(sentence) {
  arr = sentence.split(" ");
  for(i = 0; i < arr.length; ++i) {
    var firstLetter = arr[i].charAt(0);
    var word = arr[i];

    if(firstLetter === 'a'||firstLetter === 'e'||firstLetter === 'i'||firstLetter === 'o'||firstLetter === 'u'){
      arr[i] = word+"way";
    }else{
      word = word.slice(1);
      arr[i] = word+firstLetter+"ay";
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
