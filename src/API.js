// constants
const baseURI = 'http://localhost:3000'
const loginURI = baseURI + '/login'
const registerURI = baseURI + '/register'
const validateURI = baseURI + '/validate'
const projectsURI = baseURI + '/projects'

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

// user
exports.login = user => {
    let bodyObject = {
        user: {
            email: user.email,
            password: user.password,
        }
    }
    return post(loginURI, bodyObject)
}

exports.register = (user, userType) => {
    userType = userType ? "client" : "pm"
    let bodyObject = {
        user: {
            email: user.email,
            password: user.password,
            user_type: userType
        }
    }
    return post(registerURI, bodyObject)
}

// projects
exports.getProjects = () => get(projectsURI)