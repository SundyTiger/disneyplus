import disneyplus from "./disneyPlusServices";

const AdminLogIn = (email, password) => {
  return disneyplus.post("/admin/login", {
    email: email,
    password: password,
  });
};
const AddMovies = (data) => {
  return disneyplus.post("/movies", data, {
    headers: {
      ["authorization"]: `Bearer ${localStorage.getItem("token")}`,
    },
  });
};
export default {
  AdminLogIn,
  AddMovies,
};
