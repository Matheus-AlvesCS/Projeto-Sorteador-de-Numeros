const btn = document.querySelector(".main-button")
const minInput = document.querySelector("#min-number")
const maxInput = document.querySelector("#max-number")
const result = document.querySelector(".result")

function getRandomNumber() {
    const min = Math.ceil(minInput.value)
    const max = Math.floor(maxInput.value)
    result.innerHTML = `O número aleatório gerado foi: ${Math.floor(Math.random() * (max - min + 1)) + min}`
}

btn.addEventListener("click", getRandomNumber)
