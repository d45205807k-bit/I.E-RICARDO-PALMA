// EFECTO DE CONTADORES NUMÉRICOS DINÁMICOS EN LA PÁGINA DE INICIO
document.addEventListener("DOMContentLoaded", () => {
    const counters = document.querySelectorAll('.counter');
    
    counters.forEach(counter => {
        const updateCount = () => {
            const target = +counter.getAttribute('data-target');
            const count = +counter.innerText;
            const increment = target / 100;

            if (count < target) {
                counter.innerText = Math.ceil(count + increment);
                setTimeout(updateCount, 25);
            } else {
                counter.innerText = target;
            }
        };
        updateCount();
    });
});

// LÓGICA DEL MINIJUEGO INTERACTIVO (PÁGINA PRIMARIA E INICIAL)
const secretNumber = Math.floor(Math.random() * 10) + 1;

function checkGame() {
    const userGuess = parseInt(document.getElementById('userGuess').value);
    const message = document.getElementById('game-message');

    if (isNaN(userGuess) || userGuess < 1 || userGuess > 10) {
        message.style.color = "#d97706";
        message.innerText = "⚠️ Por favor, ingresa un número válido entre 1 y 10.";
        return;
    }

    if (userGuess === secretNumber) {
        message.style.color = "#38a169";
        message.innerText = "🎉 ¡Felicidades! Ganaste una estrella dorada de la I.E. Ricardo Palma.";
    } else if (userGuess < secretNumber) {
        message.style.color = "#2b6cb0";
        message.innerText = "📈 ¡Casi! El número secreto es mayor. ¡Inténtalo de nuevo!";
    } else {
        message.style.color = "#2b6cb0";
        message.innerText = "📉 ¡Casi! El número secreto es menor. ¡Inténtalo de nuevo!";
    }
}