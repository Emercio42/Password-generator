const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P",
"Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k",
"l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", 
"5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

const btnRandomPassGenEl = document.getElementById("btn-randomPassGen")
const passLeftEl = document.getElementById("passLeftText") 
const passRightEl = document.getElementById("passRightText") 
const passwordLength = 15

btnRandomPassGenEl.addEventListener("click", function() {
    let passwordLeft = ""
    let passwordRight = ""
    for (let i = 0; i < passwordLength; i++) {
        let randomNumberOne = Math.floor (Math.random() * characters.length);
        let randomNumberTwo = Math.floor (Math.random() * characters.length);
        passwordLeft += characters[randomNumberOne]
        passwordRight += characters[randomNumberTwo]

    }
    passLeftEl.textContent = passwordLeft;
    passRightEl.textContent = passwordRight;
})
