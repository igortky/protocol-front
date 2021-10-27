import axios from "axios";
const routes = require("../config/routes.js");

export async function tokenHandler(token, setStatus) {
    await axios.post(routes.routes.dashboard_backend + "/v1/token",
        { token: token }).then(res => {
           setStatus(res.data);
        })
}