import disneyplus from "./disneyPlusServices";

const AdminLogIn = (email, password) => {
  return disneyplus.post("admin/login", {
    email: email,
    password: password,
  });
};

export default {
  AdminLogIn,
};
