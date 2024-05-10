import data from "../../data/data.js";

export function getTweets(req, res){
    try {
        res.status(200).json(data.tweets);
    } catch (error) {
       res.status(500).json({message: error.message}) 
    }
}