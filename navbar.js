const hamburger = document.querySelector(".hamburger");
const mobileMenu = document.querySelector(".mobile-menu");
const crossIcon = document.querySelector(".cross-icon");
const threebarIcon = document.querySelector(".threebar-icon");

hamburger.addEventListener("click", () => {
    if (mobileMenu.classList.contains("-top-96")) {
        mobileMenu.classList.remove("-top-96");
        mobileMenu.classList.add("top-8");
        threebarIcon.classList.add("hidden");
        crossIcon.classList.remove("hidden");
    } else if (mobileMenu.classList.contains("top-8")) {
        mobileMenu.classList.remove("top-8");
        mobileMenu.classList.add("-top-96");
        threebarIcon.classList.remove("hidden");
        crossIcon.classList.add("hidden");
    }
});
