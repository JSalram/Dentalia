<?php

session_start();
$path = $_GET['path'];

if (isset($_POST["logout"])) {
    session_destroy();
    unset($_COOKIE);
    setcookie("user", "", time() - 3600);
    header("Location: ../index.html");
}

if (isset($_COOKIE["user"])) {
    $_SESSION["user"] = $_COOKIE["user"];
}

if (isset($_SESSION["user"])) {
    echo '
    <li class="dropdown-item text-center text-primary">
        ' . ucfirst($_SESSION["user"]) . '
    </li>
    <li>
        <a id="carro" href="' . $path . '/nav/carrito.html" class="d-flex dropdown-item justify-content-between">
            Ver carro
            <div class="d-inline-block ms-2">
            </div>
        </a>
    </li>';
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
