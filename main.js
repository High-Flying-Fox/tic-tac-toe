let intword = ["roc", "pap", "sis"]
let intimg = ["🪨", "📄", "✂️"]
let computermove = 0
let playerscore = 0
let computerscore = 0

function clicking(type) {

    document.getElementById(intword[type]).classList.add("optionclk")

    computermove = Math.ceil(Math.random() * 3) - 1

    document.getElementById("moves").textContent = intimg[type] + " ‎ ‎ ‎ ‎ ‎ ‎ ‎ " + intimg[computermove]

    if (test(type, computermove) == 0) {
        document.getElementById("title").textContent = "TIE"
    } else if (test(type, computermove) == 1) {
        document.getElementById("title").textContent = "PLAYER WINS"
        playerscore += 1
    } else if (test(type, computermove) == 2) {
        document.getElementById("title").textContent = "COMPUTER WINS"
        computerscore += 1
    }

    document.getElementById("score").textContent = playerscore + " / " + computerscore

    setTimeout(() => {document.getElementById(intword[type]).classList.remove("optionclk")}, 450)
}

function test(play, com) {

    if (play == com) {
        return 0
    }
    if (play > com - 1) {
        return 1
    }
    if (play - 1 < com) {
        return 2
    }
}
