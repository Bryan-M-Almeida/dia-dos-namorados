const boxes = document.querySelectorAll('.box');
const resultado = document.getElementById('resultado');
let surpresas = [];

// Carrega as surpresas do JSON
fetch('data/surpresas.json')
    .then(response => response.json())
    .then(data => {
        surpresas = data.surpresas;

        boxes.forEach(box => {
            box.addEventListener('click', () => {
                const aleatorio = Math.floor(Math.random() * surpresas.length);
                resultado.textContent = surpresas[aleatorio];
            });
        });
    })
    .catch(error => {
        console.error("Erro ao carregar surpresas:", error);
        resultado.textContent = "Erro ao carregar surpresas 😢";
    });
