let intword = ["roc", "pap", "sis"]
let intimg = ["🪨", "📄", "✂️"]

function clicking(type) {

    document.getElementById(intword[type]).classList.add("optionclk")

    setTimeout(() => {document.getElementById(intword[type]).classList.remove("optionclk")}, 450)

    document.getElementById("moves").textContent = intimg[type] + " ‎ ‎ ‎ ‎ ‎ ‎ ‎ " + intimg[Math.ceil(Math.random() * 3) - 1]
    console.log(document.getElementById("moves").textContent)
}
