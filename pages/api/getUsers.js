import axios from "axios";

export default async function handler(req, res) {
  let response = {};
  if (req.method === "POST") {
    // Process a POST request
  } else {
    const usersData = await getUsers();
    response = usersData.data;
  }
  res.send(response);
}

async function getUsers() {
  return axios.get("https://api.github.com/users");
}
