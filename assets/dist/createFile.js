const createCards = (employees) => {
    console.log(employees)
    let employeeCards = [];
    for(let i = 0; i < employees.length; i++){
        switch(employees[i].getRole()) {
            case '🍵 Manager':
employeeCards.push(`        <div class="card m-4 col-12 col-md-4 col-xl-3">
            <div class="card-header">
                <h2 class="card-title">${employees[i].getName()}</h2>
                <h3 class="card-subtitle">${employees[i].getRole()}</h3>
            </div>
            <div class="container">
                <ul class="list-group">
                    <li class="list-group-item">ID: ${employees[i].getID()}</li>
                    <li class="list-group-item">Email: <a href="mailto:${employees[i].getEmail()}">${employees[i].getEmail()}</a></li>
                    <li class="list-group-item">Office Number: ${employees[i].officeNumber}</li>
                </ul>
            </div>
        </div>`);
                break;
            case '⚙️ Engineer':
employeeCards.push(`        <div class="card m-4 col-12 col-md-4 col-xl-3">
            <div class="card-header">
                <h2 class="card-title">${employees[i].getName()}</h2>
                <h3 class="card-subtitle">${employees[i].getRole()}</h3>
            </div>
            <div class="container">
                <ul class="list-group">
                    <li class="list-group-item">ID: ${employees[i].getID()}</li>
                    <li class="list-group-item">Email: <a href="mailto:${employees[i].getEmail()}">${employees[i].getEmail()}</a></li>
                    <li class="list-group-item">Github: <a href="${employees[i].getGithub()}" target="_blank">${employees[i].github}</a></li>
                </ul>
            </div>
        </div>`);
                break;
            case '🏫 Intern':
employeeCards.push(`        <div class="card m-4 col-12 col-md-4 col-xl-3">
            <div class="card-header">
                <h2 class="card-title">${employees[i].getName()}</h2>
                <h3 class="card-subtitle">${employees[i].getRole()}</h3>
            </div>
            <div class="container">
                <ul class="list-group">
                    <li class="list-group-item">ID: ${employees[i].getID()}</li>
                    <li class="list-group-item">Email: <a href="mailto:${employees[i].getEmail()}">${employees[i].getEmail()}</a></li>
                    <li class="list-group-item">School: ${employees[i].getSchool()}</li>
                </ul>
            </div>
        </div>`);
                break;
        }
    }
    employeeCards = employeeCards.join('\n')
    console.log(employeeCards)
    return employeeCards;
}

const createFile = (data) => {
    return `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.5.0/css/bootstrap.min.css">
    <link rel="stylesheet" href="./styles.css">
    <title>${data[0].name}'s Team</title>
</head>
<body>
    <header class="jumbotron jumbotron-fluid">
        <div class="container">
            <div class="row justify-content-center">My Team</div>
        </div>    
    </header>
    <div class="container-fluid d-flex flex-row flex-wrap justify-content-center">
${createCards(data)}
        
    </div>

    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.5.1/jquery.slim.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.16.1/umd/popper.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.5.0/js/bootstrap.min.js"></script>
</body>
</html>
`
}

module.exports = createFile;