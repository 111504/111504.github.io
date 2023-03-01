function openPage(evt, page, nums) {
  let num = parseInt(nums);
  // console.log("num=", num);
  var i, cartbus, carlinks, whichPage;
  cartbus = document.getElementsByClassName("cart-bus");
  // console.log(cartbus);
  for (i = 0; i < cartbus.length; i++) {
    cartbus[i].style.display = "none";
  }
  // carlinks = document.getElementsByClassName("siber-page");
  // for (i = 0; i < tablinks.length; i++) {
  //   carlinks[i].className = carlinks[i].className.replace(" active", "");
  // }
  document.getElementById(page).style.display = "flex";
  // alert(page);
  evt.currentTarget.className += " active";
  switch (num) {
    case 1: {
      whichPage = 1;
      // console.log("1");
      break;
    }
    case 2: {
      whichPage = 2;
      // console.log("2");
      break;
    }
    case 3: {
      whichPage = 3;
      // console.log("3");
      break;
    }
    case 4: {
      whichPage = 4;
      // console.log("4");
      break;
    }
  }
  localStorage.setItem("PageNumbers", whichPage);
  // carlinks = document.getElementsByClassName("");
}
// document.getElementById("defaultOpen").click();
