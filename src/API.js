// constants
const baseURI = 'http://localhost:3000'
const loginURI = baseURI + '/login'
const validateURI = baseURI + '/validate'
const registerClientURI = baseURI + '/register'
const registerPmURI = baseURI + '/register/pm' 

// api
const get = (url) => {
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
// global
exports.validate = () => get(validateURI)

// client
exports.login = user => {
    if(user.isClient) {
        let bodyObject = {
            client: {
                email: user.email,
                password: user.password
            }
        }
        return post(loginURI, bodyObject)
    } else {
        let bodyObject = {
            project_manager: {
                email: user.email,
                password: user.password
            }
        }
        return post(loginURI, bodyObject)
    }
}

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

// project manager
exports.registerPM = pm => {
    let bodyObject = {
        project_manager: {
            first_name: pm.firstName,
            last_name: pm.lastName,
            email: pm.email,
            password: pm.password,
            company_name: pm.companyName
        }
    }
    return post(registerPmURI, bodyObject)
}