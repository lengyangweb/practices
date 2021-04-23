class User {
    constructor(name, username, email) {
        this.name = name;
        this.username = username;
        this.email = email;
    }
}

class UI {
    static displayUsers() {
        const users = [
            {
                name: 'John Doe',
                username: 'johnD',
                email: 'john.d@atm.com'
            },
            {
                name: 'Bob Smith',
                username: 'BobS',
                email: 'bob.s@atm.com'
            }
        ];

        users.forEach(user => {
            UI.addUser(user);
        });
    }

    static addUser(user) {
        const {name, username, email } = user;
        const userList = document.querySelector('#user-list');

        const row = document.createElement('tr');

        row.innerHTML = `
            <td>${name}</td>
            <td>${username}</td>
            <td>${email}</td>
            <td>
                <button class="btn btn-danger delete">X</button>
            </td>
        `;

        userList.appendChild(row);
    }
}

document.addEventListener('DOMContentLoaded', UI.displayUsers());