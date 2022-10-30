function getLoginData() {
    let loginValue = document.getElementById(loginId).value;
    let passwordValue = document.getElementById(passwordId).value;

    let loginData = {
        login: loginValue,
        password: passwordValue
    }
    return loginData;
}

function authentificationUser() {
    let loginData = getLoginData();
    console.log(loginData);
}

function openRegistrationPage() {
    window.location.href = registrationPage;
}

const loginId = 'login';
const passwordId = 'password';
const registrationPage = 'file:///Users/evelinacholak/Documents/FE/html/registration.html';