
//business logic

function Pizza(size, topping, cost) {
  this.size = size;
  this.topping = topping;
  this.cost = 0;


}

Pizza.prototype.totalCost = function() {

    if(this.toppings<=2 && this.size==="small")
    {
        this.price+= 7;

      }else if (this.size==="medium") {
        this.price+= 10;

      }else if (this.size==="large") {
        this.price+= 13;


    }else if (this.toppings>=3) {
      if(this.size=="small"){
        this.price+= 10;

      }else if (this.size=="medium") {
        this.price+= 12.50;

      }else if (this.size=="large") {
        this.price+= 15;
      }
    }

  }
var totalCost = 0;
//user interface
$(document).ready(function(){
  $("form#form-pizza").submit(function(event){
    event.preventDefault();
    $("#pizza-order").show();
    var size = $("#pizza-size").val();
    var toppingsChecked=[];
    var topping=0;
    $("input:checkbox[name=toppings]:checked").each(function(){
      topping += 1;
      toppingsChecked.push($(this).val());
    });
    var newZa= new Pizza(size, topping)
    newZa.totalCost();
    totalCost+=newZa.price;
    // $(".size").text(newPizza.size);
    $(".totalCost").text(totalCost);

    $("ul#order-total").append("<li>"+"One "+ newZa.size +" "+ "size "+" "+" pizza"+ " with "+ toppingsChecked + " "+": $" +" "+ newZa.cost+ "</li>");
    toppingsChecked=[];


alert();
    $("#pizza-order").trigger("reset");


  });
});
