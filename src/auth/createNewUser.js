import axios from 'axios'

const createUserRoute = "/api/users/signUp"

export async function createNewUser({email, password}) {
  try {
    const user = await axios.post(createUserRoute, {email, password})
    localStorage.setItem("user", JSON.stringify(user))
    return user
  } catch (error) {
    console.log("trouble creating new user")
    console.dir(error)
  }
}