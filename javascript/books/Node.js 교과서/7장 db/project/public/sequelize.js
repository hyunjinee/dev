document.querySelectorAll('#user-list tr').forEach((el)=> {
    el.addEventListener('click', function() {
        const id = el.querySelector('td').textContent;
        getComment(id);
    })
})

async function getUser() {
    try {
        const res = await axios.get('/users')
        const users = res.data;
        console.log(users)
        const tbody = document.querySelector('#user-list tbody');
        tbody.innerHTML = ''
        users.map(function (user) {
            const row = document.createElement('tr');
            row.addEventListener('click', ()=> {
                getComment(user.id)
            })
            let td = document.createElement('td');
            td.textContent = user.id;
            row.appendChild(td);
            td = document.createElement('td')
            td.textContent = user.name;
            row.appendChild(td);
            td = document.createElement('td');
            td.textContent = user.age;
            row.appendChild(td);
            td = document.createElement('td')
            td.textContent = user.married ? "기혼" : '미혼'
            row.appendChild(td)
            tbody.appendChild(row)
        })
    } catch (err) {
        console.error(err)
    }
}