let carroServicios = JSON.parse(localStorage.getItem('carroServicios'));
const tbody = document.querySelector('.container-servicios');
const total = document.querySelector('.total');
const nServicios = document.querySelector('.cantidadTotal');

for (let i = 0; i < carroServicios.servicios.length; i++)
{
    if (carroServicios.servicios[i].cantidad > 0)
    {
        let tr = document.createElement('tr');
        tr.innerHTML = 
        `
        <td>
            <div class="row">
            <div class="col-md-3 text-left">
                <img
                src="../img/servicio${i+1}.jpg"
                alt=""
                class="img-fluid d-none d-md-block rounded mb-2 shadow"
                />
            </div>
            <div class="col-md-9 text-left mt-sm-2">
                <h4 class="nombre">${carroServicios.servicios[i].nombre}</h4>
            </div>
            </div>
        </td>
        <td class="precio">${carroServicios.servicios[i].precio}€</td>
        <td>
            <input
            type="number"
            class="cantidad form-control form-control-lg text-center"
            value="${carroServicios.servicios[i].cantidad}"
            min=0
            />
        </td>
        <td class="actions">
            <div class="text-right">
            <button
                class="btnEliminar btn btn-white border-secondary bg-white btn-md mb-2"
            >
                <i class="fas fa-trash"></i>
            </button>
            </div>
        </td>    
        `
        tr.classList.add('servicio');
        tbody.appendChild(tr);
    }   
}

const cantidad = document.querySelectorAll('.cantidad');
const nombre = document.querySelectorAll('.nombre');
const precio = document.querySelectorAll('.precio');
const btnEliminar = document.querySelectorAll('.btnEliminar');

nServicios.textContent = totalServicios();
total.textContent = sumaTotal() + '€';

for (let i = 0; i < cantidad.length; i++)
{
    cantidad[i].addEventListener('change', function(event)
    {
        let nuevaCantidad = cantidad[i].value;
        let servicioModificado = buscaServicio(nombre[i].textContent);
        carroServicios.servicios[servicioModificado].cantidad = nuevaCantidad;
        total.textContent = sumaTotal() + '€';
        localStorage.clear();
        localStorage.setItem('carroServicios', JSON.stringify(carroServicios));
    })

    btnEliminar[i].addEventListener('click', function(event)
    {
        let servicioModificado = buscaServicio(nombre[i].textContent);
        cantidad[i].value = 0;
        carroServicios.servicios[servicioModificado].cantidad = 0;
        total.textContent = sumaTotal() + '€';
        localStorage.clear();
        localStorage.setItem('carroServicios', JSON.stringify(carroServicios));
        btnEliminar[i].parentElement.parentElement.parentElement.remove();
        nServicios.textContent = totalServicios();
    })

}

function buscaServicio(nombre)
{
    let i = 0;

    while (nombre !== carroServicios.servicios[i].nombre)
    {
        i++;    
    }

    return i;
}

function sumaTotal()
{
    let total = 0;
    for (let i = 0; i < cantidad.length; i++)
    {
        total += cantidad[i].value * parseFloat(precio[i].textContent.replace('€', ''));
    }
    return total;
}

function totalServicios()
{
    return document.querySelectorAll('.servicio').length;
}