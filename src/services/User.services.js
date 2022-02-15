import disneyplus from "./disneyPlusServices";

const UserLogIn = (email, password) => {
  return disneyplus.post("/login", {
    email: email,
    password: password,
  });
};
const UserRegister = (email, password) => {
  return disneyplus.post("/register", {
    email: email,
    password: password,
  });
};
const UserMovies = () => {
  return disneyplus.get("/movies");
};
const UserSeries = () => {
  return disneyplus.get("serials");
};
const UserSeasons = (name) => {
  return disneyplus.get(`seasons/${name}`);
};
const UserForgotPass = (email, password) => {
  return disneyplus.post("forgetpassword", {
    email: email,
    password: password,
  });
};
export default {
  UserLogIn,
  UserMovies,
  UserRegister,
  UserSeries,
  UserSeasons,
  UserForgotPass,
};
