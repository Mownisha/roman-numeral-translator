var convertToRoman = function(n) {
  if (!Number.isInteger(n)) return false;
  var i, r, decimal , roman;
  r = "";
  decimal = [1,   4,   5,   9,  10,  40,  50,  90, 100, 400, 500, 900,1000];
  roman = ["I","IV", "V","IX", "X","XL", "L","XC", "C","CD", "D","CM", "M"];
  for (i = 12; i >= 0; i--) {
      while (n >= decimal[i]) {
          r += roman[i];
          n -= decimal[i];
      }
  }
return r;
};

$(document).ready(function() {
  $("#formOne").submit(function(event) {
    event.preventDefault();
    var num=parseInt($("#input").val());
    var result=convertToRoman(num);
    $(".result").text(result);
    $("#result-div").show();
  });
});
