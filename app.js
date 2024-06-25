import "./assets/app.css";

const avatar = document.querySelectorAll(".avatar");
const modal = document.querySelector("#modal");
const demoBtn = document.querySelector("#demoBtn");
const confirmationText = document.querySelector("#confirmationText");


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

demoBtn.addEventListener("click", () => {
    modal.classList.remove("hidden");
    modal.classList.add("flex");
    confirmationText.insertAdjacentHTML("afterbegin", `
        <p class="text-center text-lg font-semibold">Matheus, confirme seu e-mail</p>`)
})