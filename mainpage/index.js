//Get the button:

{mybutton = document.getElementById("myBtn");
bar = document.querySelector(".bar");
cart = document.querySelector(".cart");

window.onscroll = function () {scrollFunction()};

<<<<<<< HEAD
function scrollFunction() {
  if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
=======
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 40 || document.documentElement.scrollTop > 40) {
>>>>>>> parent of 7e5eb88 (234)
    mybutton.style.display = "block";
    bar.style.display = "flex";
    cart.style.display = "flex";
  } else {
    mybutton.style.display = "none";
    bar.style.display = "none";
        cart.style.display = "none";
  }
}
function topFunction() {
  document.body.scrollTop = 0; 
  document.documentElement.scrollTop = 0; 
}
}

<<<<<<< HEAD
// {
bar = document.querySelector(".bar");
cart = document.querySelector(".cart");
// window.onscroll = function() {scrollFunction()};
// function scrollFunction() {
//   if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
//     bar.style.display = "flex";
//     cart.style.display = "flex";
//   } else {
//     bar.style.display = "none";
//     cart.style.display = "none";
//   }
// } 
// }


const cardcheck = document.querySelector(".card-check");
function showupcheck() {
  cardcheck.style.display = "flex";
}
function notshowupcheck(){
  cardcheck.style.display = "none";
=======
{
bar = document.getElementsById("bar");
window.onscroll = function() {scrollFunction()};
function scrollFunction() {
  if (document.body.scrollTop > 30 || document.documentElement.scrollTop > 30) {
    bar.style.display = "flex";
  } else {
    bar.style.display = "none";
  }
}
>>>>>>> parent of 7e5eb88 (234)
}