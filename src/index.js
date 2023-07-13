import cipher from './cipher.js';

console.log(cipher);

let btnEncrypt = document.getElementById("btnShowEncrypt");
let btnDecrypt = document.getElementById("btnShowDecrypt");

btnEncrypt.addEventListener("click", showEncrypt);
btnDecrypt.addEventListener("click", showDecrypt);

function showEncrypt(){
    let contentEncrypt = document.querySelector(".encrypt");
    if(contentEncrypt.style.display === "none"){
        contentEncrypt.style.display = "block";
    }
    else{
        contentEncrypt.style.display = "none";
    }
}
function showDecrypt(){
    let contentDecrypt = document.querySelector(".decrypt")
    if(contentDecrypt.style.display === "none"){
        contentDecrypt.style.display = "block";
    }
    else{
        contentDecrypt.style.display = "none";
    }
}
