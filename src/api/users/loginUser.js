import axios from "axios";

const loginRoute = "/api/users/login";

export async function loginUser({ email, password }) {
  try {
    const { data: user } = await axios.post(loginRoute, { email, password });
    return user;
  } catch (error) {
    console.log("Issue Signing in");
    throw error.response.data;
  }
}
