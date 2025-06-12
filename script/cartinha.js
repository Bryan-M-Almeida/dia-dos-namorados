const btn = document.getElementById("abrirBtn");
const msg = document.getElementById("mensagem");
const container = document.getElementById("cartinha");


let n = 1;


function renovarAmor() {
    n++;
    atualizarMensagem();
}

function atualizarMensagem() {
    msg.innerHTML = `
    Minha branca🤗<br><br>
    meu amor<br><br>
    Eu te amo mais que tudo nesse mundo<br><br>
    eu sou muito feliz com vc ao meu lado todos os dias
    <br><br>
     todas as noites<br><br>
    a todo momento<br><br>
    vc é incrível
    <br><br>
     é meu tudo
    <br><br>
     meu pedacinho de chocolate branco<br><br>
    estar com vc é como estar no paraíso
    <br><br>
     onde nada mais importa além da gente<br><br>
    estar com vc é especial<br><br>
    estar com vc é incrível<br><br>
    estar com vc deixou de ser algo rotineiro e passou a ser uma necessidade<br><br>
    eu preciso de vc<br><br>
    meu coração precisa de você<br><br>
    my heart need you so much<br><br>
    sem vc eu não sei oq seria de mim<br><br>
    sem vc meu mundo não é real<br><br>
    meu mundo não existe sem vc<br><br>
    tudo ao meu redor fica incrível quando vc está por perto<br><br>
    eu tenho como necessidade te servir
    <br><br>
     te amar
    <br><br>
     te amar
    <br><br>
     amar
    <br><br>
     amar
    <br><br>
     e amar<br><br>
    cada dia mais<br><br>
    você é minha Deusa<br><br>
    minha musa<br><br>
    meu pedacinho do céu<br><br>
    eu só tenho a agradecer por ter você na minha vida<br><br>
    por ter você comigo todos os dias<br><br>
    de verdade<br><br>
    desculpa se eu não sou um bom namorado<br><br>
    desculpa se eu te irrito<br><br>
    desculpa se eu não sou o suficiente pra você<br><br>
    desculpa se eu não demonstro tanto quanto deveria<br><br>
    desculpa se eu não faço as coisas direito<br><br>
    eu te amo<br><br>
    eu te amo muito<br><br>
    mais que tudo<br><br>
    farei de tudo por vc<br><br>
    faço e continuarei fazendo<br><br>
    minha maior motivação é você<br><br>
    sempre você<br><br>
    sempre será<br><br>
    você<br><br>
    obrigado<br><br>
    por ser uma namorada incrível<br><br>
    por me aceitar como sou<br><br>
    por me aconselhar<br><br>
    por estar sempre comigo<br><br>
    e que por mais que tenhamos brigas ou desentendimentos<br><br>
    é você quem está lá comigo quando preciso<br><br>
    quando estou triste<br><br>
    quando estou feliz<br><br>
    quando estou surtando<br><br>
    quando estou<br><br>
    é sempre você<br><br>
    feliz dia dos namorados<br><br>
     minha princesa🥰<br><br>
    Aceita renovar nosso namoro?<br><br>
    Por mais <strong>${n}</strong> ${n === 1 ? 'ano' : 'anos'} ❤️
  `;
}

btn.addEventListener("click",
    () => {
        atualizarMensagem();
        btn.style.display = "none";

        for (let i = 0; i < 30; i++) {
            let heart = document.createElement("div");
            heart.className = "heart";
            heart.style.left = Math.random() * 100 + "vw";
            heart.style.animationDuration = (Math.random() * 2 + 3) + "s";
            document.body.appendChild(heart);

            setTimeout(() => {
                heart.remove();
            },
                10000);
        }

        setInterval(renovarAmor,
            100);
    });
