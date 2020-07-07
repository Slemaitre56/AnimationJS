
let okNom = document.getElementById("validNom");
let nom = document.getElementById("nom");
let nomValid = /^([a-zA-ZéèîïÉÈÎÏ][a-zéèêàçîï]{2,})+([-'\s][a-zA-ZéèîïÉÈÎÏ][a-zéèêàçîï]{2,})?$/;

let okMail = document.getElementById("validMail");
let mail = document.getElementById("mail");
let regexMail = /^[a-zA-Z0-9._-]+@[a-z0-9._-]{2,}\.com|\.fr$/;

let okText = document.getElementById("validText");
let texta = document.getElementById("message");
let regexTexta = /^[a-zA-Z0-9._-]+[a-z0-9._-]{2,}/;

let formValid = document.getElementById("submit");

formValid.addEventListener('click', validateAll); 

function validateAll(event) {
    validate(nom, nomValid, okNom, event);  
    validate(mail, regexMail, okMail, event);  
    validate(texta, regexTexta, okText, event); 
 }; 

function validate(val, validVal, wrapper, event) {
    
    
    if (val.validity.valueMissing) { 
        event.preventDefault(); 
        
        wrapper.textContent = "Text manquant";
        wrapper.className = "regex"; 
 
    } else if (validVal.test(val.value) == false) { 
        event.preventDefault();     
        wrapper.textContent = "Format erroné";
        wrapper.className = "error";
 
    } else {  
        wrapper.textContent = "correct";
        wrapper.className = "good"; 
    } 
}

let reset = document.getElementById("reset");
let tabs = document.querySelectorAll(".reset");

reset.addEventListener('click', eraseAll);

function eraseAll() {
    tabs.forEach(function(tab){
        tab.style.display = "none";
    });
      
}