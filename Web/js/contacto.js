const inputs = document.getElementsByTagName("input");
const submit = document.querySelector("form button");

submit.addEventListener("click", () => {
    let valido = true;
    Array.prototype.forEach.call(inputs, (input) => {
        if (input.value === "") {
            valido = false;
        }
    });

    if (valido) {
        document.querySelector("form").innerHTML = `
        <div class="bg-success text-center shadow p-5">
            <h2 class="text-light">Correo enviado con éxito</h2>
            <h5>En breves recibirá más información</h5>
        </div>
        `;
    }
});
