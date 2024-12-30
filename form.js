const handleSubmit = (e) => {

    console.log("aaya")
    e.preventDefault()
    const UserData = []
    const name = document.getElementById("name").value;
    const Email = document.getElementById("email").value
    const formdata = {
        name: name,
        Email: Email
    }
    UserData.push(formdata)





}