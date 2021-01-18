const icon = document.createElement("i");
icon.classList.add("fas", "fa-arrow-up");

const scrollTop = document.createElement("div");
scrollTop.className = "btnScrollTop btnScrollTopHide";

scrollTop.appendChild(icon);
document.body.appendChild(scrollTop);

const btnScrollTop = document.querySelector(".btnScrollTop");

btnScrollTop.addEventListener("click", function () {
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth",
    });
});

let viewPortHeight = window.innerHeight;

let nav = document.querySelector("nav.navbar");

window.onscroll = function () {
    scrollFunction();
};

window.onresize = function () {
    scrollFunction();
};

function scrollFunction() {
    if (window.innerWidth > 768) {
        if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
            nav.style.cssText = "\
            background: #023047;\
            padding: 8px";
        } else {
            nav.style.cssText = "\
            background: transparent;\
            padding-top: 20px 1em 0 1em";
        }
    } else {
        nav.style.cssText = "\
        background: #023047;\
        padding: 8px";
    }
    if (window.scrollY <= viewPortHeight) {
        btnScrollTop.className = "btnScrollTop btnScrollTopHide";
    } else {
        btnScrollTop.className = "btnScrollTop btnScrollTopShow";
    }
}
