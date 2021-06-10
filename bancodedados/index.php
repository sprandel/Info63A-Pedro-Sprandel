
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="style.css">
    <title>Login</title>
</head>
<body>
    <div id='container'>
        <h1>Login</h1>
        <form action="login.php" method="POST">
            <div class="caixas">
                <label for="username">Usuário:</label><br>
                <input type="text" name="username" class="inputs"></input><br>
            </div>
            <div class="caixas">
                <label for="password">Senha:</label><br>
                <input type="text" name="password" class="inputs"></input><br>
            </div>
            <input type="submit" name="confirm" value="Entrar" id="button"></input>
            <p>Caso não tenha um conta <a href="cadastro.php">clique aqui</a></p>
        </form>
    </div>
</body>
</html>