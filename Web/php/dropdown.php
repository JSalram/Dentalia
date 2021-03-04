<?php

session_start();
// $_SESSION["user"] = "Javi";
// $_SESSION["admin"] = 1;
$path = $_GET['path'];

if (isset($_POST["logout"])) {
    session_destroy();
    header("Location: ../index.html");
}

if (isset($_SESSION["user"])) {
    if (isset($_SESSION["admin"])) {
        echo '<li><a href="' . $path . '/php/admin.php" class="dropdown-item">Administrar</a></li>';
    } else {
        echo '<li><a href="' . $path . '/nav/carrito.html" class="dropdown-item">Ver carro</a></li>';
    }

    echo '
    <li>
        <form action="' . $path . '/php/dropdown.php" method="POST">
            <input type="hidden" name="logout" value="logout">
            <input class="dropdown-item" type="submit" value="Cerrar sesión">
        </form>
    </li>';
} else {
    echo '
    <li><a href="' . $path . '/php/login.php" class="dropdown-item">Iniciar sesión</a></li>
    <li><a href="' . $path . '/php/registro.php" class="dropdown-item">Registrarse</a></li>
    ';
}
