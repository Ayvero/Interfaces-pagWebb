document.addEventListener("DOMContentLoaded", function () {
    let percent = 0;
    const loadingPercentElement = document.getElementById("loading-percent");

    function updateLoadingPercent() {
        loadingPercentElement.textContent = percent + "%";
    }

    function incrementPercent() {
        percent++;
        updateLoadingPercent();

        if (percent < 100) {
            setTimeout(incrementPercent, 50); // Incrementa el porcentaje cada 20 ms
        }
    }

    // Inicia la animación del porcentaje
    incrementPercent();
});
