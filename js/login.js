const preUsers = [
    {
        username: "Matute",
        email: "matute@gmail.com",
        password: "test1234",
        admin: true,
    },
  
    {
        username: "Paula",
        email: "paula@gmail.com",
        password: "test1234",
        admin: false
    },
   
];

document.addEventListener("DOMContentLoaded", function () {
    const loginButton = document.getElementById("login-btn");
    const logoutButton = document.getElementById("logout-btn");

    const users = JSON.parse(localStorage.getItem("users")) || [];

    if (users.length === 0) {
        localStorage.setItem("users", JSON.stringify(preUsers));
    }

    loginButton.addEventListener("click", function () {
        const username = document.getElementById("login-username").value;
        const email = document.getElementById("login-email").value;
        const password = document.getElementById("login-password").value;
        const user = users.find(x => x.username === username && x.password === password && x.email === email);

        const isUserLogged = localStorage.getItem("userLogged");

        if (isUserLogged) {
            alert('Ya existe una sesion abierta, debes desloguearte primero');
            return;
        };

        if (user) {
            console.log('Inicio de sesión exitoso');
            const userLogginIn = [{
                username: user.username,
                email: user.email,
                password: user.password,
                admin: user.admin,
                eminence: user.eminence ? user.eminence : null
            }];
            localStorage.setItem("userLogged", JSON.stringify(userLogginIn));

            window.location.href = "../index.html";

        } else {
            alert('Credenciales incorrectas');
        };
    });

    logoutButton.addEventListener("click", function () {
        localStorage.removeItem("userLogged");
        alert('Sesión cerrada');
    });

    // const userList = document.getElementById("user-list");

    // const userButtons = {};

    // function deleteUser(username) {
    //     const index = users.findIndex(user => user.username === username);
    //     if (index !== -1) {
    //         users.splice(index, 1);
    //         localStorage.setItem("users", JSON.stringify(users));
    //         renderUserList();
    //     }
    // }

    // function renderUserList() {
    //     userList.innerHTML = "";

    //     users.forEach(user => {
    //         const row = document.createElement("tr");
    //         const username = user.username;
    //         const deleteButton = document.createElement("button");
    //         deleteButton.textContent = "Eliminar";
    //         deleteButton.addEventListener("click", function () {
    //             deleteUser(username);
    //         });
    //         userButtons[username] = deleteButton;
    //         row.innerHTML = `
    //             <td>${username}</td>
    //             <td>${user.email}</td>
    //             <td>${user.password}</td>
    //             <td>${user.admin ? "Sí" : "No"}</td>
    //             <td></td>
    //         `;
    //         row.querySelector("td:last-child").appendChild(deleteButton);
    //         userList.appendChild(row);
    //     });
    // }

    // renderUserList();
});
