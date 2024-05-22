let users = []
let initialUserId = 1

module.exports = {
    getAllUsers: () => users,
    addUser: (userData) => {
        userData.id = initialUserId++
        users.push(userData)
    },
    getUser: (id) => {
        for (let user of users) {
            if (user.id === id) {
                return user
            }
        }
    },
    updateUser: (id, newUserData) => {
        for (let user of users) {
            if (user.id === id) {
                let idx = users.indexOf(user.id)
                users.splice(idx, 1)
                let updatedUser = {}
                updatedUser.id = user.id
                updatedUser.name = newUserData.name
                updatedUser.password = newUserData.password
                users.push(updatedUser)
                return updatedUser
            }
        }
    },
    deleteUser: (id) => {
        for (let user of users) {
            if (user.id === id) {
                let idx = users.indexOf(user.id)
                users.splice(idx, 1)
            }
        }
    },
}
