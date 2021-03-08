<?php
session_start();
?>

<!DOCTYPE html>
<html lang="es">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="shortcut icon" href="../img/logo.png" type="image/x-icon" />
    <!-- BOOTSTRAP CSS -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-giJF6kkoqNQ00vy+HMDP7azOuL0xtbfIcaT9wjKHr8RbDVddVHyTfAAsrekwKmP1" crossorigin="anonymous" />
    <!-- BOOTSTRAP JS -->
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/js/bootstrap.bundle.min.js" integrity="sha384-ygbV9kiqUc6oa4msXn9868pTtWMgiQaeYH7/t7LECLbyPA2x65Kgf80OJFdroafW" crossorigin="anonymous" defer></script>
    <script src="https://kit.fontawesome.com/b828dc0944.js" crossorigin="anonymous"></script>
    <link rel="stylesheet" href="../css/basico.css" />
    <script type="module" src="../js/basico.js" defer></script>
    <title>Iniciar sesión</title>
</head>

<body>

    <!-- NAVBAR -->
    <nav class="navbar navbar-expand-md navbar-dark sticky-top">
        <div class="container-fluid">
            <a class="navbar-brand fs-4 d-flex align-items-center" href="../index.html">
                <img src="../img/logo.png" alt="Logo" width="40" height="40" class="me-2" />
                Dentalia
            </a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
                    <li class="nav-item">
                        <a class="nav-link" aria-current="page" href="../nav/acerca.html">Acerca de</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="../nav/servicios.html">Servicios</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="../nav/equipo.html">Equipo</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="../nav/noticias.html">Noticias</a>
                    </li>
                    <li class="nav-item">
                        <a class="btn" href="../nav/contacto.html">Contacto</a>
                    </li>
                    <li class="nav-item login ms-2">
                        <div class="dropdown">
                            <button class="btn btn-dark dropdown-toggle" type="button" id="dropdownMenuButton" data-bs-toggle="dropdown" aria-expanded="false">
                                <i class="fas fa-user"></i>
                            </button>
                            <ul class="dropdown-menu dropdown-menu-end" aria-labelledby="dropdownMenuButton"></ul>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    </nav>

    <?php
    //// IMPRIMIR MENSAJE RESULTADO ////
    if (isset($_SESSION["login"])) {
        echo $_SESSION["login"];
        unset($_SESSION["login"]);
    }

    //// INICIAR SESIÓN ////
    if (isset($_POST["usr"]) && isset($_POST["pwd"])) {
        $conn = new mysqli("localhost", "root", "", "dentalia");
        // $conn = new mysqli("sql205.epizy.com", "epiz_28101974", "yQN6qd04wxz", "epiz_28101974_dentalia");
        $usr = $conn->real_escape_string($_POST["usr"]);
        $pwd = $conn->real_escape_string($_POST["pwd"]);

        if ($usr != "" && $pwd != "") {
            $sql = "SELECT usr, pwd FROM usuario WHERE usr='$usr' AND pwd='$pwd'";
            $result = $conn->query($sql);

            if ($result->num_rows > 0) {
                $_SESSION["user"] = $usr;
                if (isset($_POST["recuerdame"])) {
                    setcookie("user", $usr);
                }
                $_SESSION["login"] = '<p class="text-center py-2 bg-success text-light">Usuario logueado con éxito</p>';
            } else {
                $_SESSION["login"] = '<p class="text-center py-2 bg-danger text-light">Usuario y/o contraseña erróneos</p>';
            }

            $conn->close();
        } else {
            $_SESSION["login"] = '<p class="text-center py-2 bg-danger text-light">Usuario y/o contraseña erróneos</p>';
        }

        header("Location: login.php");
    }
    ?>

    <!-- FORMULARIO DE REGISTRO -->
    <div class="container my-5">
        <h2 class="text-center my-4">Iniciar sesión</h2>
        <div class="row justify-content-center">
            <div class="col-md-6 p-5 shadow border">
                <form action="login.php" method="POST">
                    <div class="form-group mb-3">
                        <label for="usr">Nombre de usuario</label>
                        <input type="text" name="usr" id="usr" class="form-control" autocomplete="off" autofocus <?php echo isset($_SESSION["user"]) ? "disabled" : "" ?>>
                    </div>
                    <div class="form-group my-3">
                        <label for="pwd">Contraseña</label>
                        <input type="password" name="pwd" id="pwd" class="form-control" autocomplete="off" <?php echo isset($_SESSION["user"]) ? "disabled" : "" ?>>
                    </div>
                    <div class="form-check">
                        <input class="form-check-input" type="checkbox" value="" id="recuerdame" <?php echo isset($_SESSION["user"]) ? "disabled" : "" ?>>
                        <label class="form-check-label" for="recuerdame">
                            Recuérdame
                        </label>
                    </div>
                    <div class="form-group mt-3">
                        <input class="btn btn-success w-100" type="submit" value="Enviar">
                    </div>
                </form>
            </div>
        </div>
    </div>

</body>

</html>