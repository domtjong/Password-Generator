const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

let password = ""
let passwordOne = document.getElementById("passwordOne-el")
let passwordTwo = document.getElementById("passwordTwo-el")

function renderPassword() {
      for (let i = 0; i < 15; i++) {
        let char = Math.floor(Math.random() * characters.length)
        password += characters[char]
      }
      return password
}

function generatePassword() {
    password = ""
    passwordOne.textContent = renderPassword()
    password = ""
    passwordTwo.textContent = renderPassword()
}

function copyPasswordOne() {
    navigator.clipboard.writeText(passwordOne.textContent)
}

function copyPasswordTwo() {
    document.getElementById("passwordTwo-el")
}