var allProducts = document.querySelectorAll(".products li")
var div1 = document.querySelector("#div1")
var btn1 = document.querySelector("#showPrice")
var sum_price = document.querySelector("#sum_price")
var seleted_items = document.querySelector("#seleted_items")
var card_total_price = document.querySelector("#card_total_price")
var totalPrice = 0
var i = 1

div1.innerHTML += "<tr><td>#</td><td>Item</td><td>Price</td></tr>"

allProducts.forEach(function(item) {
    item.onclick = function() {

        totalPrice += +(item.getAttribute("price"))

        div1.innerHTML += "<tr><td>"+ i++ +"</td><td>" + document.getElementById("product-name").textContent + "</td><td>"+ item.getAttribute("price") +"</td></tr>"

        if(div1.innerHTML != "")
        {
            btn1.style.display = "block"
        }
    }
} )

btn1.onclick = function() {
    card_total_price.style.display = "block"
    sum_price.innerHTML = "$"+ totalPrice.toLocaleString()
    seleted_items.innerHTML = (i-1) + " Items"
}