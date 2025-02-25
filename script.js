document.getElementById("registroForm").addEventListener("submit", function(event) {
    event.preventDefault();

    let nombre = document.getElementById("nombre").value;
    let email = document.getElementById("email").value;
    let whatsapp = document.getElementById("whatsapp").value;

    let mensaje = `¡Hola! Quiero registrarme a la clase GRATIS.%0A%0A*Mis datos son:*%0A👤 Nombre: ${nombre}%0A📧 Email: ${email}%0A📲 WhatsApp: ${whatsapp}`;

    let url = `https://wa.me/573117947704?text=${mensaje}`;
    
    window.open(url, "_blank");
});

// Fondo animado
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let particlesArray = [];
const colors = ["#ff0000", "#ffffff", "#ff9900"];

class Particle {
    constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 5 + 1;
        this.speedX = Math.random() * 3 - 1.5;
        this.speedY = Math.random() * 3 - 1.5;
        this.color = colors[Math.floor(Math.random() * colors.length)];
    }
    
    update() {
        this.x += this.speedX;
        this.y += this.speedY;
        if (this.x >= canvas.width || this.x <= 0) this.speedX *= -1;
        if (this.y >= canvas.height || this.y <= 0) this.speedY *= -1;
    }
    
    draw() {
        ctx.beginPath();
        ctx.fillStyle = this.color;
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
    }
}

function init() {
    for (let i = 0; i < 100; i++) {
        particlesArray.push(new Particle());
    }
}

function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    for (let i = 0; i < particlesArray.length; i++) {
        particlesArray[i].update();
        particlesArray[i].draw();
    }
    requestAnimationFrame(animate);
}

init();
animate();

window.addEventListener("resize", function() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
});

////////////////////////////////////////////////////////////////////////////////////////////
// Script para mostrar un modal con cuenta regresiva de urgencia
document.addEventListener("DOMContentLoaded", function () {
    // Obtener elementos del DOM
    const modal = document.getElementById("modalUrgencia"); // Modal de urgencia
    const closeButton = document.querySelector(".close"); // Botón de cierre del modal
    const contadorElemento = document.getElementById("contador"); // Contenedor del contador

    // Cerrar el modal al hacer clic en la "X"
    closeButton.addEventListener("click", function () {
        modal.style.display = "none";
    });

    // Cerrar el modal al hacer clic fuera de él
    window.addEventListener("click", function (event) {
        if (event.target === modal) {
            modal.style.display = "none";
        }
    });

    // Definir tiempo inicial de cuenta regresiva (Ejemplo: 1 hora, 5 minutos, 30 segundos)
    const tiempoInicial = 1 * 60 * 60 + 5 * 60 + 30; // 1 hora, 5 minutos y 30 segundos
    let tiempoRestante = parseInt(localStorage.getItem("contadorTiempo")) || tiempoInicial;

    // Función para actualizar el contador en pantalla
    function actualizarContador() {
        let horas = Math.floor(tiempoRestante / 3600);
        let minutos = Math.floor((tiempoRestante % 3600) / 60);
        let segundos = tiempoRestante % 60;

        // Formatear el contador en pantalla
        contadorElemento.textContent = 
            `${horas.toString().padStart(2, "0")}:` +
            `${minutos.toString().padStart(2, "0")}:` +
            `${segundos.toString().padStart(2, "0")}`;

        // Si el tiempo llega a 0, reiniciar el contador
        if (tiempoRestante <= 0) {
            tiempoRestante = tiempoInicial; // Reinicia el tiempo al valor original
        } else {
            tiempoRestante--; // Reducir el tiempo restante
        }

        // Guardar el tiempo en localStorage
        localStorage.setItem("contadorTiempo", tiempoRestante);

        // Llamar a la función nuevamente después de 1 segundo
        setTimeout(actualizarContador, 1000);
    }

    // Iniciar la cuenta regresiva
    actualizarContador();
});


///////////////////////////////////////////////////////////////////////////////
document.addEventListener("DOMContentLoaded", function () {
    const modal = document.getElementById("modalAprendizaje"); // Modal
    const abrirModal = document.getElementById("abrirModal"); // Botón que abre el modal
    const closeButton = modal.querySelector(".close"); // Botón de cierre

    // Asegurar que el modal esté oculto al cargar la página
    modal.style.display = "none";

    // Abrir el modal al hacer clic en el botón
    abrirModal.addEventListener("click", function () {
        modal.style.display = "flex";
    });

    // Cerrar el modal al hacer clic en la "X"
    closeButton.addEventListener("click", function () {
        modal.style.display = "none";
    });

    // Cerrar el modal al hacer clic fuera de él
    window.addEventListener("click", function (event) {
        if (event.target === modal) {
            modal.style.display = "none";
        }
    });
});
