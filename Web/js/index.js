const icon = document.createElement("i");
icon.classList.add("fas", "fa-arrow-up");

const scrollTop = document.createElement("div");
scrollTop.className = "btnScrollTop btnScrollTopHide";

scrollTop.appendChild(icon);
document.body.appendChild(scrollTop);

const btnScrollTop = document.querySelector(".btnScrollTop");

btnScrollTop.addEventListener("click", function ()
{
    window.scrollTo(0, 0);    
})

let viewPortHeight = window.innerHeight;

let nav = document.querySelector("nav.navbar");

window.onscroll = function () {
    scrollFunction();
};

function scrollFunction() {
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        nav.style.cssText = "\
        background: #023047;\
        padding: 8px";
    } else {
        nav.style.cssText = "\
        background: transparent;\
        padding-top: 20px 1em 0 1em";
    }
    if (window.scrollY <= viewPortHeight)
    {
        btnScrollTop.className = "btnScrollTop btnScrollTopHide";
    }
    else
    {
        btnScrollTop.className = "btnScrollTop btnScrollTopShow";
    }
}