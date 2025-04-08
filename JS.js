function Password(){
    let x= document.getElementById("Password");

    if(x.type== "password" ){
        x.type="text";
    }
    else{
        x.type="password";
    }
}

const folBtn= document.querySelector(".folBtn");

folBtn.addEventListener("click", function (){
  if(folBtn.innerText === "Follow"){
    folBtn.innerText = "Followed";
  }
  else{
    folBtn.innerText = "Follow";
  }
} )

let body = document.querySelector("body");
let toggle = document.querySelector(".toggle");
let day = document.querySelector(".day");
let night = document.querySelector(".night");
let nav = document.querySelector(".nav");
const cards = document.querySelectorAll(".cards");


toggle.addEventListener("click", () =>{
   document.body.classList.toggle('darkMode');
   if (document.body.classList.contains('darkMode')) {
    day.style.display = "inline";
    night.style.display = "none";
    nav.style.backgroundColor= rgb(19, 19, 19);
    nav.style.color = white;

} else {
  day.style.display = "none";
  night.style.display = "inline";
}
})

const menuIcon = document.querySelector('#menu');
        const navMenu = document.getElementById('navMenu');

        menuIcon.addEventListener('click', () => {
            navMenu.classList.toggle('active');
        });

        const navLinks = document.querySelectorAll('.nav a');
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                navMenu.classList.remove('active');
            });
        });


const carousel = document.querySelector('.inner_container2');
const kards = document.querySelectorAll('.Cards');
const prevBtn = document.querySelector('.prvBtn');
const nextBtn = document.querySelector('.nxtBtn');

const cardWidth = kards[0].offsetWidth + 20; 
const cardsPerView = 4;
let currentIndex =0;
const maxIndex= kards.length - cardsPerView;

function updateCarousel(){
  carousel.style.transform = `translateX(-${currentIndex * cardWidth}px)`;

  prevBtn.disabled = currentIndex === 0;
  nextBtn.disabled = currentIndex >= maxIndex;
}
nextBtn.addEventListener('click', () => {
  if (currentIndex < maxIndex) {
      currentIndex++;
      updateCarousel();
  }
});

prevBtn.addEventListener('click', () => {
  if (currentIndex > 0) {
      currentIndex--;
      updateCarousel();
  }
});

updateCarousel();


