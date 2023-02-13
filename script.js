const body = document.querySelector('body');
body.style.width = "900px";

const mainDiv = document.createElement('div');
mainDiv.style.display = "flex"; 
mainDiv.style.flexWrap = "wrap";

//Grid Size
function drawHover() {
    this.style.backgroundColor = "black";   
}

function popup() {
    const sideSize = prompt("Enter the size of the etch-a-sketch grid:");
    if(sideSize > 100) {
        sideSize = 0;
        alert("The size should be less than or equal to 100.");
    } else {
        return sideSize * sideSize;
    }
    
}

function generateGrid() {
    const size = popup();
    for (let x = 0; x <= size; x++) {
        const div = document.createElement('div');
        div.classList.add("grid");
        div.style.border = "solid";
        div.style.margin = "0";
        div.style.height = "50px";
        div.style.width = "50px";
    
        div.addEventListener('mouseover', drawHover);
    
        mainDiv.appendChild(div);
    }
}

const btn = document.querySelector('#popup');
btn.addEventListener('click', generateGrid);


body.appendChild(mainDiv);
