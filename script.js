//Grid Size
const btn = document.querySelector('btn');

//Draw over and Generate Grid
const body = document.querySelector('body');
body.style.width = "900px";

const mainDiv = document.createElement('div');
mainDiv.style.display = "flex"; 
mainDiv.style.flexWrap = "wrap";

function drawHover(e) {
    console.log(e);
    this.style.backgroundColor = "black";   
}

for (let x = 0; x <= 256; x++) {
    const div = document.createElement('div');
    div.classList.add("grid");
    div.style.border = "solid";
    div.style.margin = "0";
    div.style.height = "50px";
    div.style.width = "50px";

    div.addEventListener('mouseover', drawHover);

    mainDiv.appendChild(div);
}


body.appendChild(mainDiv);
