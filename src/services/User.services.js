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
  return disneyplus.get("/movies", {
    headers: {
      authorization: `Bearer ${this.$store.state.token}`,
    },
  });
};
const UserSeries = () => {
  return disneyplus.get("/serials", {
    headers: {
      authorization: `Bearer ${this.$store.state.token}`,
    },
  });
};
const UserSeasons = (name) => {
  return disneyplus.get(`/seasons/${name}`, {
    headers: {
      authorization: `Bearer ${this.$store.state.token}`,
    },
  });
};
const UserForgotPass = (email,password) => {
    return disneyplus.post('/forgetpassword', {
        email: email,
        password:password
    })
}
exports default {
    UserLogIn,UserMovies,UserRegister,UserSeries,UserSeasons
}