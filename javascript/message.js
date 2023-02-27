$(document).ready(function () {
  function tempAlert(msg, duration) {
    // alert("test");
    var el = document.createElement("div");
    // alert("成功");
    el.setAttribute(
      "style",
      "display:flex;justify-content: center;align-items: center;color:black;opacity:0.8;background-color:#c9731e;height:100px;width:200px;z-index: 999999;position: fixed;right: 20%;top: 0;font-size:2.4rem;"
    );
    el.innerHTML = msg;
    setTimeout(function () {
      el.parentNode.removeChild(el);
    }, duration);
    document.body.appendChild(el);
  }
  function showWindowAtTopRight(content) {
    var newWindow = window.open("", "_blank", "width=400,height=300");
    newWindow.document.write(content);
    newWindow.moveTo(
      // window.screenLeft + window.innerWidth - 400,
      500,
      window.screenTop
    );
  }

  var d = document.getElementsByClassName("cart2");
  for (let i = 0; i < d.length; i++) {
    d.onclick = function () {
      tempAlert("成功添加", 1500);
      // showWindowAtTopRight();
    };
  }
});
