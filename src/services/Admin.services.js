import disneyplus from "./disneyPlusServices";

const AdminLogIn = (email, password) => {
  return disneyplus.post("admin/login", {
    email: email,
    password: password,
  });
};
const AddMovies = (data, result) => {};
export default {
  AdminLogIn,
};
