import { deleteUser, getUsers } from "./api/userApi";
import "./index.css";

//  Populate table of users via API call
getUsers().then(result => {
  let usersBody = "";

  result.forEach(user => {
    usersBody += `
      <tr>
        <td><a href="#" data-id="${user.id}" class="deleteUser">Delete</a></td>
        <td>${user.id}</td>
        <td>${user.firstName}</td>
        <td>${user.lastName}</td>
        <td>${user.email}</td>
      </tr>
    `;

    document.getElementById('users').innerHTML = usersBody;

    const deleteLinks = document.getElementsByClassName('deleteUser');

    Array.from(deleteLinks, link => {
      link.onclick = (ev) => {
        const element = ev.target;
        ev.preventDefault();
        deleteUser(element.attributes['data-id'].value);
        const row = element.parentNode.parentNode;
        row.remove();
      }
    });
  });
});
