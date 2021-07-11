import axios from 'axios'

const createUserRoute = "/api/users/signUp"

export async function createNewUser({ email, password, lastName, firstName }) {
  try {
    const { data: user } = await axios.post(createUserRoute, { email, password, lastName, firstName })
    return user
  } catch (error) {
    console.log("Issue Signing Up")
    throw error.response.data
  }
}