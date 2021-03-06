<?php

session_start();
// $_SESSION["user"] = "Javi";
$path = $_GET['path'];

if (isset($_POST["logout"])) {
    session_destroy();
    unset($_COOKIE);
    setcookie("user", "", time() - 3600);
    header("Location: ../index.html");
}

if (isset($_SESSION["user"]) || isset($_COOKIE["user"])) {
    echo '<li><a href="' . $path . '/nav/carrito.html" class="dropdown-item">Ver carro</a></li>';
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
