{
  mybutton = document.getElementById("myBtn");
  bar = document.querySelector(".bar");
  cart = document.querySelector(".cart");
  window.onscroll = function () { scrollFunction() };
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
function topFunction(){
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
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
  })
};


let sidebar_hid = document.querySelector(".sidebar-plc-hidden");
let xemthem = document.querySelector(".xemthem");
let count = 1;
console.log(sidebar_hid);


function xemthem_sidebar() {
  if (count === 1) {
    sidebar_hid.style.display = 'block';
    xemthem.innerHTML = "Kéo lên";
    count++;
  } else {
    sidebar_hid.style.display = 'none';
    xemthem.innerHTML = "Xem thêm";
    count = 1;
  }

} 
