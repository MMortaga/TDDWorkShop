var sumBtn = document.getElementById("sum");
var subBtn = document.getElementById("sub");
var mltBtn = document.getElementById("multiply");
var result = document.getElementById("result");
sumBtn.addEventListener("click", function(){
  var val1=Number(document.getElementById("num1").value);
  var val2=Number(document.getElementById("num2").value);
  result.textContent="";
  result.textContent=sum(val1, val2)
})

subBtn.addEventListener("click", function(){
  var val1=Number(document.getElementById("num1").value);
  var val2=Number(document.getElementById("num2").value);
  result.textContent="";
  result.textContent=sub(val1, val2)
})

mltBtn.addEventListener("click", function(){
  var val1=Number(document.getElementById("num1").value);
  var val2=Number(document.getElementById("num2").value);
  result.textContent="";
  result.textContent=multiply(val1, val2)

})
