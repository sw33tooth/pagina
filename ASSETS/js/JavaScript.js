
function scrollToTop() {
    const c = document.documentElement.scrollTop || document.body.scrollTop;
    if (c > 0) {
        window.requestAnimationFrame(scrollToTop);
        window.scrollTo(0, c - c / 8);
    }
}

// Agregar un listener al botón "Ir arriba"
document.addEventListener('DOMContentLoaded', function() {
    const btnIrArriba = document.getElementById('btn-ir-arriba');
    if (btnIrArriba) {
        btnIrArriba.addEventListener('click', scrollToTop);
    }
});
$('')
