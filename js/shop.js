// var customername = "Ratana";
// var price = 10;
// var quantity = 3;
// var totalprice = price *quantity ;
// document.getElementById("customer-name").innerHTML ="Ratana";
// document.getElementById("price").innerHTML ="$" +totalprice;

// var products = [
// 	"pizza","Naan","Sourdough","Foccacia","iPhonex"
// ];
// var price = [ 40,10,20,80,1000];
// var productstext ="";
// var productsElement = document.getElementById("product-list");

// for(var i = 0; i< products.length; i++){
// 	productstext = productstext +"<li class ='list-group-item'>" +products[i] + "<span class='badge'>$"+price[i] +"</li>";
// }

// productsElement.innerHTML=productstext

var customername = "Ratana";
// var price = 10;
// var quantity = 3;
var totalprice = 0 ;


var products = [
	"pizza","Naan","Sourdough","Foccacia","iPhonex"
];
var price = [ 40,10,20,80,1000];
var productstext ="";
var productsElement = document.getElementById("product-list");

for(var i = 0; i< products.length; i++){
	productstext = productstext +"<li class ='list-group-item'>" +products[i] + "<span class='badge'>$"+price[i] +"</li>";
	totalprice = totalprice + price[i];
}

document.getElementById("customer-name").innerHTML ="Ratana";
document.getElementById("price").innerHTML ="$" +(totalprice-(totalprice*0.25));
productsElement.innerHTML=productstext;

var hour=new Date().getHours();
// var hour = 10;
if(hour<12){
	document.getElementById("greeting").innerHTML="Good Morning";
	// $("#greeting").html("Good morning");
}else if(hour<18){
	document.getElementById("greeting").innerHTML="Good Afternoon";
}else{
	document.getElementById("greeting").innerHTML="Good Evening";
}