function converter(sentence) {
  arr = sentence.split(" ");
  for(i = 0; i < arr.length; ++i) {
    var word = arr[i];
    arr[i] = word+"ay";
  }
  return arr.toString();
}

$(document).ready(function() {
  $("form#pigLatin").submit(function(event) {
    event.preventDefault();
    var input = $("input#pigLatinInput").val();
    $("#output").text(converter(input));
  });
});
