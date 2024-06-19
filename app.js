import "./assets/app.css";

const avatar = document.querySelectorAll(".avatar");


window.onload = function showAvatar() {
    const maxNumbers = 9;
    let list = [];
    
    for (let i = 0; i < maxNumbers; i++) {
        list[i] = i + 1;
    }
    
    let randomNumber;
    let tmp;

    for (let i = list.length; i;) {
        randomNumber = Math.random() * i-- | 0;
        tmp = list[randomNumber];
        // troca o número aleatório pelo atual
        list[randomNumber] = list[i];
        // troca o atual pelo aleatório
        list[i] = tmp;
    }

    for(let i=0; i<5; i++){
        avatar[i].setAttribute("src", `./images/avatars/${list[i]}.png`)
    }
};
