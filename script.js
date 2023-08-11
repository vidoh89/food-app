'use strict';

//navbar toggle 

const navbar = document.querySelector("[data-navbar]");
const navbarLinks =document.querySelectorAll("[data-navbar-links]");
const menuToggleBtn = document.querySelector("[data-menu-toggle-btn]");

menuToggleBtn.addEventListener("click",function(){
    navbar.classList.toggle("active");
    this.classList.toggle("active");
});

for(let i=0;i<navbarLinks.length;i++){
    navbarLinks[i].addEventListener("click",function(){
        navbar.classList.toggle("active");
        menuToggleBtn.classList.toggle("active");
    });
}

// header sticky &back to top

const header = document.querySelector("[data-header]");
const backTopBtn = document.querySelector("[data-back-top-btn]");

window.addEventListener("scroll",function(){
    if(window.scrollY>=100){
        header.classList.add("active");
        backTopBtn.classList.add("active");
    }else{
        header.classList.remove("active");
        backTopBtn.classList.remove("active");
    }

});

// search box toggle

const searchBtn=document.querySelector("[data-search-btn]");
const searchContainer= document.querySelector("[data-search-container]");
const searchSubmitBtn=document.querySelector("[data-search-submit-btn]");
const searchCloseBtn= document.querySelector("[data-search-close-btn]");

const searchBoxElems= [searchBtn,searchContainer,searchCloseBtn,searchCloseBtn];

for (let i=0; i<searchBoxElems.length;i++){
    searchBoxElems[i].addEventListener("click",function(){
        searchContainer.classList.toggle("active");
        document.body.classList.toggle("active");
    });
}

// move cycle on scroll

const deliveryBoy=document.querySelector("[data-delivery-boy]");

let deliveryBoyMove = -80;
let lastScrollPos=0;

window.addEventListener("scroll",function(){
    let deliveryBoyTopPos= deliveryBoy.getBoundingClientRect().top;

    if(deliveryBoyTopPos< 500 && deliveryBoyTopPos>-250){
        let activeScrollPos= window.scrollY;

        if(lastScrollPos<activeScrollPos){
            deliveryBoyMove +=1;
        }else{
            deliveryBoyMove -=1;
        }
        lastScrollPos= activeScrollPos;
        deliveryBoy.style.transform = `translateX(${deliveryBoyMove}px)`;
    }
});
function showMore(){
    let longText = document.querySelector('.section-text')
    if(longText.style.height==='auto'){
        longText.style.height='100px';
    }else{
        longText.style.height='auto';
    }
  
}
const parentContainer = document.querySelector('.read-more-container');

parentContainer.addEventListener('click', (e) =>{
    const current = e.target;
    const isReadMoreBtn = current.className.includes('read-more-btn');
    if(!isReadMoreBtn)return;

    const currentText=e.target.parentNode.querySelector('.read-more-text');
    currentText.classList.toggle('read-more-text--show');
    
    current.textContent = current.textContent.includes('Read More') ?
    "Read less" : "Read More";
});
const parentContainer2 = document.querySelector('.read-more-container2');

parentContainer2.addEventListener('click', (e) =>{
    const current = e.target;
    const isReadMoreBtn = current.className.includes('read-more-btn2');
    if(!isReadMoreBtn)return;

    const currentText=e.target.parentNode.querySelector('.read-more-text2');
    currentText.classList.toggle('read-more-text--show2');
    
    current.textContent = current.textContent.includes('Read More') ?
    "Read less" : "Read More";
});

const parentContainer3 = document.querySelector('.read-more-container3');

parentContainer3.addEventListener('click', (e) =>{
    const current = e.target;
    const isReadMoreBtn = current.className.includes('read-more-btn3');
    if(!isReadMoreBtn)return;

    const currentText=e.target.parentNode.querySelector('.read-more-text3');
    currentText.classList.toggle('read-more-text--show3');
    
    current.textContent = current.textContent.includes('Read More') ?
    "Read less" : "Read More";
});



