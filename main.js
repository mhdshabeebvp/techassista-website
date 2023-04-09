//change navbar style on scroll
//  IMPORTANT
window.addEventListener("scroll", () => {
  document
    .querySelector("nav")
    .classList.toggle("window-scroll", window.scrollY > 0);
});

//show/hide FAQs answer

const faqs = document.querySelectorAll(".faq");
faqs.forEach((faq) => {
  faq.addEventListener("click", () => {
    faq.classList.toggle("open");

    // change icon
    const icon = faq.querySelector(".faq_icon i");
    if (icon.className === "uil uil-plus") {
      icon.className = "uil uil-minus";
    } else {
      icon.className = "uil uil-plus";
    }
  });
});

// show/hide nav menu

const menu = document.querySelector(".nav_menu");
const menuBtn = document.querySelector("#open-menu-btn");
const closeBtn = document.querySelector("#close-menu-btn");

menuBtn.addEventListener("click", () => {
  menu.style.display = "flex";
  closeBtn.style.display = "inline-block";
  menuBtn.style.display = "none";
});

//close nav menu
const closeNav = () => {
  menu.style.display = "none";
  closeBtn.style.display = "none";
  menuBtn.style.display = "inline-block";
};

closeBtn.addEventListener("click", closeNav);
// scroll section started
var scrollTrigger = 100;
var scrollTimeout;

// scroll to top function
function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
}

// scroll to bottom function
function scrollToBottom() {
  window.scrollTo({
    top: document.body.scrollHeight,
    behavior: "smooth",
  });
}

// show/hide scroll-to-top button
function showScrollToTop() {
  document.getElementById("scroll-to-top").style.display = "block";
  clearTimeout(scrollTimeout);
  scrollTimeout = setTimeout(hideScrollToTop, 2000);
}

function hideScrollToTop() {
  document.getElementById("scroll-to-top").style.display = "none";
}

// show/hide scroll-to-bottom button
function showScrollToBottom() {
  document.getElementById("scroll-to-bottom").style.display = "block";
  clearTimeout(scrollTimeout);
  scrollTimeout = setTimeout(hideScrollToBottom, 2000);
}

function hideScrollToBottom() {
  document.getElementById("scroll-to-bottom").style.display = "none";
}

// add event listeners to show/hide scroll-to-top button
window.addEventListener("scroll", function () {
  var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  if (scrollTop > scrollTrigger) {
    showScrollToTop();
  } else {
    hideScrollToTop();
  }
});

// add event listeners to show/hide scroll-to-bottom button
window.addEventListener("scroll", function () {
  var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  var bottomTrigger =
    document.body.scrollHeight - window.innerHeight - scrollTrigger;
  if (scrollTop > bottomTrigger) {
    hideScrollToBottom();
  } else {
    showScrollToBottom();
  }
});

// add click event listener to scroll-to-top button
document.getElementById("scroll-to-top").addEventListener("click", scrollToTop);

// add click event listener to scroll-to-bottom button
document
  .getElementById("scroll-to-bottom")
  .addEventListener("click", scrollToBottom);

// hide buttons initially
hideScrollToTop();
hideScrollToBottom();
