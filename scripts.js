const slides = document.querySelectorAll(".slider-container .slide"); // get all the slides
const eraserR = document.querySelector(".eraser-r"); // zasłona prawa
const eraserL = document.querySelector(".eraser-l"); // zasłona lewa
const prevBtn = document.getElementById("previous"); // poprzedni slajd button
const nextBtn = document.getElementById("next"); // nestępny slajd button
const intervalTime = 5000; // czas wyswietlania slajdu
const eraserActiveTime = 700; // czas pokazania i schowania zasłon
let sliderInterval; // zmienna poptrzebana do ustawienia interwału i wyzerowania go w razie potrzeby

// następny slajd
const nextSlide = () => {

  eraserR.classList.add("move-r");
  eraserL.classList.add("move-l");

  setTimeout(() => {
    const activeSlide = document.querySelector(".slide.active");

    activeSlide.classList.remove("active");

    if (activeSlide.nextElementSibling) {
      activeSlide.nextElementSibling.classList.add("active");
    } else {
      slides[0].classList.add("active");
    }

    setTimeout(() => {
      eraserR.classList.remove("move-r");
      eraserL.classList.remove("move-l");
    }, 200);
  }, eraserActiveTime);
};

// poprzedni slajd
const prevSlide = () => {

  eraserR.classList.add("move-r");
  eraserL.classList.add("move-l");

  setTimeout(() => {
    const activeSlide = document.querySelector(".slide.active");

    activeSlide.classList.remove("active");

    if (activeSlide.previousElementSibling) {
      activeSlide.previousElementSibling.classList.add("active");
    } else {
      slides[slides.length - 1].classList.add("active");
    }

    setTimeout(() => {
      eraserR.classList.remove("move-r");
      eraserL.classList.remove("move-l");
    }, 200);
  }, eraserActiveTime);
};


nextBtn.addEventListener("click", () => {
  nextSlide();
  clearInterval(sliderInterval);
  sliderInterval = setInterval(nextSlide, intervalTime);
});

prevBtn.addEventListener("click", () => {
  prevSlide();
  clearInterval(sliderInterval);
  sliderInterval = setInterval(nextSlide, intervalTime);
});


// ustawienie interwału
sliderInterval = setInterval(nextSlide, intervalTime);