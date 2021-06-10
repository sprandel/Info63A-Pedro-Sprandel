<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="style.css">
    <title>Cadastre-se</title>
</head>
<body>
    <div id='container'>
        <h1>Cadastre-se</h1>
        <form action="cadastrar.php" method="post">
            <div class="caixas">
                <label for="username">Usuário:</label><br>
                <input type="text" name="username" class="inputs"></input><br>
            </div>
            <div class="caixas">
                <label for="senha">Senha:</label><br>
                <input type="text" name="password" class="inputs"></input><br>
            </div>
            <input type="submit" value="Cadastrar" id="button"></input>
        </form>
    </div>
</body>
</html>