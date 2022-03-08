module.exports= teamData => {return `
<!DOCTYPE html>
<html lang="en">
    
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Team Profile</title>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" />
    <link rel="stylesheet" href="style.css">
</head>
    
<body>
    <header class="container-fluid">
        <h1 class="p-3 fs-2 text-center">My Team</h1>
    </header>
    <main class="container">
            ${generateCard(teamData)}
    </main>
</body>
    
</html>`
};