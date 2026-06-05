const container = document.getElementById("img");
const imagens = document.querySelectorAll("#img img");

const prev = document.querySelector(".prev");
const next = document.querySelector(".next");

let index = 0;

function atualizarSlider() {
    container.style.transform = `translateX(${-index * 500}px)`;
}

next.addEventListener("click", () => {
    index++;

    if(index >= imagens.length){
        index = 0;
    }

    atualizarSlider();
});

prev.addEventListener("click", () => {
    index--;

    if(index < 0){
        index = imagens.length - 1;
    }

    atualizarSlider();
});

