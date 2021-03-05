//// SCROLLTOP ////
function scrollTop() {
    let existBtn = document.querySelector(".btnScrollTop");

    if (!(typeof existBtn != "undefined" && existBtn != null)) {
        const icon = document.createElement("i");
        icon.classList.add("fas", "fa-arrow-up");

        const scrollTop = document.createElement("div");
        scrollTop.className = "btnScrollTop btnScrollTopHide";

        scrollTop.appendChild(icon);
        document.body.appendChild(scrollTop);
    }

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

//// DROPDOWN MENU ////
const dropdown = document.querySelector("nav .dropdown-menu");
async function user(path) {
    let php = await fetch(`${path}/php/dropdown.php?path=${path}`);
    dropdown.innerHTML = await php.text();
}

export { scrollTop, user };
