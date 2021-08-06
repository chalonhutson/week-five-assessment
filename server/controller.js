// let fortunes = require("./fortunes.json")

const { runMain } = require("module");
const { send } = require("process");

const fortunes = ["Godzilla will attack the city, but will leave you alone because you are super cool. Then you both play PS5, because Godzilla was able to grab one after he destroyed Japan.", "You will go take a nap.", "You will eat a hamburger.", "You will watch a movie.", "You will get a haircut."]

const quote = [`“Even the smallest person can change the course of the future”`, `"HECK YEA, MAGIC!!!" - Gandalf, probably`, `"Not all those who wander are lost." — Bilbo Baggins`, `"All we have to decide is what to do with the time that is given us." — Gandalf`, `“It’s the job that’s never started as takes longest to finish.”— Sam Gamgee`]

const miseslinks = ["mises1.JPG", "CEHL0007.JPG", "IMG_0416.jpg", "IMG_0417.jpg", "IMG_0564.jpg", "IMG_1352.JPG", "IMG_1887.jpg", "IMG_2305.jpg", "IMG_4892.jpg"]

let rNum = (arr) => {
    let num = Math.floor(Math.random() * arr.length)
    return num
}

let catIndex = 0

module.exports = {
    fortune: (req, res) => {
        let num = Math.floor(Math.random() * fortunes.length);
        res.status(200).send(fortunes[num]);
    },
    
    lotr: (req, res) => {res.status(200).send(quote[rNum(quote)])},

    catLeft: (req, res) => {
        if (catIndex === 0){
            catIndex = miseslinks.length - 1
        } else {
            catIndex --
        }
        res.status(200).send(miseslinks[catIndex])
    },
    
    catRight: (req, res) => {
        if (catIndex >= miseslinks.length - 1){
            catIndex = 0
        } else {
            catIndex ++
        }
        res.status(200).send(miseslinks[catIndex])
    },

    chaCompliment: (req, res) => {
        let {wordsToSend} = req.body
        res.status(200).send(wordsToSend)
    },




    compliment: (req, res) => {
        const compliments = ["Gee, you're a smart cookie!",
                            "Cool shirt!",
                            "Your Javascript skills are stellar."];
        let randomIndex = Math.floor(Math.random() * compliments.length);
        let randomCompliment = compliments[randomIndex];
        res.status(200).send(randomCompliment);
    }
}