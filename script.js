const btn = document.querySelector(".main-button")
const minInput = document.querySelector("#min-number")
const maxInput = document.querySelector("#max-number")
const result = document.querySelector(".result")

function getRandomNumber() {
    const min = Math.ceil(minInput.value)
    const max = Math.floor(maxInput.value)

    if (max > min) {
        result.innerHTML = `O número aleatório gerado foi: ${Math.floor(Math.random() * (max - min + 1)) + min}`
    } else {
        result.innerHTML = `O número mínimo ${min} é maior ou igual ao número máximo ${max}.`
    }
}

btn.addEventListener("click", getRandomNumber)
