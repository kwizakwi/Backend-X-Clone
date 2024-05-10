import data from "../../data/data.js";

export default function postTweets(req, res) {
    
  try {
    let id = Math.round(Math.random() * 100).toString();
    data["tweets"].push({id, ...req.body});
    res.json({id, ...req.body});
  } catch (error) {
    res.status(500).json({ message : "Error lors de la creaction"});
    }
}
