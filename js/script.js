document.addEventListener("DOMContentLoaded", () => {

    // ADD ELEMENTS

    const header = document.getElementById("header");
    const menuToggle = document.querySelector(".menu-toggle");
    const navMenu = document.querySelector(".nav-menu");
    const navLinks = document.querySelectorAll(".nav-menu a");
    const overlay = document.querySelector(".nav-overlay");
    const sections = document.querySelectorAll("section");
    const icon = menuToggle.querySelector("i");
    const closeBtn = document.querySelector(".menu-close");
    
    // OPEN MENU
  
    function openMenu() {

        navMenu.classList.add("active");
        overlay.classList.add("active");

        icon.classList.remove("fa-bars");
        icon.classList.add("fa-xmark");
        icon.classList.add("rotate");

        document.body.style.overflow = "hidden";

    }

    //  CLOSE MENU

    function closeMenu() {

        navMenu.classList.remove("active");
        overlay.classList.remove("active");

        icon.classList.remove("fa-xmark");
        icon.classList.add("fa-bars");
        icon.classList.remove("rotate");

        document.body.style.overflow = "";

    }

    //  TOGGLE MENU

    menuToggle.addEventListener("click", () => {

        if (navMenu.classList.contains("active")) {
            closeMenu();
        } else {
            openMenu();
        }
    });

    //  CLOSE MENU WHEN CLICK OVERLAY

    closeBtn.addEventListener("click", closeMenu);


    //  CLOSE MENU AFTER CLICK LINK

    navLinks.forEach(link => {
        link.addEventListener("click", () => {
            if (window.innerWidth <= 768) {
                closeMenu();
            }
        });
    });

    //  HEADER EFFECT
    
    function headerScroll() {
        if (window.scrollY > 40) {
            header.classList.add("scrolled");
        } else {
            header.classList.remove("scrolled");
        }
    }

    //  ACTIVE NAVIGATION    

    function activeSection() {
        let current = "";
        sections.forEach(section => {
            const top = section.offsetTop - 120;
            const height = section.offsetHeight;
            if (
                window.scrollY >= top &&
                window.scrollY < top + height
            ) {
                current = section.id;
            }
        });

        navLinks.forEach(link => {
            link.classList.remove("active");
            if (link.getAttribute("href") === "#" + current) {
                link.classList.add("active");
            }
        });
    }


    //  WINDOW SCROLL

    window.addEventListener("scroll", () => {
        headerScroll();
        activeSection();
    });


    //  RESIZE

    window.addEventListener("resize", () => {
        if (window.innerWidth > 768) {
            closeMenu();
        }

        if (typeof AOS !== "undefined") {
            AOS.refresh();
        }
    });

    //  INITIAL

    headerScroll();
    activeSection();
});