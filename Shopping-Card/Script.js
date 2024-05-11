//baskets
let plusbutton1=document.getElementById('plus1')
let minusbutton1=document.getElementById('minus1')
let quantity1 = document.getElementById('quantity1')

let totalprice=document.getElementById('total-price')

function addquantity(){
    quantity1.innerHTML++;
    totalprice.innerHTML=Number(totalprice.innerHTML)+100;
}
function minusquantity(){
    if (quantity1.innerHTML>0){
        quantity1.innerHTML--;
        totalprice.innerHTML=Number(totalprice.innerHTML)-100;
    }
}
plusbutton1.addEventListener('click',addquantity)
minusbutton1.addEventListener('click',minusquantity)

//sockss
let plusbutton2=document.getElementById('plus2')
let minusbutton2=document.getElementById('minus2')
let quantity2 = document.getElementById('quantity2')

function addquantity2(){
    quantity2.innerHTML++;
    totalprice.innerHTML=Number(totalprice.innerHTML)+20;
}
function minusquantity2(){
    if (quantity2.innerHTML>0){
        quantity2.innerHTML--;
        totalprice.innerHTML=Number(totalprice.innerHTML)-20;
    }
}
plusbutton2.addEventListener('click',addquantity2)
minusbutton2.addEventListener('click',minusquantity2)

//bag
let plusbutton3=document.getElementById('plus3')
let minusbutton3=document.getElementById('minus3')
let quantity3 = document.getElementById('quantity3')

function addquantity3(){
    quantity3.innerHTML++;
    totalprice.innerHTML=Number(totalprice.innerHTML)+50;
}
function minusquantity3(){
    if (quantity3.innerHTML>0){
        quantity3.innerHTML--;
        totalprice.innerHTML=Number(totalprice.innerHTML)-50;
    }
}
plusbutton3.addEventListener('click',addquantity3)
minusbutton3.addEventListener('click',minusquantity3)

// baskets like
// Select the element by its ID
var likeIcon = document.getElementById('like1');

// Add an event listener for the 'click' event
likeIcon.addEventListener('click', function() {
    // Toggle the color of the icon
    if (likeIcon.style.color === 'black') {
        likeIcon.style.color = 'red'; // Change to the default color or any other color you prefer
    } else {
        likeIcon.style.color = 'black'; // Change to the desired color when clicked
    }
});

// socks like
// Select the element by its ID
var likeIcon2 = document.getElementById('like2');

// Add an event listener for the 'click' event
likeIcon2.addEventListener('click', function() {
    // Toggle the color of the icon
    if (likeIcon2.style.color === 'black') {
        likeIcon2.style.color = 'red'; // Change to the default color or any other color you prefer
    } else {
        likeIcon2.style.color = 'black'; // Change to the desired color when clicked
    }
});


//bag like
// Select the element by its ID
var likeIcon3 = document.getElementById('like3');

// Add an event listener for the 'click' event
likeIcon3.addEventListener('click', function() {
    // Toggle the color of the icon
    if (likeIcon3.style.color === 'black') {
        likeIcon3.style.color = 'red'; // Change to the default color or any other color you prefer
    } else {
        likeIcon3.style.color = 'black'; // Change to the desired color when clicked
    }
});


//----------------baskets trash---------------//
// Select the trash icon element by its ID
var trashIcon = document.getElementById('trash1');

// Add an event listener for the 'click' event
trashIcon.addEventListener('click', function() {
    // Select the parent card-body element and remove it from the DOM
    var cardBody = document.querySelector('.card-body1');
    cardBody.parentNode.removeChild(cardBody);
});

// Add an event listener for the 'click' event
trashIcon.addEventListener('click', function() {
    // Select the total price element by its ID and set its inner text to an empty string
    var totalPrice = document.getElementById('total-price');
    if (totalPrice) {
        totalPrice.innerText = "0"; // Set inner text to empty string
    }
});




//----------------socks trash---------------//
// Select the trash icon element by its ID
var trashIcon2 = document.getElementById('trash2');

// Add an event listener for the 'click' event
trashIcon2.addEventListener('click', function() {
    // Select the parent card-body element and remove it from the DOM
    var cardBody2 = document.querySelector('.card-body2');
    cardBody2.parentNode.removeChild(cardBody2);
});
// Add an event listener for the 'click' event
trashIcon2.addEventListener('click', function() {
    // Select the total price element by its ID and set its inner text to an empty string
    var totalPrice2 = document.getElementById('total-price');
    if (totalPrice2) {
        totalPrice2.innerText = "0"; // Set inner text to empty string
    }
});




//----------------bags trash---------------//
// Select the trash icon element by its ID
var trashIcon3 = document.getElementById('trash3');

// Add an event listener for the 'click' event
trashIcon3.addEventListener('click', function() {
    // Select the parent card-body element and remove it from the DOM
    var cardBody3 = document.querySelector('.card-body3');
    cardBody3.parentNode.removeChild(cardBody3);
});
// Add an event listener for the 'click' event
trashIcon3.addEventListener('click', function() {
    // Select the total price element by its ID and set its inner text to an empty string
    var totalPrice3 = document.getElementById('total-price');
    if (totalPrice3) {
        totalPrice3.innerText = "0"; // Set inner text to empty string
    }
});
