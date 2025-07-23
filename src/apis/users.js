import axios from "./_api";

export const loginUser = (userBody) => axios.post("/users/login", userBody);
export const getMe = () => axios.get("/users/me");
