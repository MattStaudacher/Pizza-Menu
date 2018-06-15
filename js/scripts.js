
//business logic

function Pizza(size, topping) {
  this.size = size;
  this.topping = topping;
}

Pizza.prototype.total = function() {

return
}

//user interface
$(document).ready(function() {
  $("form#form-pizza").submit(function(event) {
    event.preventDefault();

    Pizza.prototype.total = function() {
      return this.siz
    }
    var selectedSize = $("select#pizza-size").val();
    console.log(selectedSize);
    var selectedToppings = $("select#pizza-toppings").val();
    console.log(selectedToppings);
    var total= "";


    var smallPrice= 7;
    var mediumPrice= 10;
    var largePrice= 13;
  });
});
