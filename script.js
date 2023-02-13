//Etch-A-Sketch
const body = document.querySelector('body');
const mainDiv = document.createElement('div')

for (let x = 0; x <= 16; x++) {
    const div = document.createElement('div');
    div.classList.add("grid");
    div.style.border = "solid";

    mainDiv.appendChild(div);
}

body.appendChild(mainDiv);
