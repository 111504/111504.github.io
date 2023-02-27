var speed = 20;
var demo = document.getElementsByClassName("demo")[0];
var demo2 = document.getElementsByClassName("demo2")[0];
var demo1 = document.getElementsByClassName("demo1")[0];
demo2.innerHTML = demo1.innerHTML;
// console.log("out" + demo.scrollLeft);
// console.log(demo2.offsetWidth);
function Marquee_right() {
  if (demo.scrollLeft <= 0) {
    demo.scrollLeft += demo2.offsetWidth;
    // console.log("if" + demo.scrollLeft + demo2.offsetWidth);
  } else {
    demo.scrollLeft--;
    // console.log("else" + demo.scrollLeft);
  }
}
function Marquee_left() {
  if (demo.scrollLeft == demo1.offsetWidth) {
    demo.scrollLeft = 0;
  } else {
    demo.scrollLeft++;
  }
}
var MyMar = setInterval(Marquee_right, speed);
demo.onmouseover = function () {
  clearInterval(MyMar); //鼠标悬停时，暂停滚动
};
demo.onmouseout = function () {
  MyMar = setInterval(Marquee_right, speed); //鼠标移开时，开始滚动
};
