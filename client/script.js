const form = document.querySelector('form');

form.addEventListener('submit', evt => {
    let data = new FormData(form)
    data.append('id', Date.now().toString())
    evt.preventDefault();
    fetch('http://localhost:63342/Effective-Mobile/server/create.php', {
        method: 'POST',
        body: data
    }).then((response) => {
        response.json().then((json) => {
                render(json);
            }
        )
    }).catch((error) => {
        console.log(error);
    });
})

function render (json) {
    if (!!json.length) {
        let content = '';
        json.forEach( (item, index) => {
            content += `<tr>
                <td></td>
                <td>${item.name}</td>
                <td>${item.phone}</td>
                <td><button onclick="deleteUser(${item.id})" class="deleteBtn" type="submit">Удалить</button></td>
            </tr>`
        })
        document.querySelector('#alert').innerHTML = '';
        document.querySelector('#tbody').innerHTML = content;
    } else {
        document.querySelector('#tbody').innerHTML = '';
        document.querySelector('#alert').innerHTML = 'Список пользователей пуст!';
    }
}
function deleteUser(id) {
    let data = new FormData()
    data.append('id', id)
    fetch('http://localhost:63342/Effective-Mobile/server/delete.php', {
        method: 'POST',
        body: data
    }).then((response) => {
        response.json().then((json) => {
                render(json);
            }
        )
    }).catch((error) => {
        console.log(error);
    });
}

function getAllUsers () {
    fetch('http://localhost:63342/Effective-Mobile/server/getAll.php', {
    }).then((response) => {
        response.json().then((json) => {
                render(json);
            }
        )
    }).catch((error) => {
        console.log(error);
    });
}

getAllUsers();