// Navbar Animation
$(".ali").hide();
$(".navbarContainer").on("mouseenter", function() {
    $(".ali").show(100);
});
$(".navbarContainer").on("mouseleave", function() {
    $(".ali").hide(50);
});

// .numbersContainer Animation

var items = document.querySelectorAll(".num");

function updateNum(entry) {
    entry.forEach((item) => {
        if (item.isIntersecting) {
            const target = parseInt(item.target.getAttribute('data-target'));
            const startVal = target - 25;
            const inc = (target - startVal) / 100;
            let currentVal = startVal;

            const interval = setInterval(() => {
                currentVal += inc;
                item.target.textContent = Math.round(currentVal);

                if(currentVal >= target) {
                    clearInterval(interval);
                }
            }, 20);
        }
    });
}

const observer = new IntersectionObserver(updateNum, {
    threshold: 0.4,
});

items.forEach((item) => {
    observer.observe(item);
})

// Carousal

// var imgs = $(".img");
// var lftNav = $(".navI1");
// var rightNav = $(".navI2");

// let currentSlide = 0;

// function showSlide(index) {
//     imgs.each((img, i) => {
//         if(img === index) {
//             $(img).css("display", "block");
//         } else {
//             $(img).css("display", "none")
//         }
//     })
// }

// function prevSlide() {
//     currentSlide--;
//     if (currentSlide < 0) {
//         currentSlide = imgs.length -1
//     }
//     showSlide(currentSlide);
// }

// function nextSlide() {
//     currentSlide++;
//     if (currentSlide >= imgs.length) {
//         currentSlide = 0;
//     }
//     showSlide(currentSlide);
// }

// showSlide(currentSlide);

// lftNav.on("click", prevSlide);
// rightNav.on("click", nextSlide);

// function automateSlide() {
//     nextSlide();
// }

// const alideShowInterval = setInterval(automateSlide, 2000);

// Select all slides
const slides = document.querySelectorAll(".slide");

// loop through slides and set each slides translateX
slides.forEach((slide, indx) => {
  slide.style.transform = `translateX(${indx * 100}%)`;
});

// select next slide button
const nextSlide = document.querySelector(".btn-next");

// current slide counter
let curSlide = 0;
// maximum number of slides
let maxSlide = slides.length - 1;

// add event listener and navigation functionality
nextSlide.addEventListener("click", function () {
  // check if current slide is the last and reset current slide
  if (curSlide === maxSlide) {
    curSlide = 0;
  } else {
    curSlide++;
  }

  //   move slide by -100%
  slides.forEach((slide, indx) => {
    slide.style.transform = `translateX(${100 * (indx - curSlide)}%)`;
  });
});

// select next slide button
const prevSlide = document.querySelector(".btn-prev");

// add event listener and navigation functionality
prevSlide.addEventListener("click", function () {
  // check if current slide is the first and reset current slide to last
  if (curSlide === 0) {
    curSlide = maxSlide;
  } else {
    curSlide--;
  }

  //   move slide by 100%
  slides.forEach((slide, indx) => {
    slide.style.transform = `translateX(${100 * (indx - curSlide)}%)`;
  });
});
