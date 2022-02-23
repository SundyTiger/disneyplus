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
const filterMovie = (data) => {
  return disneyplus.post("/movies/filter", data);
};
const filterData = (data) => {
  return disneyplus.post("/movies/filterData", data);
};
const addWatchList = (email, title) => {
  return disneyplus.post("/watchlist", {
    email: email,
    title: title,
  });
};
const removeWatchList = (email, title) => {
  return disneyplus.put("/watchlist", {
    email: email,
    title: title,
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
  filterMovie,
  addWatchList,
  removeWatchList,
  filterData,
};
