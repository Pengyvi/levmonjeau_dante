document.addEventListener("DOMContentLoaded", function () {
    const imagenes = document.querySelectorAll(".imagen-galeria");
    let indice = 0;

    function mostrarImagen(indice) {
        imagenes.forEach((imagen, i) => {
            if (i === indice) {
                imagen.style.display = "block";
            } else {
                imagen.style.display = "none";
            }
        });
    }

    mostrarImagen(indice);

    document.getElementById("anterior").addEventListener("click", function () {
        if (indice > 0) {
            indice--;
            mostrarImagen(indice);
        }
    });

    document.getElementById("siguiente").addEventListener("click", function () {
        if (indice < imagenes.length - 1) {
            indice++;
            mostrarImagen(indice);
        }
    });
});
