
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
    var selectedToppings = $('input[type=checkbox]').attr('checked');
    console.log(selectedToppings).show();
    var total= "";
  });
});
