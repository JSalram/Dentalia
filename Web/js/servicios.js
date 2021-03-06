const nombresServicios = document.querySelectorAll('.servicio');
const preciosServicios = document.querySelectorAll('.precio');
const btnAniade = document.querySelectorAll('.aniade');

let carroServicios;

if (!localStorage.getItem('carroServicios'))
{
    carroServicios =
    {
        servicios: []
    }

    for (let i = 0; i < nombresServicios.length; i++)
    {
        carroServicios.servicios.push
        (
            {
                nombre: nombresServicios[i].textContent,
                precio: parseFloat(preciosServicios[i].textContent.replace('€', '')),
                cantidad: 0,
            }
        )  
    }
}
else
{
    carroServicios = JSON.parse(localStorage.getItem('carroServicios'));
}   

for (let i = 0; i < btnAniade.length; i++)
{
    btnAniade[i].addEventListener('click', function(event)
    {
        carroServicios.servicios[i].cantidad++;
        localStorage.clear();
        localStorage.setItem('carroServicios', JSON.stringify(carroServicios));
    })
}