fetch('https://reqres.in/api/users/23')
    .then(res => {
        if (res.ok) {
            console.log("SUCCESS")
        } else {
            console.log("NO SUCCESS")
        }
        res.json()
    })
    .then(data => console.log(data))
    .catch(error => console.log('ERROR')) // error is not caught

    // failure only shows up if there is a failure within fetch itself, not the api
