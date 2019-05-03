// var shoppingCart = (function() {
//   cart = [];
//
//   // Constructor
//   function Item(name, price, count) {
//     this.name = name;
//     this.price = price;
//     this.count = count;
//   }
//
//   var obj = {};
//
//   // Add to cart
//   obj.addItemToCart = function(name, price, count) {
//     for (var item in cart) {
//       if (cart[item].name === name) {
//         cart[item].count++;
//         return;
//       }
//     }
//     var item = new Item(name, price, count);
//     cart.push(item);
//   };
//
//   return obj;
// })();

// Add item
var itemCount = 0;
function addToCart() {
  //add item coutn to cart button
  itemCount++;
  addCount(itemCount);

  var id = $("id").data("index");
  console.log(id);

  //get  products from json file
  $.getJSON("products.json", function(json) {
    json.forEach(function(obj) {
      if (obj.id === id) {
        console.log(id);
        console.log(obj.id);
        console.log(obj.name);
        console.log(obj.price);
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
