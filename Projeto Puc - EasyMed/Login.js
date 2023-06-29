const wrapper = document.querySelector('.wrapper');
const loginLink = document.querySelector('.login-link');
const registerLink = document.querySelector('.register-link');
const btnPopup = document.querySelector('.btnLogin-popup');
const iconClose = document.querySelector('.icon-close');

registerLink.addEventListener('click', () => {
    wrapper.classList.add('active');
});

loginLink.addEventListener('click', () => {
    wrapper.classList.remove('active');
});

btnPopup.addEventListener('click', () => {
    wrapper.classList.add('active-popup');
});

iconClose.addEventListener('click', () => {
    wrapper.classList.remove('active-popup');
});

// BOTÕES DE OCULTAR E MOSTRAR SENHA
let btn = document.querySelector('.iconeye')

btn.addEventListener('click', () => {
    let inputSenha = document.querySelector('#loginPassword')

    if (inputSenha.getAttribute('type') === 'password') {
        inputSenha.setAttribute('type', 'text')
    }
    else {
        inputSenha.setAttribute('type', 'password')
    }

})

let btn2 = document.querySelector('.iconeye2')

btn2.addEventListener('click', () => {
    let inputSenha = document.querySelector('#password')

    if (inputSenha.getAttribute('type') === 'password') {
        inputSenha.setAttribute('type', 'text')
    }
    else {
        inputSenha.setAttribute('type', 'password')
    }

})

// LOGIN E REGISTRO DE USUÁRIOS 
let users = [];
const usersJSON = localStorage.getItem('users');
if (usersJSON) {
    users = JSON.parse(usersJSON);
}

const registerForm = document.getElementById('registerForm');
registerForm.addEventListener('submit', function (event) {
    event.preventDefault();
    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    const userExists = users.some(function (user) {
        return user.username === username;
    });

    if (userExists) {
        showMessage('Esse e-mail já foi cadastrado.');
        return;
    }

    const newUser = {
        username: username,
        email: email,
        password: password
    };
    users.push(newUser);

    localStorage.setItem('users', JSON.stringify(users));

    showMessage('Registro concluído.');
    registerForm.reset();
});

const loginForm = document.getElementById('loginForm');
loginForm.addEventListener('submit', function (event) {
    event.preventDefault();

    const email = document.getElementById('loginEmail').value;
    const password = document.getElementById('loginPassword').value;

    const user = users.find(function (user) {
        return user.email === email && user.password === password;
    });

    if (user) {
        showMessage('Bem vindo, ' + user.username + '!');
        window.location.href = 'Index.html';
        loginForm.reset();
    } else {
        showMessage('Email ou senha inválidos.');
    }
});

function showMessage(message) {
    const messageDiv = document.getElementById('message');
    messageDiv.innerText = message;
}

// BOTÃO LEMBRAR A SENHA

const passwordInput = document.getElementById('loginPassword');
const rememberCheckbox = document.getElementById('remember-forgot');
const loginbtn = document.getElementById('loginbtn');

const storedPassword = localStorage.getItem('rememberedPassword');
if (storedPassword) {
    passwordInput.value = storedPassword;
    rememberCheckbox.checked = true;
}

loginbtn.addEventListener('click', function () {
    const password = passwordInput.value;

    if (rememberCheckbox.checked) {
        localStorage.setItem('rememberedPassword', password);
    } else {
        localStorage.removeItem('rememberedPassword');
    }
});
window.addEventListener('load', function () {
    if (rememberCheckbox.checked && passwordInput.value) {
        passwordInput.value = localStorage.getItem('rememberedPassword');
    }
});

//Voltar a tela de login caso não esteja logado
if (!usuarioCorrente.login) {
    window.location.href = Login.html;
}

function initPage() {

    // Associa a função de logout ao botão
    document.getElementById('loginbtn').addEventListener('click', logoutUser);

    // Informa o nome do usuário logado
    document.getElementById('username').innerHTML = usuarioCorrente.nome;

    // Lista os usuários 
    exibeUsuarios();

}

// Associa ao evento de carga da página a função para verificar se o usuário está logado
window.addEventListener('load', initPage);

