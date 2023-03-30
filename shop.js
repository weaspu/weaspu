
let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
showSlides(slideIndex += n);
}

function currentSlide(n) {
showSlides(slideIndex = n);
}

function showSlides(n) {
let i;
let slides = document.getElementsByClassName("mySlides");
let dots = document.getElementsByClassName("dot");
if (n > slides.length) {slideIndex = 1}    
if (n < 1) {slideIndex = slides.length}
for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
}
for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
}
slides[slideIndex-1].style.display = "block";  
dots[slideIndex-1].className += " active";
}

var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}

function addItem(){
  var option = document.getElementById("select").value;
  var quantity = document.getElementById("quantity").value;
  var listItem = document.createElement('li');
  listItem.appendChild(document.createTextNode(option + '-' + quantity));

  var deleteButton = document.createElement('button');
  deleteButton.appendChild(document.createTextNode("Remove"));
  deleteButton.onclick = function(){
    this.parenNode.remove();

  };
  listItem.appendChild(deleteButton);


  document.getElementById("order").appendChild(listItem);
  document.getElementById("quantity").value = "";

};

document.getElementById("orderform").addEventListener("submit", function(event){
  // event.preventDefault();

  alert("Your order has been received, Thank You!")
})