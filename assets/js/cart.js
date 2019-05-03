var shoppingCart = (function() {
  cart = [];

  // Constructor
  function Item(name, price, count) {
    this.name = name;
    this.price = price;
    this.count = count;
  }

  var obj = {};

  // Add to cart
  obj.addItemToCart = function(name, price, count) {
    for (var item in cart) {
      if (cart[item].name === name) {
        cart[item].count++;
        return;
      }
    }
    var item = new Item(name, price, count);
    cart.push(item);
  };

  // Total cart
  obj.totalCart = function() {
    var totalCart = 0;
    for (var item in cart) {
      totalCart += cart[item].price * cart[item].count;
    }
    return Number(totalCart.toFixed(2));
  };

  // List cart
  obj.listCart = function() {
    var cartCopy = [];
    for (i in cart) {
      item = cart[i];
      itemCopy = {};
      for (p in item) {
        itemCopy[p] = item[p];
      }
      itemCopy.total = Number(item.price * item.count).toFixed(2);
      cartCopy.push(itemCopy);
    }
    return cartCopy;
  };

  return obj;
})();

// Add item
var itemCount = 0;
function addToCart(id) {
  //add item coutn to cart button
  itemCount++;
  addCount(itemCount);

  //get  products from json file
  $.getJSON("products.json", function(json) {
    json.forEach(function(obj) {
      if (obj.id == id) {
        var name = obj.name;
        var price = obj.price;
        shoppingCart.addItemToCart(name, price, 1);
      }
    });
  });
  //get product id

  // shoppingCart.addItemToCart(name, price, 1);
}

//add count of items to cart button
function addCount(val) {
  var count = val;
  $("span.total-count").html(count);
}

function displayCart() {
  var cartArray = shoppingCart.listCart();
  var output = "";
  for (var i in cartArray) {
    output +=
      "<div class='row p-30'>" +
      "<div class='col-3'>" +
      cartArray[i].name +
      "</div>" +
      "<div class='col-3'> Price:" +
      cartArray[i].price +
      "</div>" +
      "<div class='col-3'> #" +
      cartArray[i].count +
      "</div>" +
      "<div class='col-3'> Total:" +
      cartArray[i].total +
      "</div>" +
      "</div>";
  }
  $(".cart-info").html(output);

  $(".total-cart").html(shoppingCart.totalCart());

  var cartDiv = $(".cart-overlay");
  cartDiv.addClass("visible");
}
function hideCart() {
  var cartDiv = $(".cart-overlay");
  cartDiv.removeClass("visible");
}
