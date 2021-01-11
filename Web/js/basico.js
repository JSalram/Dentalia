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

window.onscroll = function ()
{
    if (window.scrollY <= viewPortHeight)
    {
        btnScrollTop.className = "btnScrollTop btnScrollTopHide";
    }
    else
    {
        btnScrollTop.className = "btnScrollTop btnScrollTopShow";
    }
}