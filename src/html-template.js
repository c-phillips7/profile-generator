const generateCardRole = role => {
    switch (role.getRole()) {
        case 'Manager':
            return `    <div class="card-body border border-secondary m-2">
                            <h5>Number: ${role.getOfficeNumber()}</h5>
                        </div>`
    }


}

const generateCard = data => {
    return `
    <div class="row justify-content-center">
            ${data.map(team => {
                return `
            <div class="col-8 col-lg-4 col-xl-3 mt-3">
                <div class="card border border-dark text-center">
                    <div class="card-header bg-primary">
                        <h3 class="card-title fs-1">${team.getName()}</h3>
                        <h5 class="card-subtitle fs-3">${team.getRole()}</h5>
                    </div>
                    <div class="card-body">
                        <div class="card-body border border-secondary m-2">
                            <h5>ID: ${team.getId()}</h5>
                        </div>
                        <div class="card-body border border-secondary m-2">
                            <h5>Email: <a class="card-link" href="mailto:${team.getEmail()}">${team.getEmail()}</a></h5>
                        </div>
                        ${generateCardRole(team)}
                    </div>
                </div>
            </div>`}).join('')}
        </div>`;
}

//generateCardRole for content specific to engineer, intern or manager




module.exports = teamData => {
    return `
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
    
</html>`;
}