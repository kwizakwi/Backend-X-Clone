import data from "../../data/data.js";

export function getUsers(req, res) {
  const currentuser = data.currentUser;

  try {
    res.send(currentuser);
  } catch (error) {
    res.send(error);
  }
}
