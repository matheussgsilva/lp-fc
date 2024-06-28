import "./assets/app.css";

const avatar = document.querySelectorAll(".avatar");
const modal = document.querySelector("#modal");
const demoBtn = document.querySelector("#demoBtn");
const confirmationText = document.querySelector("#confirmationText");
const formDemo = document.querySelector("#formDemo");
const modalButton = document.querySelector("#modalButton");
const confirmationDemo = document.querySelector("#confirmationDemo");
const invalidNameAlert = document.querySelector('#invalidNameAlert');
const invalidEmailAlert = document.querySelector('#invalidEmailAlert');
const emailModal = document.querySelector("#emailModal");
const invalidModalEmailAlert = document.querySelector("#invalidModalEmailAlert");
const videoPage = document.querySelector("#videoPage");
const userNamePageDemo = document.querySelector("#userNamePageDemo");
const playBtn = document.querySelector("#playBtn");

export default function pageDemoName(name) {
    userNamePageDemo.insertAdjacentHTML("afterbegin", `
        <span class="text-lg font-semibold">${name}</span>
    `)

    modal.classList.add("hidden");
    videoPage.classList.remove("hidden");
};

const url = new URL(window.location);
const path = url.search === '' ? '?utm_source=direto&utm_campaign=direto&utm_term=direto' : url.search;



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
        avatar[i]?.setAttribute("src", `./images/avatars/${list[i]}.png`)
    }
}

function emailValidator(email) {
    let emailPattern = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;
    return emailPattern.test(email);
};

function nameValidator(name) {
    let namePattern = /^[a-zA-ZÀ-ú ]*$/;
    return namePattern.test(name);
};


formDemo?.addEventListener("submit", function formDemoSubmit(event) {
    event.preventDefault();
    
    // const formData = new FormData(formDemo);
    // const data = Object.fromEntries(formData);
    
    const userName = formDemo.name.value;
    const userEmail = formDemo.email.value;

    if(nameValidator(userName) == false || userName === "") {
        invalidNameAlert.classList.remove('hidden');
        return
    }
    invalidNameAlert.classList.add('hidden');
    
    if(emailValidator(userEmail) == false) {
        invalidEmailAlert.classList.remove('hidden');
        return
    }
    invalidEmailAlert.classList.add('hidden');

    modal.classList.remove("hidden");
    modal.classList.add("flex");
    confirmationText.insertAdjacentHTML("afterbegin", `
        <p class="text-center text-lg font-semibold"><span id="nameModal">${userName}</span>, confirme seu e-mail</p>`)
    emailModal.setAttribute("value", `${userEmail}`)

    this.removeEventListener("click", formDemoSubmit);
});



modalButton?.addEventListener("click", function modalButtonClickFunction(event) {
    event.preventDefault();

    const userName = formDemo.name.value;
    const confirmedEmail = confirmationDemo.email.value;
    const dataUtm = {'name': userName, 'email': confirmedEmail, 'utm':`${path}&utm_medium=LP1dobra`};

    if(emailValidator(confirmedEmail) == false) {
        invalidModalEmailAlert.classList.remove('hidden');
        return
    }
    invalidModalEmailAlert.classList.add('hidden');

    pageDemoName(userName)

    // modal.classList.remove("hidden");
    // modal.classList.add("flex");
    // confirmationText.insertAdjacentHTML("afterbegin", `
    //     <p class="text-center text-lg font-semibold">${userName}, confirme seu e-mail</p>`)
    //
    // fetch('https://hook.us1.make.com/xa19wkix3pasn4bsud3dvkxip8sznma3', {
    //     method: 'POST',
    //     headers: {
    //         'Content-Type': 'application/json'
    //     },
    //     body: JSON.stringify(dataUtm)
    // })
    // .then(res => res.json())
    // .then(alert(),
    //     disableButton()
    // )
    // .catch(error => console.log(error))
    this.removeEventListener("click", modalButtonClickFunction);
})


if (playBtn) {
    playBtn.addEventListener("click", () => {
        console.log(playBtn)
    })
}