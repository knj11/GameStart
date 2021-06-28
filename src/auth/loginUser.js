import axios from "axios"

const loginRoute = "/api/users/login"

export async function loginUser({ email, password }) {
  try {
    const response = await axios.post(loginRoute, { email, password })
    return response
  } catch (error) {
    console.log("Issue Signing in")
    throw error.response.data
  }
}