import jwtDecode from "jwt-decode";
const token = JSON.parse(localStorage.getItem("token"))

export const accessToken = () => jwtDecode(token.access)

export default token