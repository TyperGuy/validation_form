const form = document.getElementById("form");
const userName = document.getElementById("username");
const email = document.getElementById("email");
const pass = document.getElementById("pass");
const confirm = document.getElementById("passconfirm");

form.addEventListener('submit', (e) => {

    checkInputs();

});

function checkInputs() {

    const userNameValue = userName.value.trim();
    const emailValue = email.value.trim();
    const passValue = pass.value.trim();
    const confirmValue = confirm.value.trim();

    if (userNameValue === '') {
        setErrorFor(userName, 'User Name não pode ser Vázio')

    } else {

        setSucessFor(userName)

    }

}

function setErrorFor(input, message) {

    const formControl = input.parentElement
    const small = formControl.querySelector('small')

    small.innerText = message
    formControl.className = 'form-control error'

}