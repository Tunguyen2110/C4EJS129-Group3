
{
mybutton = document.getElementById("myBtn");
bar = document.querySelector(".bar");
cart = document.querySelector(".cart");
window.onscroll = function() {scrollFunction()};
function scrollFunction() {
  if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500) {
    bar.style.display = "flex";
    cart.style.display = "flex";
    mybutton.style.display = "block";
  } else {
    bar.style.display = "none";
    cart.style.display = "none";
    mybutton.style.display = "none";
  }
} 
}
let listBtnPlus = document.querySelectorAll('div.card-plus');
let listBtnMinus = document.querySelectorAll('div.card-minus');
let listCardCheck = document.querySelectorAll('div.card-check');
for (let i = 0; i < listBtnPlus.length; i++) {
  listBtnPlus[i].addEventListener('click', (e) => {
    listCardCheck[i].style.display = "flex";
  })
  listBtnMinus[i].addEventListener('click', (e) => {
    listCardCheck[i].style.display = "none";
  })};

