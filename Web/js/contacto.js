const inputs = document.getElementsByTagName("input");
const textarea = document.getElementsByTagName("textarea")[0];
const submit = document.querySelector("form button");

submit.addEventListener("click", () => {
    let valido = true;
    Array.prototype.forEach.call(inputs, (input) => {
        if (input.value === "") {
            valido = false;
        }
    });
    if (!inputs[inputs.length-1].checked || textarea.value === "") {
        valido = false;
    }

    console.log(valido)

    if (valido) {
        document.querySelector("form").innerHTML = `
        <div class="bg-success text-center shadow p-5">
            <h3 class="text-light">Formulario enviado con éxito ✓</h3>
            <h5>Estimado/a ${inputs[0].value}, pronto nos pondremos en contacto con usted, gracias.</h5>
        </div>
        `;
    }
});
