// window.onload = function () {
var emailInput = document.getElementById("email");
var passwordInput = document.getElementById("password");
var nameInput = document.getElementById("full-name");
var subBtn = document.querySelector(".btn-submit");
var check = false;
/*即時檢查使用者的密碼輸入  使用者邊輸入密碼，邊回饋密碼檢查的結果*/

// 取得 input 元素

// 檢查規則
passwordInput.addEventListener("input", function (event) {
  const inputValue = event.target.value;
  const rule1 = document.getElementsByClassName("rule1")[0];
  const rule2 = document.getElementsByClassName("rule2")[0];
  const rule3 = document.getElementsByClassName("rule3")[0];
  const rule4 = document.getElementsByClassName("rule4")[0];
  const subBtn = document.getElementsByClassName("btn--form")[0];
  console.log("User input:", inputValue);
  console.log("input length:", inputValue.length);
  console.log(rule2);
  if (inputValue.length >= 8) {
    rule2.style.display = "none";
  } else {
    rule2.style.display = "block";
  }

  if (inputValue.match(/[^A-Za-z\d]/g)) {
    rule3.style.display = "none";
  } else {
    rule3.style.display = "block";
  }
  if (inputValue.match(/[A-Z]/g)) {
    rule4.style.display = "none";
  } else {
    rule4.style.display = "block";
  }
  if (
    inputValue.match(/[A-Z]/g) &&
    inputValue.match(/[^A-Za-z\d]/g) &&
    inputValue.length >= 8
  ) {
    alert("創建密碼成功");
    check = true;

    document.querySelector(".btn--form").disabled = false;
    rule1.style.display = "none";
    subBtn.style.opacity = 1;
    subBtn.style.backgroundColor = "#2e1907";
  } else {
    check = false;
    document.querySelector(".btn--form").disabled = true;
    rule1.style.display = "block";
    subBtn.style.opacity = 0.8;
    subBtn.style.backgroundColor = rgba(110, 102, 102, 0.422);
  }
});

subBtn.addEventListener("click", function (e) {
  alert("submit success");
});

// };
