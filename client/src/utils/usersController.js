const API_URL = "http://localhost:5000/auth/profile"

const getUser = async () => {
    
    const user = await fetch (API_URL)
    const data = await user.json()
    return data
}

export default getUser

//tenemos que capturar el token
//tenemos que habilitar el login