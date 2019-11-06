var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
 // write your code here
 var objects = {itemName:`${item}`, itemPrice: Math.floor(Math.random()*100)};
 cart.push(objects);
 return `${objects.itemName} has been added to your cart.`;
}

function viewCart() {
  // write your code here
  var newCart = [];
  if(cart.length === 0){
    return "Your shopping cart is empty."
  } else{
    for(var i = 0; i < cart.length; i++){
      var itemAndPrice = `${cart[i]['itemName']} at \$${cart[i]['itemPrice']}`;
     newCart.push(itemAndPrice);
     var string = 'In your cart, you have ';
     if(newCart.length === 1){
       string += newCart.toString();
       string += '.'
       return string;
     }else if(newCart.length === 2){
       string += newCart.toString().join(', and ');
       string += '.';
       return string;
     }
    }
  }
}

function total() {
  // write your code here
  var total = 0;
  for(var i = 0; i < cart.length; i++){
    total += cart[i]['itemPrice'];
    return total;
    }
}

function removeFromCart(item) {
  // write your code here
}

function placeOrder(cardNumber) {
  // write your code here
}
