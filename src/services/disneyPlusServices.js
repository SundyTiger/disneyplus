import axios from "axios";

const disneyServices = axios.create({
  baseURL: "http://localhost:3000/disneyplushotstar/",
  headers: {
    "Content-Type": "application/json",
  },
});
export default disneyServices;
