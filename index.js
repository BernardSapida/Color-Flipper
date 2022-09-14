let hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
let body = document.getElementsByTagName("body")[0];
let span = document.getElementById("hex-color");
let button = document.getElementById("btn-color");

button.addEventListener("click", function(e) {
    let newColor = "#";

    for(let i = 0; i < 6; i++) newColor += hex[Math.floor(Math.random() * (hex.length - 0 - 1) + 0)];
    
    span.innerText = newColor;
    body.style.backgroundColor = newColor;
});


