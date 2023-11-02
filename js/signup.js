document.addEventListener("DOMContentLoaded", function () {
    const signupButton = document.getElementById("signup-btn");
    const usernameInput = document.getElementById("signup-username");
    const emailInput = document.getElementById("signup-email");
    const passwordInput = document.getElementById("signup-password");

    const users = JSON.parse(localStorage.getItem("users")) || [];
    
    signupButton.addEventListener("click", function () {
        const username = usernameInput.value;
        const password = passwordInput.value;
        const email = emailInput.value;

        if (username.trim() === "") {
            alert("El campo de usuario no puede estar vacío.");
            return;
        }

        if (password.trim() === "") {
            alert("El campo de contraseña no puede estar vacío.");
            return;
        }

        if (username.length < 3 || username.length > 15) {
            alert("El nombre de usuario debe tener al menos 3 caracteres pero no mas de 15.");
            return;
        }

        if (password.length < 6 || password.length > 20 || !/\d/.test(password)) {
            alert("La contraseña debe tener entre 6 y 20 caracterés y contener al menos un número.");
            return;
        }

        const emailRegex = /^[A-Za-z0-9._%-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/;
        if (!email.match(emailRegex)) {
            alert("El formato del correo electrónico no es válido.");
            return;
        }

        if (users.find(x => x.username === username)) {
            alert("El usuario ya existe");
        } else if (users.find(x => x.email === email)){
            alert("El email ya existe");
        } else {
            const admin = false;
            users.push({ username, email, password, admin});
            localStorage.setItem("users", JSON.stringify(users));
            alert('Registro exitoso');
            window.location.href = "login.html"
        }
    });
})