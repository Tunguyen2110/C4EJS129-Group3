//Get the button:

{mybutton = document.getElementById("myBtn");


window.onscroll = function() {scrollFunction()};

function scrollFunction1() {
  if (document.body.scrollTop > 30 || document.documentElement.scrollTop > 30) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}
function topFunction() {
  document.body.scrollTop = 0; 
  document.documentElement.scrollTop = 0; 
}
}

{
bar = document.querySelector(".bar");
window.onscroll = function() {scrollFunction()};
function scrollFunction() {
  if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
    bar.style.display = "flex";
  } else {
    bar.style.display = "none";
  }
} 
}

// {
//   cart = document.querySelector(".cart");
//   window.onscroll = function() {scrollFunction()};
//   function scrollFunction() {
//     if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
//       cart.style.display = "flex";
//     } else {
//       cart.style.display = "none";
//     }
//   }
//   }

const cardcheck = document.querySelector(".card-check");
function showupcheck() {
  cardcheck.style.display = "flex";
}
function notshowupcheck(){
  cardcheck.style.display = "none";
}