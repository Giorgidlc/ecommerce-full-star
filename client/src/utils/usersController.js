const API_URL = "http://localhost:3000/users/"

const getUser = async () => {
    
    const user = await fetch (API_URL)
    const data = await user.json()
    return data
}

export default getUser