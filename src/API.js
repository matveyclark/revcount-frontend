// constants
const baseURI = 'http://localhost:3000'
const loginURI = baseURI + '/login'
const registerURI = baseURI + '/register'
const validateURI = baseURI + '/validate'
const projectsURI = baseURI + '/projects/'
const newRevisionURI = baseURI + '/revision/new'
const newProjectURI = baseURI + '/project/new'
const singleRevisionURI = baseURI + '/revision/'
const newCommentURI = baseURI + '/comment/new'
const inviteClientURI = baseURI + '/project/invite'

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
            "Accept": "application/json",
            "Authorization": localStorage.token
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
            first_name: user.firstName,
            last_name: user.lastName,
            company_name: user.companyName,
            email: user.email,
            password: user.password,
            user_type: userType
        }
    }
    return post(registerURI, bodyObject)
}

// projects
exports.getProjects = () => get(projectsURI)

exports.getSingleProject = projectID => {
    return get(projectsURI + projectID) 
}

exports.createNewProject = project => {
    let bodyObject = {
        project: {
            name: project.name,
            max_revisions: project.maxRevisions,
            email: project.email
            }
    }
    return post(newProjectURI, bodyObject)
}

exports.inviteClient = email => {
    let bodyObject = {
        email 
    }
    return post(inviteClientURI, bodyObject)
}

// revisions
exports.createRevision = (e, projectId) => {
    let bodyObject = {
        revision: {
            project_id: projectId,
            description: e.target.revision.value
        }
    }
    return post(newRevisionURI, bodyObject)
}

// comments
exports.getRevisionComments = id => get(singleRevisionURI + id + '/comments')

exports.createNewComment = (comment, username, revision, image) => {
    const formData = new FormData()
    formData.append('screenshot', image)
    formData.append('email', username)
    formData.append('content', comment)
    formData.append('revision', revision.id)
    fetch(newCommentURI, {
        method: "POST",
        body: formData 
    })
}