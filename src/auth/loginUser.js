import axios from "axios"

const loginRoute = "/api/login"

export async function loginUser({ username, password }) {
  try {
    const user = await axios.post(loginRoute, { username, password })
    localStorage.setItem("user", JSON.stringify(user))
    return user
  } catch (error) {
    console.log("Issue Signing in")
    console.dir(error)
  }
}