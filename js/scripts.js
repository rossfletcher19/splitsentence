$(document).ready(function(){
  $("#sentenceform").submit(function(event) {
    var input = $("input#item1").val();
    var splitwords = input.split(" ");
    alert(splitwords);
    event.preventDefault();

    var newArray = splitwords.map(function(splitword) {
      if(splitword.length > 3) {
        return splitword;
      } else {
        return;
      }
    });

    newArray.forEach(function(newA) {
      if (!newA) {
        delete newA;
      };
    });

    newArray.join();
  });
});
