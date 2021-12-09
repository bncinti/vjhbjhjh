import { User } from './user.js';
const url = 'https://jsonplaceholder.typicode.com/users/';
var users = [];
const ul = document.querySelector('#users');
fetch(url)
    .then(res => res.json())
    .then(data => {
    data.forEach((user) => {
        let user2 = new User(user.id, user.username, user.email);
        users.push(user2);
    });
    users.forEach((user) => {
        let li = document.createElement('li');
        li.textContent = user.username;
        ul.appendChild(li);
    });
});
