function toggleMenu ( ) {
    const menu = document.querySelector(".hamburger_list");
    const icon = document.querySelector(".hamburger_icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
}

// Function to toggle the 'open' class and change content
function toggleContent() {
    var span = document.getElementById('firstname');
  
    // Toggle the 'open' class to trigger the transition
    span.classList.toggle('open');
  
    // Change the content during the transition
    if (span.classList.contains('open')) {
      span.textContent = 'Stephen';
    } else {
      span.textContent = 'Opeyemi';
    }
  }
  
  // Automatically trigger the toggleContent function after a delay (e.g., 3 seconds)
  setInterval(toggleContent, 8000); // Adjust the delay (in milliseconds) as needed


/* BEST VERSION */

// let currentIndex = 0;
// const slideInterval = 12000; // Set the interval in milliseconds
// let slideTimer;

// function showSlide(index) {
//     const slider = document.querySelector('.slider');
//     const slides = document.querySelectorAll('.slider img');
//     const slideWidth = slides[0].clientWidth;

//     currentIndex = index;

//     // Check if it's the last slide and adjust the translation
//     const transition = currentIndex === slides.length - 1 ? `translateX(0)` : `translateX(${-currentIndex * slideWidth}px)`;

//     slider.style.transform = transition;
// }

// function nextSlide() {
//     const slides = document.querySelectorAll('.slider img');
//     currentIndex = (currentIndex + 1) % slides.length;
//     showSlide(currentIndex);
// }

// function prevSlide() {
//     const slides = document.querySelectorAll('.slider img');
//     currentIndex = (currentIndex - 1 + slides.length) % slides.length;
//     showSlide(currentIndex);
// }

// function startSlider() {
//     slideTimer = setInterval(nextSlide, slideInterval);
// }

// function stopSlider() {
//     clearInterval(slideTimer);
// }

// // Start the slider on page load
// startSlider();



let currentIndex = 0;
const slideInterval = 8000; // Set the interval in milliseconds
let slideTimer;

function initializeSlider() {
    const slider = document.querySelector('.slider');
    const slides = document.querySelectorAll('.slider img');
    const firstClone = slides[0].cloneNode(true);
    const lastClone = slides[slides.length - 1].cloneNode(true);

    slider.appendChild(firstClone);
    slider.insertBefore(lastClone, slides[0]);
}

function showSlide(index) {
    const slider = document.querySelector('.slider');
    const progressBar = document.querySelector('.progress_bar');
    const slides = document.querySelectorAll('.slider img');
    const slideWidth = slides[0].clientWidth;
    
    currentIndex = index;
    if (currentIndex > 3){
        currentIndex = 0; 
    }

    const transition = `translateX(${-currentIndex * slideWidth}px)`;
    slider.style.transition = 'transform 0.8s ease-in-out';
    slider.style.transform = transition;

    // Update progress bar after the transition completes
    slider.addEventListener('transitionend', () => {
        const progress = (currentIndex / (slides.length - 6)) * 100;
        progressBar.style.width = `${progress}%`;
    });
}

function nextSlide() {
    const slider = document.querySelector('.slider');
    const slides = document.querySelectorAll('.slider img');

    currentIndex++;

    if (currentIndex >= slides.length) {
        currentIndex = 1;
        slider.style.transition = 'none';
        slider.style.transform = `translateX(0)`;
    }

    setTimeout(() => {
        slider.style.transition = 'transform 0.8s ease-in-out';
        showSlide(currentIndex);
    }, 0);
}

function prevSlide() {
    const slider = document.querySelector('.slider');
    const slides = document.querySelectorAll('.slider img');

    currentIndex--;

    if (currentIndex < 0) {
        currentIndex = slides.length - 2;
        slider.style.transition = 'none';
        slider.style.transform = `translateX(${-currentIndex * slides[0].clientWidth}px)`;
    }

    setTimeout(() => {
        slider.style.transition = 'transform 0.8s ease-in-out';
        showSlide(currentIndex);
    }, 0);
}

function startSlider() {
    slideTimer = setInterval(nextSlide, slideInterval);
}

function stopSlider() {
    clearInterval(slideTimer);
}

// Initialize the slider
initializeSlider();

// Start the slider on page load
startSlider();




  const professions = ["Computer Engineer", "Home Automation", "Full Stack Developer", "IT Consultant", "Graphics Designer"];
  let initialIndex = 0; // Change from currentIndex to initialIndex
  const professionElement = document.querySelector('.profile_text_professions');

  function typeProfession(index, text, delay = 200) {
    if (index < text.length) {
      professionElement.innerHTML += text.charAt(index);
      setTimeout(() => typeProfession(index + 1, text, delay), delay);
    } else {
      setTimeout(() => eraseProfession(text), 2500);
    }
  }

  function eraseProfession(text) {
    const currentText = professionElement.innerHTML;
    if (currentText.length > 0) {
      professionElement.innerHTML = currentText.slice(0, -1);
      setTimeout(() => eraseProfession(text), 50);
    } else {
      initialIndex = (initialIndex + 1) % professions.length; // Change from currentIndex to initialIndex
      setTimeout(() => typeProfession(0, professions[initialIndex]), 500); // Change from currentIndex to initialIndex
    }
  }

  // Initial start
  setTimeout(() => typeProfession(0, professions[initialIndex]), 50); // Change from currentIndex to initialIndex

  // Update profession on window resize (responsive)
  window.addEventListener('resize', () => {
    initialIndex = 0; // Change from currentIndex to initialIndex
    professionElement.innerHTML = ''; // Clear existing text
    typeProfession(0, professions[initialIndex]); // Change from currentIndex to initialIndex
  });













