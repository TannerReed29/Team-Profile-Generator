const genEmployeeCards = Data => {
    const manager = Data.manager.map(function(employee) {
        let mHtml = `
        <div class ="col card-deck card-body">
            <div class="card text-center bg-primary mb-3" style="width: 18rem;">
                <!---<img class="card-img-top" src="./" alt="img here">--->
                <div class="card-body">
                    <h5 class="card-title">${employee.name}</h5>
                    <p class="card-text">Manager</p>
                </div>
                <ul class="list-group list-group-flush">
                    <li class="list-group-item">ID: ${employee.id}</li>
                    <li class="list-group-item">Email: <a href="mailto:${employee.email}">${employee.email}</a></li>
                    <li class="list-group-item">Office number: ${employee.officeNum}</li>
                </ul>
            </div>
        </div>
        `;
        return mHtml
    });

    const engineer = Data.engineer.map(function(employee) {
        let eHtml = `
        <div class ="col card-deck card-body">
            <div class="card text-center bg-warning mb-3" style="width: 18rem;">
                <!---<img class="card-img-top" src="./" alt="img here">--->
                <div class="card-body">
                    <h5 class="card-title">${employee.name}</h5>
                    <p class="card-text">Engineer</p>
                </div>
                <ul class="list-group list-group-flush">
                    <li class="list-group-item">ID: ${employee.id}</li>
                    <li class="list-group-item">Email: <a href="mailto:${employee.email}">${employee.email}</a></li>
                    <li class="list-group-item">Github Username: <a href="https://github.com/${employee.github}">${employee.github}</a></li>
                </ul>
            </div>
        </div>
        `;
        return eHtml
    });
    
    const intern = Data.intern.map(function(employee) {
        let iHtml = `
        <div class ="col card-deck card-body">
        <div class="card text-center bg-success mb-3" style="width: 18rem;">
            <!---<img class="card-img-top" src="./" alt="img here">--->
            <div class="card-body">
                <h5 class="card-title">${employee.name}</h5>
                <p class="card-text">Intern</p>
            </div>
            <ul class="list-group list-group-flush">
                <li class="list-group-item">ID: ${employee.id}</li>
                <li class="list-group-item">Email: <a href="mailto:${employee.email}">${employee.email}</a></li>
                <li class="list-group-item">School: ${employee.school}</li>
            </ul>
        </div>
        </div>
        `;
        return iHtml
    });
    return [manager,engineer,intern]
}


module.exports = templateData => {
    return `
        <!DOCTYPE html>
        <html lang ="en">

        <head>
            <meta charset="UTF-8">
            <meta name ="viewport" content="width=device-width, initial-scale=1.0">
            <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
            <link rel="stylesheet" href="style.css">
        </head>
        <body class="bg-dark text-dark">
            <header>
                <h1 class="text-white text-center">My Project Team</h1>
            </header>
            <div class="container">
                <div class="container-fluid">
                    <div class="row row-cols-5">
                    ${genEmployeeCards(templateData)}
                    </div>
                </div>
            </div>
        </body>
        </html>
        `;
};