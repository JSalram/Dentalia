window.onscroll = () => {
    scrollTop();
};

function scrollTop() {
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

    if (window.scrollY <= viewPortHeight) {
        btnScrollTop.className = "btnScrollTop btnScrollTopHide";
    } else {
        btnScrollTop.className = "btnScrollTop btnScrollTopShow";
    }
}

export { scrollTop };
