import "./assets/app.css";

const modal = document.querySelector("#modal");
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
const fullVersionBtn = document.querySelector("#fullVersionBtn");
const firstPage = document.querySelector("#firstPage");
const footer = document.querySelector("#footer");
const fullVersionSection = document.querySelector("#fullVersionSection");

const url = new URL(window.location);
const path = url.search === '' ? '?utm_source=direto&utm_campaign=direto&utm_term=direto&utm_medium=LP1dobra' : url.search;

function isOverlaying(fixedElement, otherElement) {
    const fixedRect = fixedElement.getBoundingClientRect();
    const otherRect = otherElement.getBoundingClientRect();

    return (
        fixedRect.top <= otherRect.bottom &&
        fixedRect.right >= otherRect.left &&
        fixedRect.bottom >= otherRect.top &&
        fixedRect.left <= otherRect.right
    );
};

if (isOverlaying(footer, formDemo)) {
    footer.classList.remove("fixed")
};

window.onload = function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
    new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
    j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
    'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
    }(window,document,'script','dataLayer','GTM-TCR5WHF');

export default function pageDemoName(name) {
    userNamePageDemo.insertAdjacentHTML("afterbegin", `
        <p class="text-lg text-gray-800"><span class="text-lg font-semibold">${name}</span>, estamos preparando tudo para você! Seu email com a planilha de demonstração será disparado em 3 minutos. Aproveite esse tempo para assistir ao vídeo rápido de 1 min abaixo e entender como maximizar o uso da planilha.</p>
        
    `)

    modal.classList.add("hidden");
    videoPage.classList.remove("hidden");
    firstPage.classList.add("hidden");

    if (isOverlaying(footer, fullVersionSection)) {
        footer.classList.remove("fixed")
    };
};

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
        invalidModalEmailAlert.classList.add('block');
        return
    }
    invalidModalEmailAlert.classList.add('hidden');
    
    fetch('https://hook.us1.make.com/xa19wkix3pasn4bsud3dvkxip8sznma3', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(dataUtm)
    })
    .then(res => console.log(res.status))
    .then(pageDemoName(userName))
    .catch(error => console.error(error))
    this.removeEventListener("click", modalButtonClickFunction);
});

let player;

document.getElementById('thumbnail').addEventListener('click', function onYouTubeIframeAPIReady() {
    // Cria um novo player
    player = new YT.Player('player-container', {
        videoId: 'xUZtijx0WRM', // ID do vídeo do YouTube
        playerVars: {
            'rel': 0, // Desativa sugestões de vídeos relacionados
            'showinfo': 0, // Não mostra informações do vídeo (incluindo logo do YouTube)
            'autoplay': 1, // Autoplay desativado
            'controls': 0, // Controles do player ativados
        },
        events: {
        'onUnpause': function() {
            player.relatedVideoSuggestions.set('display', false);
        }
        }
    });
    
    document.getElementById('thumbnail').style.display = 'none';
});

document.getElementById('thumbnailPlay').addEventListener('click', function onYouTubeIframeAPIReady() {
    // Cria um novo player
    player = new YT.Player('player-container', {
        videoId: 'xUZtijx0WRM', // ID do vídeo do YouTube
        playerVars: {
            'rel': 0, // Desativa sugestões de vídeos relacionados
            'showinfo': 0, // Não mostra informações do vídeo (incluindo logo do YouTube)
            'autoplay': 1, // Autoplay desativado
            'controls': 0, // Controles do player ativados
        },
        events: {
        'onUnpause': function() {
            player.relatedVideoSuggestions.set('display', false);
        }
        }
    });
    
    document.getElementById('thumbnail').style.display = 'none';
});

fullVersionBtn.addEventListener("click", () => {
    fullVersionBtn.setAttribute("href", `https://seguro.zeplanilha.com/r/ABE0WSGLNP?${path}&utm_medium=LP1dobra`)
});
