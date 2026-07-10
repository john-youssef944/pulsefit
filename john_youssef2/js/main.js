const watchImage = document.getElementById("watchImage");

watchImage.style.cursor = "pointer";
watchImage.style.transition = "0.5s";

watchImage.onclick = function () {

    if (watchImage.style.transform === "scale(1.5)") {
        watchImage.style.transform = "scale(1)";
    } else {
        watchImage.style.transform = "scale(1.5)";
    }

};