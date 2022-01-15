const genEmployeeCards = Data => {
    const manager = Data.manager.map(function(employee) {
        let mHtml = `
        <div class="card text-center" style="width: 18rem;">
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
        `
        return mHtml
    });
    //return [manager,engineer,intern]
    return [manager]
}






// export function to gen entire page
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
        <body>
            <header>
                <h1 class="text-center">Project Team</h1>
            </header>
            ${genEmployeeCards(templateData)}
        </body>
        </html>
        `;
};