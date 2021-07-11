import axios from 'axios'

const USERS_URL = 'api/users'

export async function fetchAllUsers(token) {
  try {
    const { data: allUsers } = await axios.get(USERS_URL, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
    console.log('allUsers :>> ', allUsers);
    return allUsers
  } catch (error) {
    console.dir(error)
    throw error
  }
}