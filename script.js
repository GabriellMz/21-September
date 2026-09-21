// 1. CÁLCULO DEL CONTADOR (1 de abril de 2024, 20:42)
const fechaInicio = new Date(2024, 3, 1, 20, 42, 0).getTime();

function actualizarContador() {
    const ahora = new Date().getTime();
    const diferencia = ahora - fechaInicio;
    
    if (diferencia < 0) return;
    
    const dias = Math.floor(diferencia / (1000 * 60 * 60 * 24));
    const horas = Math.floor((diferencia % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutos = Math.floor((diferencia % (1000 * 60 * 60)) / (1000 * 60));
    const segundos = Math.floor((diferencia % (1000 * 60)) / 1000);
    
    const contadorElement = document.getElementById("contador");
    if (contadorElement) {
        contadorElement.innerHTML = `${dias}d ${horas}h ${minutos}m ${segundos}s`;
    }
}
setInterval(actualizarContador, 1000);
actualizarContador();

// 2. CANDADO Y DESBLOQUEO DE ANIMACIONES
document.addEventListener('DOMContentLoaded', () => {
    const btnEntrar = document.getElementById('btn-entrar');
    const pantallaInicio = document.getElementById('pantalla-inicio');
    const contenido = document.getElementById('contenido');
    const musica = document.getElementById('musica-fondo');

    if (btnEntrar) {
        btnEntrar.addEventListener('click', () => {
            // Desvanecer la pantalla de candado
            pantallaInicio.style.opacity = '0';

            // Iniciar la música de Bruno Mars
            if (musica) {
                musica.play().catch(e => console.log("Autoplay bloqueado:", e));
            }

            // Quita la pausa a las animaciones de las flores
            document.body.classList.remove("container");

            // Mostrar el fondo y contenido
            setTimeout(() => {
                pantallaInicio.classList.add('oculto');
                contenido.classList.remove('oculto');
            }, 800);
        });
    }

    // 3. ABRIR Y CERRAR LA CARTA
    const btnCarta = document.getElementById('btn-carta');
    const modalCarta = document.getElementById('modal-carta');
    const btnCerrar = document.getElementById('cerrar-carta');

    if (btnCarta && modalCarta && btnCerrar) {
        btnCarta.addEventListener('click', () => {
            modalCarta.classList.remove('oculto');
        });

        btnCerrar.addEventListener('click', () => {
            modalCarta.classList.add('oculto');
        });

        window.addEventListener('click', (e) => {
            if (e.target === modalCarta) {
                modalCarta.classList.add('oculto');
            }
        });
    }
});