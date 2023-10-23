import getUser from "../utils/usersController";

const loaderUser = async () => {
    const user = await getUser()
    return user
}

console.log(loaderUser())

export default loaderUser
