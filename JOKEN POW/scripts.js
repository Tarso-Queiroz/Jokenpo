const optionImages = document.querySelectorAll(".option-image")
const container = document.querySelector(".container")
const resultText = document.querySelector(".result-text")
const computerResult = document.querySelector(".chooseComputer img")
const userResult = document.querySelector(".chooseUser img")
const win = document.querySelector(".valueWin");
const loss = document.querySelector(".valueLoss");
const tie = document.querySelector(".valueTie");

const computerImg = ['imagens/pedra.png', 'imagens/papel.png', 'imagens/tesoura.png']
const Winner = {
    RR: "Empate",
    RP: "Você Perdeu !",
    RT: "Você Ganhou !",
    PR: "Você Ganhou !",
    PP: "Empate",
    PT: "Você Perdeu !",
    TR: "Você Perdeu !",
    TP: "Você Ganhou !",
    TT: "Empate",
}
const qtdResult = [0, 0, 0]

function handleOptionClick(event) {
    const clickedImage = event.currentTarget
    console.log(clickedImage)
    const UserIndex = Array.from(optionImages).indexOf(clickedImage)
    console.log(UserIndex)

    container.classList.add("start")
    resultText.textContent = "..."

    userResult.src = computerImg[0]
    computerResult.src = computerImg[0]

    setTimeout(() => {
        container.classList.remove("start")

        userResult.src = computerImg[UserIndex]

        const randomNumber = Math.floor(Math.random() * computerImg.length)
        computerResult.src = computerImg[randomNumber]

        const userValue = ['R', 'P', 'T'][UserIndex]
        const computerValue = ['R', 'P', 'T'][randomNumber]
        const combination = userValue + computerValue

        const finalResult = Winner[combination]
        resultText.textContent = finalResult

        if(finalResult === "Você Ganhou !"){
            qtdResult[0] += 1
            win.textContent = qtdResult[0]
        }
        else if(finalResult === "Você Perdeu !"){
            qtdResult[1] += 1
            loss.textContent = qtdResult[1]
        }
        else{
            qtdResult[2] += 1
            tie.textContent = qtdResult[2];
        }

    }, 2000);
}




optionImages.forEach(img => {
    img.addEventListener("click", handleOptionClick)
})