// constants
const baseURI = 'http://localhost:3000'
const loginURI = baseURI + '/login'
const validateURI = baseURI + '/validate'
const registerClientURI = baseURI + '/register'

// api
const get = url => {
    return fetch(url, {
        headers: {
            authorization: localStorage.token
        }
    })
    .then(resp => resp.json())
}

const post = (url, bodyObject) => {
    return fetch(url, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify(bodyObject)
    }).then(resp => resp.json())
}

// export functions
exports.login = user => {
    let bodyObject = {
        client: {
            email: user.email,
            password: user.password
        }
    }
    return post(loginURI, bodyObject)
}

exports.validate = () => get(validateURI)

exports.registerClient = client => {
    let bodyObject = {
        client: {
            first_name: client.firstName,
            last_name: client.lastName,
            email: client.email,
            password: client.password
        }
    }
    return post(registerClientURI, bodyObject)
}