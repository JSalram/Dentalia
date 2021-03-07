import { muestraProductos, scrollTop, user } from "./modulos.js";

window.onscroll = window.onload = () => {
    scrollTop();
};

async function dropdown() {
    await user("..");
    muestraProductos();
}
dropdown();
