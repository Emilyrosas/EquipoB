const box = document.getElementById("movableBox");
let offsetX, offsetY, isDragging = false;

box.addEventListener("mousedown", (e) => {
    isDragging = true;
    offsetX = e.clientX - box.offsetLeft;
    offsetY = e.clientY - box.offsetTop;
    box.style.cursor = "grabbing";
});

document.addEventListener("mousemove", (e) => {
    if (!isDragging) return;
    box.style.left = `${e.clientX - offsetX}px`;
    box.style.top = `${e.clientY - offsetY}px`;
});

document.addEventListener("mouseup", () => {
    isDragging = false;
    box.style.cursor = "grab";
});

/*Codigo de pagina MAR*/

function mostrardiario() {
    document.querySelector(".rectanguloMAR").style.display= "none";
    document.getElementById("ventanaMAR").style.display= "flex";
}
function cerrardiario() {
    document.getElementById("ventanaMAR").style.display= "none";
    document.querySelector(".rectanguloMAR").style.display= "flex";
    
}

/*codigo para Serhu*/

function mostrarnoti() {
    document.querySelector(".notiSer").style.display= "none";
    document.getElementById("ventanaSer").style.display= "flex";
}
function cerrarnoti() {
    document.getElementById("ventanaSer").style.display= "none";
    document.querySelector(".notiSer").style.display= "flex";
    
}