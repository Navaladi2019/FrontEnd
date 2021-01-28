var numField1 = document.getElementById("numField1");
var numField2 = document.getElementById("numField2");
var result = document.getElementById("result");
var from = document.getElementById("Percentcalc");
from.addEventListener("submit", function(event) {

    if (!numField1.value || !numField2.value) {
        alert("Please enter values in fields");
    } else {
        var x = parseFloat(numField1.value);
        var y = parseFloat(numField2.value);
        

result.innerText = (x/y)*100+ " is the result";
    }
    
    event.preventDefault();
});
