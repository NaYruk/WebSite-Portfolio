"use strict";

document.addEventListener('DOMContentLoaded', () => {
  // Carousel navigation
  const next = document.querySelector(".next");
  const prev = document.querySelector(".prev");

  if (next && prev) {
    next.addEventListener("click", () => {
      const items = document.querySelectorAll(".item");
      const slide = document.querySelector(".slide");
      if (slide && items.length > 0) {
        slide.appendChild(items[0]);
      }
    });

    prev.addEventListener("click", () => {
      const items = document.querySelectorAll(".item");
      const slide = document.querySelector(".slide");
      if (slide && items.length > 0) {
        slide.prepend(items[items.length - 1]);
      }
    });
  }

  // Scroll to top button
  const scrollTopBtn = document.getElementById('scrollTopBtn');

  if (scrollTopBtn) {
    // Show/hide button based on scroll position
    window.addEventListener('scroll', () => {
      if (window.pageYOffset > 300) {
        scrollTopBtn.classList.add('visible');
      } else {
        scrollTopBtn.classList.remove('visible');
      }
    });

    // Smooth scroll to top when clicked
    scrollTopBtn.addEventListener('click', () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
  }
});
