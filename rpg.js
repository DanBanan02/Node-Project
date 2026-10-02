import rpg from "rpg"

const lengthInput = document.getElementById("password-length")
const generateBtn = document.getElementById("generate-btn")
const passwordOutput = document.getElementById("password-output")
const copyBtn = document.getElementById("Copy-btn")

// > '=TM;:XUv78M['
rpg({length: 16}) // > '&[(OF~Kk,-8TNF0H'
rpg({length: 16, set: 'lud'}) // > '1G7elTEr6kU5dWBP'
rpg({length: 16, set: 'lud', exclude: '123456789'}) // > 'dgomcPCg0RJsYWrx'

generateBtn.addEventListener("click", () => {

    const length =
        Number(lengthInput.value)

    const password =
        rpg({
            length: length,
            set: "lud"
        })

    passwordOutput.value =
        password

})

copyBtn.addEventListener("click", async ()=>{
    passwordOutput.select()

     await navigator.clipboard.writeText(
        passwordOutput.value
    )

    copyBtn.textContent = "Password copied!"
    setTimeout(() => {
        copyBtn.textContent = "Copy Password"

    }, 2000)
})

console.log(
    "1. (8) " +
    rpg({length: 8, set: "lud"})
)

console.log("1. (8) " +
rpg({length: 8, set: 'lud'}) + " - " + "2. (16) " +
rpg({length: 16, set: 'lud'}) + " - " + "3. (32) " +
rpg({length: 32, set: 'lud'}))