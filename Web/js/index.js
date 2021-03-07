import { muestraProductos, scrollTop, user } from "./modulos.js";

let nav = document.querySelector("nav.navbar");

window.onscroll = window.onresize = window.onload = () => {
    scrollFunction();
    scrollTop();
};

function scrollFunction() {
    if (window.innerWidth > 768) {
        if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
            nav.style.cssText = "\
            background: #023047;\
            padding: 8px 0";
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

async function dropdown() {
    await user(".");
    muestraProductos();
}
dropdown();
