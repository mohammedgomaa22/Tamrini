
import languages from './lang.js';


// -------------------------------------

// ********** Sidebar Toggler **********
const sidebarToggler = () => {
    const sidebar = document.querySelector("nav .sidebar");
    
    document.addEventListener("click", (e) => {
        if (e.target.classList.contains("toggler")) {
            sidebar.classList.toggle("-translate-x-[100%]");
        } else {
            sidebar.classList.add("-translate-x-[100%]");
        }
    });
};
sidebarToggler();
// -------------------------------------

// ********** Swiper Images **********
const swiperJS = () => {
    const swiper = new Swiper( '.swiper-container.two', {
        pagination: '.swiper-pagination',
        paginationClickable: true,
        effect: 'coverflow',
        loop: true,
        centeredSlides: true,
        slidesPerView: 'auto',
        coverflow: {
            rotate: 0,
            stretch: 100,
            depth: 150,
            modifier: 1.5,
            slideShadows : false,
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        }         
    } );
};
swiperJS();
// -------------------------------------


// ***************************************************
const scrollSections = () => {
    // Start Variables
    const sectionSt = document.querySelector(".stats"),
        textNum = document.querySelectorAll(".stats .num");
    let started = false;
    // End Variables
        // ------------------
    // Start Coding
    function startCount(ele) {
        let num = ele.dataset.number;
        let count = setInterval(() => {
            ele.textContent++;
            if (ele.textContent == num) {
                clearInterval(count);
            }
        }, 1500 / num);
    };
    // End Coding
    // ------------------
    // Start Scrolling
    window.onscroll = () => {
        // Scroll To Stats
        if (window.scrollY >= sectionSt.offsetTop - 400) {
            if (!started) {
                textNum.forEach((text) => startCount(text));
            }
            started = true;
        };
    };
    // End Scrolling
};
// scrollSections();
// ***************************************************

const playVideo = () => {
    const ele = document.querySelector(".video"),
        play = document.querySelector(".video .over-btn"),
        pic = document.querySelector(".video .over-img");
    
    // -------------
    
    ele.addEventListener("click", () => {
        pic.style.display = "none";
        if (play.style.display == "none") {
            play.style.display = "flex";
        } else {
            play.style.display = "none";
        }
    });
};
playVideo();
// ***************************************************

const changeLanguage = () => {
    const changeBtn = document.querySelector(".language .lang"),
        elements = document.querySelectorAll("[data-text]");
    
    // --------------
    
    // Change BTN Content and set in localStorage
    changeBtn.addEventListener("click", () => {
        changeBtn.dataset.lang === "AR" ? changeBtn.dataset.lang = "EN": changeBtn.dataset.lang = "AR";
        setLanguage(changeBtn.dataset.lang);
        localStorage.setItem("language", changeBtn.dataset.lang.toUpperCase());
        changeBtn.innerHTML = changeBtn.dataset.lang.toUpperCase();
    });
    
    
    document.addEventListener("DOMContentLoaded", () => {
        const language = localStorage.getItem("language") || "AR";
        setLanguage(language);
        changeBtn.innerHTML = localStorage.getItem("language") || changeBtn.dataset.lang.toUpperCase();
    });

    // Set Language
    const setLanguage = (language) => {
        elements.forEach((ele) => {
            const languagesKey = ele.getAttribute("data-text");
            // -----------

            ele.textContent = languages[language.toLowerCase()][languagesKey];
            // --------

            // Change ele Style
        });
        let infoLand = document.querySelectorAll(".chan");

        infoLand.forEach((ch) => {
            if (language === "AR") {
                ch.classList.remove("text_left");
                ch.classList.add("text_right");
            } else {
                ch.classList.remove("text_right");
                ch.classList.add("text_left");
            }
        });
        document.dir = language === "AR" ? "rtl" : "ltr";
    };

};
changeLanguage();
// ***************************************************


