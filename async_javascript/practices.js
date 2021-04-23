const users = [];

async function getData() {
    let allUsers = [];
    let output = '';
    const data = await fetch('https://reqres.in/api/users?page2')
        .then(res => res.json())
        .catch(err => console.log(err));

    allUsers = data.data;

    allUsers.forEach((user) => {
        output += `<li>${user.email}</li>`;
    })

    setTimeout(() => {
        document.body.innerHTML = output;
    }, 1000)
};

getData();

console.log(users);