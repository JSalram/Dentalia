import { scrollTop } from "./basico.js";

let nav = document.querySelector("nav.navbar");

window.onscroll = function () {
    scrollFunction();
    scrollTop();
};

window.onresize = function () {
    scrollFunction();
    scrollTop();
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
}
