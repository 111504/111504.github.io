// window.onload = function () {
var emailInput = document.getElementById("email");
var nameInput = document.getElementById("full-name");
var subBtn = document.querySelector(".btn-submit");

function FsubmitBtn(value) {
  var subnitemail = emailInput.value;
  var subname = nameInput.value;

  console.log(subnitemail + " " + subname);
  alert(subnitemail);
}

subBtn.addEventListener("click", FsubmitBtn);
// };
