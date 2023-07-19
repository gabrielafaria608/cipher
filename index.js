import cipher from './cipher.js';

const btnShowEncrypt = document.getElementById("btnShowEncrypt");
const btnShowDecrypt = document.getElementById("btnShowDecrypt");

btnShowEncrypt.addEventListener("click", showEncrypt);
btnShowDecrypt.addEventListener("click", showDecrypt);

function showEncrypt(){
  const contentEncrypt = document.querySelector("#encrypt");
  if(contentEncrypt.style.display === "none"){
    contentEncrypt.style.display = "block";
  }
  else{
    contentEncrypt.style.display = "none";
  }
}
function showDecrypt(){
  const contentDecrypt = document.querySelector("#decrypt")
  if(contentDecrypt.style.display === "none"){
    contentDecrypt.style.display = "block";
  }
  else{
    contentDecrypt.style.display = "none";
  }
}

const inputEncrypt = document.getElementById("gossipEncrypt");
const inputDecrypt = document.getElementById("gossipDecrypt");
const displacementEncryptNumber = document.getElementById("displacementNumberEncrypt");
const displacementDecryptNumber = document.getElementById("displacementNumberDecrypt");
const btnEncrypt = document.getElementById("btnEncrypt");
const btnDecrypt = document.getElementById("btnDecrypt");

function showEncryptedMessage(event){
  const encryptGossip = document.getElementById("encryptGossip");
  event.preventDefault();
  const displacement = Number(displacementEncryptNumber.value);
  const encrypted = cipher.encode(displacement, inputEncrypt.value);
  encryptGossip.innerHTML = encrypted;
  const btnCopyEncrypt = document.createElement("button");
  btnCopyEncrypt.classList.add("copyButtons");
  btnCopyEncrypt.innerText= "Copiar";
  encryptGossip.appendChild(btnCopyEncrypt);
  btnCopyEncrypt.addEventListener("click", function(text){
    text = encrypted;
    navigator.clipboard.writeText(text).then(() => {
      btnCopyEncrypt.innerText= "Copiado";
    })
  });
}
function showDecryptedMessage(event){
  const decryptGossip = document.getElementById("decryptGossip");
  event.preventDefault();
  const displacement = Number(displacementDecryptNumber.value);
  const decrypted = cipher.decode(displacement, inputDecrypt.value);
  decryptGossip.innerHTML = decrypted;
  const btnCopyDecrypt = document.createElement("button");
  btnCopyDecrypt.classList.add("copyButtons");
  btnCopyDecrypt.innerText= "Copiar";
  decryptGossip.appendChild(btnCopyDecrypt);
  btnCopyDecrypt.addEventListener("click", function(text){
    text = decrypted;
    navigator.clipboard.writeText(text).then(() => {
      btnCopyDecrypt.innerText= "Copiado";
    })
  });
}
btnEncrypt.addEventListener("click", showEncryptedMessage);
btnDecrypt.addEventListener("click", showDecryptedMessage);