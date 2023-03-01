$(document).ready(function () {
  // document.getElementById("defaultOpen").click();
  let cars = document.querySelectorAll(".add-cart");
  /*
   *設定cartNumbers  代表購物車商品的數量
   *當productNumbers = 0 代表 購物車 當前無商品
   *當productNumbers 不為0 代表 購物車 當前有商品 當productNumbers+1 回傳給cartNumbers
   *選擇cart span 在右上角顯示當前購物車數量
   */

  let products = [
    {
      name: "義式乳酪番茄沙拉",
      tag: "salad-1",
      img: "picture/salad-1.jpg",
      price: 60,
      inCart: 0,
    },
    {
      name: "糖心蛋麵包丁沙拉",
      tag: "salad-2",
      img: "picture/salad-2.jpg",
      price: 40,
      inCart: 0,
    },
    {
      name: "起司生菜沙拉",
      tag: "salad-3",
      img: "picture/salad-3.jpg",
      price: 50,
      inCart: 0,
    },
    {
      name: "草莓薄荷佐核桃沙拉",
      tag: "salad-4",
      img: "picture/noodles.jpg",
      price: 45,
      inCart: 0,
    },
    {
      name: "活力滿滿沙拉",
      tag: "salad-5",
      img: "picture/noodles.jpg",
      price: 55,
      inCart: 0,
    },
    {
      name: "主廚推薦牛肋排",
      tag: "steak",
      img: "picture/noodles.jpg",
      price: 250,
      inCart: 0,
    },
    {
      name: "迷迭香牛排佐馬鈴薯",
      tag: "steak-2",
      img: "picture/paneerNoodle.jpg",
      price: 200,
      inCart: 0,
    },
    {
      name: "嫩肩法式羊小排",
      tag: "steak-3",
      img: "picture/paneerNoodle.jpg",
      price: 230,
      inCart: 0,
    },
    {
      name: "香煎櫻桃鴨",
      tag: "steak-4",
      img: "picture/paneerNoodle.jpg",
      price: 350,
      inCart: 0,
    },
    {
      name: "迷迭香烤羊肋",
      tag: "steak-5",
      img: "picture/paneerNoodle.jpg",
      price: 400,
      inCart: 0,
    },
    {
      name: "焗烤通心義大利麵",
      tag: "pasta-2",
      img: "picture/paneerNoodle.jpg",
      price: 380,
      inCart: 0,
    },
    {
      name: "奶油白醬義大利麵",
      tag: "pasta-5",
      img: "picture/paneerNoodle.jpg",
      price: 270,
      inCart: 0,
    },
    {
      name: "芒果氣泡飲",
      tag: "juice",
      img: "picture/paneerNoodle.jpg",
      price: 60,
      inCart: 0,
    },
    {
      name: "橘子薄荷氣泡飲",
      tag: "juice-2",
      img: "picture/paneerNoodle.jpg",
      price: 45,
      inCart: 0,
    },
    {
      name: "覆盆子蔓越莓奶昔",
      tag: "juice-3",
      img: "picture/paneerNoodle.jpg",
      price: 30,
      inCart: 0,
    },
    {
      name: "白巧克力慕斯",
      tag: "cake-2",
      img: "picture/paneerNoodle.jpg",
      price: 40,
      inCart: 0,
    },
    {
      name: "覆盆子檸檬塔",
      tag: "cake-3",
      img: "picture/paneerNoodle.jpg",
      price: 35,
      inCart: 0,
    },
  ];
  console.log(cars);
  for (let i = 0; i < cars.length; i++) {
    cars[i].addEventListener("click", (e) => {
      e.preventDefault();
      alert("ckeck123");
      let pageNumbers = localStorage.getItem("PageNumbers");
      pageNumbers = parseInt(pageNumbers);
      switch (pageNumbers) {
        case 1: {
          // whichPage = 1;
          console.log("page 1");
          products = [
            {
              name: "義式乳酪番茄沙拉",
              tag: "salad-1",
              img: "picture/salad-1.jpg",
              price: 60,
              inCart: 0,
            },
            {
              name: "糖心蛋麵包丁沙拉",
              tag: "salad-2",
              img: "picture/salad-2.jpg",
              price: 40,
              inCart: 0,
            },
            {
              name: "起司生菜沙拉",
              tag: "salad-3",
              img: "picture/salad-3.jpg",
              price: 50,
              inCart: 0,
            },
            {
              name: "草莓薄荷佐核桃沙拉",
              tag: "salad-4",
              img: "picture/noodles.jpg",
              price: 45,
              inCart: 0,
            },
            {
              name: "活力滿滿沙拉",
              tag: "salad-5",
              img: "picture/noodles.jpg",
              price: 55,
              inCart: 0,
            },
            {
              name: "主廚推薦牛肋排",
              tag: "steak",
              img: "picture/noodles.jpg",
              price: 250,
              inCart: 0,
            },
            {
              name: "迷迭香牛排佐馬鈴薯",
              tag: "steak-2",
              img: "picture/paneerNoodle.jpg",
              price: 200,
              inCart: 0,
            },
            {
              name: "嫩肩法式羊小排",
              tag: "steak-3",
              img: "picture/paneerNoodle.jpg",
              price: 230,
              inCart: 0,
            },
            {
              name: "香煎櫻桃鴨",
              tag: "steak-4",
              img: "picture/paneerNoodle.jpg",
              price: 350,
              inCart: 0,
            },
            {
              name: "迷迭香烤羊肋",
              tag: "steak-5",
              img: "picture/paneerNoodle.jpg",
              price: 400,
              inCart: 0,
            },
            {
              name: "焗烤通心義大利麵",
              tag: "pasta-2",
              img: "picture/paneerNoodle.jpg",
              price: 380,
              inCart: 0,
            },
            {
              name: "奶油白醬義大利麵",
              tag: "pasta-5",
              img: "picture/paneerNoodle.jpg",
              price: 270,
              inCart: 0,
            },
            {
              name: "芒果氣泡飲",
              tag: "juice",
              img: "picture/paneerNoodle.jpg",
              price: 60,
              inCart: 0,
            },
            {
              name: "橘子薄荷氣泡飲",
              tag: "juice-2",
              img: "picture/paneerNoodle.jpg",
              price: 45,
              inCart: 0,
            },
            {
              name: "覆盆子蔓越莓奶昔",
              tag: "juice-3",
              img: "picture/paneerNoodle.jpg",
              price: 30,
              inCart: 0,
            },
            {
              name: "白巧克力慕斯",
              tag: "cake-2",
              img: "picture/paneerNoodle.jpg",
              price: 40,
              inCart: 0,
            },
            {
              name: "覆盆子檸檬塔",
              tag: "cake-3",
              img: "picture/paneerNoodle.jpg",
              price: 35,
              inCart: 0,
            },
          ];
          break;
        }
        case 2: {
          // whichPage = 2;
          console.log("page 2");
          products = [
            {
              name: "義式乳酪番茄沙拉",
              tag: "salad-1",
              img: "picture/salad-1.jpg",
              price: 60,
              inCart: 0,
            },
            {
              name: "糖心蛋麵包丁沙拉",
              tag: "salad-2",
              img: "picture/salad-2.jpg",
              price: 40,
              inCart: 0,
            },
            {
              name: "起司生菜沙拉",
              tag: "salad-3",
              img: "picture/salad-3.jpg",
              price: 50,
              inCart: 0,
            },
            {
              name: "草莓薄荷佐核桃沙拉",
              tag: "salad-4",
              img: "picture/noodles.jpg",
              price: 45,
              inCart: 0,
            },
            {
              name: "活力滿滿沙拉",
              tag: "salad-5",
              img: "picture/noodles.jpg",
              price: 55,
              inCart: 0,
            },
          ];
          break;
        }
        case 3: {
          // whichPage = 3;
          console.log("page 3");
          products = [
            {
              name: "主廚推薦牛肋排",
              tag: "steak",
              img: "picture/noodles.jpg",
              price: 250,
              inCart: 0,
            },
            {
              name: "迷迭香牛排佐馬鈴薯",
              tag: "steak-2",
              img: "picture/paneerNoodle.jpg",
              price: 200,
              inCart: 0,
            },
            {
              name: "嫩肩法式羊小排",
              tag: "steak-3",
              img: "picture/paneerNoodle.jpg",
              price: 230,
              inCart: 0,
            },
            {
              name: "香煎櫻桃鴨",
              tag: "steak-4",
              img: "picture/paneerNoodle.jpg",
              price: 350,
              inCart: 0,
            },
            {
              name: "迷迭香烤羊肋",
              tag: "steak-5",
              img: "picture/paneerNoodle.jpg",
              price: 400,
              inCart: 0,
            },
            {
              name: "焗烤通心義大利麵",
              tag: "pasta-2",
              img: "picture/paneerNoodle.jpg",
              price: 380,
              inCart: 0,
            },
            {
              name: "奶油白醬義大利麵",
              tag: "pasta-5",
              img: "picture/paneerNoodle.jpg",
              price: 270,
              inCart: 0,
            },
          ];
          break;
        }
        case 4: {
          // whichPage = 4;
          console.log("page 4");
          products = [
            {
              name: "芒果氣泡飲",
              tag: "juice",
              img: "picture/paneerNoodle.jpg",
              price: 60,
              inCart: 0,
            },
            {
              name: "橘子薄荷氣泡飲",
              tag: "juice-2",
              img: "picture/paneerNoodle.jpg",
              price: 45,
              inCart: 0,
            },
            {
              name: "覆盆子蔓越莓奶昔",
              tag: "juice-3",
              img: "picture/paneerNoodle.jpg",
              price: 30,
              inCart: 0,
            },
            {
              name: "白巧克力慕斯",
              tag: "cake-2",
              img: "picture/paneerNoodle.jpg",
              price: 40,
              inCart: 0,
            },
            {
              name: "覆盆子檸檬塔",
              tag: "cake-3",
              img: "picture/paneerNoodle.jpg",
              price: 35,
              inCart: 0,
            },
          ];
          break;
        }
      }
      // console.log("add to cart");
      cartNumbers(products[i]);
      totalCost(products[i]);
      tempAlert("成功添加", 1500);
    });
  }
  function tempAlert(msg, duration) {
    // alert("test");
    var el = document.createElement("div");
    // alert("成功");
    el.setAttribute(
      "style",
      "display:flex;justify-content: center;align-items: center;color:black;opacity:0.8;background-color:#c9731e;height:50px;width:200px;z-index: 999999;position: fixed;right: 20%;top: 5%;font-size:2.4rem;"
    );
    el.innerHTML = msg;
    setTimeout(function () {
      el.parentNode.removeChild(el);
    }, duration);
    document.body.appendChild(el);
  }
  function onLoadCartNumbers() {
    let productNumbers = localStorage.getItem("cartNumbers");

    // if (productNumbers) {
    //   document.querySelector(".cart span").innerHTML = productNumbers;
    // }
  }

  function cartNumbers(product) {
    /*productNumbers =>string */
    let productNumbers = localStorage.getItem("cartNumbers");
    /*string => int*/
    productNumbers = parseInt(productNumbers);
    if (productNumbers) {
      localStorage.setItem("cartNumbers", productNumbers + 1);
      document.querySelector(".cart span").innerHTML = productNumbers + 1;
    } else {
      localStorage.setItem("cartNumbers", 1);
      document.querySelector(".cart span").innerHTML = 1;
    }
    console.log(cartNumbers);
    setItems(product);
  }
  /*... =>rest operation dot dot dot */
  function setItems(product) {
    let cartItems = localStorage.getItem("productsInCart");
    /*JSON =>object*/
    cartItems = JSON.parse(cartItems);
    // console.log(product.tag);
    if (cartItems != null) {
      // console.log(cartItems[product.tag]);
      if (cartItems[product.tag] == undefined) {
        cartItems = {
          ...cartItems,
          [product.tag]: product,
        };
      }
      cartItems[product.tag].inCart += 1;
    } else {
      product.inCart = 1;
      cartItems = {
        [product.tag]: product,
      };
    }
    localStorage.setItem("productsInCart", JSON.stringify(cartItems));
  }

  function totalCost(product) {
    let cartCost = localStorage.getItem("cart-total-price");

    if (cartCost != null) {
      cartCost = parseInt(cartCost);
      localStorage.setItem("cart-total-price", cartCost + product.price);
    } else {
      localStorage.setItem("cart-total-price", product.price);
    }
  }

  function displayCart() {
    let cartItems = localStorage.getItem("productsInCart");
    let totalprice = localStorage.getItem("cart-total-price");
    console.log(cartItems);
    cartItems = JSON.parse(cartItems);

    let productContainer = document.querySelector(".cart-items");

    if (cartItems && productContainer) {
      productContainer.innerHTML = "";
      Object.values(cartItems).map((item) => {
        // console.log(item.inCart);
        // let total_price = item.price * item.inCart;
        // console.log("total_price" + total_price);
        productContainer.innerHTML += `
        <div class="cart-total">
            <div class="cart-item cart-column">
            <img class="cart-item-image" src="picture/${
              item.tag
            }.jpg" width="100" height="100">
            <span class="cart-item-title">${item.name}</span>
        </div>
      <span class="cart-price cart-column">${item.price}</span>
      <div class="cart-quantity cart-column">
          <input class="cart-quantity-input" type="number" value="${
            item.inCart
          }">
           <div class="cart-total-price">${item.inCart * item.price}</div>
          <button class="btn btn-danger" type="button">刪除</button>
      </div>
      </div>
      `;
      });
    }
    document.querySelector(".cart-total-price-all").innerHTML = totalprice;
    // console.log(productContainer.getElementsByClassName("cart-quantity-input"));
    let cartNnumberChange = productContainer.getElementsByClassName(
      "cart-quantity-input"
    );
    let dangerBtn = productContainer.getElementsByClassName("btn-danger");
    //console.log(dangerBtn);
    addDangerBtn(dangerBtn);
    changeNumberOfChart(cartNnumberChange);
  }
  function addDangerBtn(dangerBtn) {
    for (var i in dangerBtn) {
      dangerBtn[i].onclick = function (e) {
        deleteCartClass(e);
      };
    }
  }

  function deleteCartClass(e) {
    var buttonClicked = e.target;
    buttonClicked.parentElement.parentElement.remove();
    PriceofTotal();
  }
  function changeNumberOfChart(cartNnumberChange) {
    for (var i in cartNnumberChange) {
      cartNnumberChange[i].onchange = function (e) {
        PriceOfEachCart(e);
        PriceofTotal(e);
      };
    }
  }
  function PriceOfEachCart(e) {
    if (isNaN(e.target.value) || e.target.value < 0) {
      e.target.value = 0;
    }
    // let cartvalue = e.target.value;
    let ceer = e.currentTarget.parentNode;
    // console.log(ceer);
    let ceerP = ceer.parentNode;
    // console.log(ceerP);
    let ceerPrice = ceerP.getElementsByClassName("cart-price")[0].innerHTML;
    let ceetTotal = ceerP.getElementsByClassName("cart-total-price")[0];
    // console.log(cartvalue);
    //console.log(ceerPrice);
    ceetTotal.innerHTML = e.target.value * ceerPrice;
    // console.log(ceetTotal);
  }

  function PriceofTotal() {
    var TotalPriceOfCarts = 0;

    let PriceOfEachCart = document.getElementsByClassName("cart-total-price");
    for (var i = 0; i < PriceOfEachCart.length; i++) {
      TotalPriceOfCarts += parseInt(PriceOfEachCart[i].innerHTML);
    }
    document.getElementsByClassName("cart-total-price-all")[0].innerHTML =
      TotalPriceOfCarts;
    console.log(TotalPriceOfCarts);
  }

  onLoadCartNumbers();
  displayCart();
});
