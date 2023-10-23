const API_URL= "http://localhost:3000/users/id/"

const getUser = async (email) => {
    
    const user = await fetch (API_URL + email)
    const data = await user.json()
    return data
}


export default getUser