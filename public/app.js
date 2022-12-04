const port = "http://localhost:3000";

function add() {
    const userName = document.getElementById('name').value;
    const userEmail = document.getElementById('email').value;

    axios.post(port + '/user', {
        name: userName, email: userEmail
    }).then((res) => {
        alert("successfully Added")
        document.getElementById("name").value = '';
        document.getElementById("email").value = '';
        showData()


    }).catch((err) => {
        alert("Change Email Please")
        console.log(err);
    })


}


function showData() {

    axios.get(port + '/user')
        .then((res) => {

            document.getElementById('tblper').innerHTML = " ";
            res.data.map((data) => {
                var saveData = `
            <tr id="${data._id}">
            <td id="userName_">${data.name}</td>
            <td id="email_">${data.email}</td>
            <td><button href="javascript:void(0)" onclick=edit("${data.name}","${data.email}","${data._id}");id="edit">EDIT</button></td>
            <td><button href="javascript:void(0)" onclick=delet("${data._id}"); id="delete">DELETE</button></td>
            </tr>
            `
                document.getElementById('tblper').innerHTML += saveData
            })
        }).catch((err) => {
            console.log(err);
        })
}
function edit(name_, email_, _id) {

    document.getElementById(_id).innerHTML = `
    <tr id="${_id}">
            <td><input type="text" id="${_id}-name_" value="${name_}" /></td>
            <td><input type="text" id="${_id}-email_" value="${email_}" /></td>
            <button type="button" onclick="update('${_id}')" class="btn btn-success">Update</button>
        </tr>`
    document.getElementById('_id').value = _id;

}

function update(_id) {
    const updateName = document.getElementById(`${_id}-name_`).value
    const updateEmail = document.getElementById(`${_id}-email_`).value

    axios.put(port + '/user/' + _id, {
        name: updateName, email: updateEmail
    })
        .then((res) => {
            alert('update SucessFully')
            showData();
        }).catch((err) => {
            alert("Can't updates")

        })
}

function delet(_id) {
    axios.delete(port + '/user/' + _id)
        .then((res) => {
            alert("delete Data sucessFully")
            showData();
        }).catch((err) => {
            alert("Can't delete data")
        })
}
showData();