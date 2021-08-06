
const baseURL = "http://localhost:4000/api"

const errCallback = err => console.log(err)

// const axios = require("axios")

// Fortune DOM elements.
const fortuneText = document.getElementById("fortuneText");
const fortuneBtn = document.getElementById("fortuneBtn");
// LOTR DOM elements.
const lotrText = document.getElementById("lotrText");
const lotrBtn = document.getElementById("lotrBtn");
// Mises pics DOM elements.
const currentPic = document.getElementById("currentPic");
const goBack = document.getElementById("leftBtn");
const goForward = document.getElementById("rightBtn");
// Chalon enouragement DOM elements.
const chalonHead = document.getElementById("chalonHead");
const field = document.getElementById("compliment");
const yesBtn = document.getElementById("yes");
const noBtn = document.getElementById("no");



const formatText = (element, text) => {
    element.innerText = text
}

const rFortune = () => {
    axios.get(`http://localhost:4000/api/fortune`)
        .then ((res) => formatText(fortuneText, res.data))
        .catch(errCallback)
}

const lotrquote = () => {
    axios.get(`http://localhost:4000/api/lotr`)
        .then ((res) => formatText(lotrText, res.data))
        .catch(errCallback)
}

const changePic = (e, ifForward) => {
    
    if (ifForward === true){
        axios.get(`http://localhost:4000/api/cat/right`)
            .then((res) => currentPic.src = `/server/misespics/${res.data}`)
            .catch(errCallback)
        } else if (ifForward === false) {
        axios.get(`http://localhost:4000/api/cat/left`)
        .then((res) => currentPic.src = `/server/misespics/${res.data}`)
        .catch(errCallback)
    }
}



const giveDatCompliment = (e) => {
    console.log("func is working")
    const words = "Robot Chalon is very grateful for you saying"
    const endWords = ". Have a great day, and hopefully you will sympathethize with him not getting more done on this assessment. (And forgive the awful looking HTML and CSS.)"
    const compliment = field.value
    const body = {"wordsToSend": compliment}
    axios.post(`${baseURL}/chaCompliment`, body)
        .then((res) => {
            chalonHead.textContent = `${words} "${res.data}"${endWords}`
        })

}


const fNoCompliment = () => {
    chalonHead.textContent = "That's okay, I'm not really Chalon, just a super advanced AI of his consciousness, so you didn't hurt my feelings because I have none. I fooled you though, right?!"
}


fortuneBtn.addEventListener("click", rFortune);
lotrBtn.addEventListener("click", lotrquote);

goBack.addEventListener("click", (e) => {changePic(e, false)});
goForward.addEventListener("click", (e) => {changePic(e, true)});

yesBtn.addEventListener("click", giveDatCompliment);
noBtn.addEventListener("click", fNoCompliment)






// Moved the original JS from the HTML page to here.
document.getElementById("complimentButton").onclick = function () {
    axios.get("http://localhost:4000/api/compliment/")
        .then(function (response) {
          const data = response.data;
          alert(data);
        });
  };