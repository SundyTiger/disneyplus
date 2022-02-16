import disneyplus from "./disneyPlusServices";

const UserLogIn = (email, password) => {
  return disneyplus.post("/login", {
    email: email,
    password: password,
  });
};
const UserRegister = (email, password, otp) => {
  return disneyplus.post("/register", {
    email: email,
    password: password,
    otp: otp,
  });
};
const OtpSend = (email) => {
  return disneyplus.post("/otp", {
    email: email,
  });
};
const UserMovies = () => {
  return disneyplus.get("/movies");
};
const UserSeries = () => {
  return disneyplus.get("/serials");
};
const UserSeasons = (name) => {
  return disneyplus.get(`/seasons/${name}`);
};
const UserForgotPass = (email, password, otp) => {
  return disneyplus.post("/forgetpassword", {
    email: email,
    password: password,
    otp: otp,
  });
};
export default {
  UserLogIn,
  UserMovies,
  UserRegister,
  UserSeries,
  UserSeasons,
  UserForgotPass,
  OtpSend,
};
