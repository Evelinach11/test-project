greeting();

function getUserName() {
    //TODO fetch name from BE
    return 'Evelina';
}

function greeting() {
    const greetingLabelId = 'greeting-id';
    let helloUser = 'Hello ' + getUserName();
    document.getElementById(greetingLabelId).innerHTML = helloUser;
}