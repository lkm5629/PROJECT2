window.addEventListener("load", () => {
    init();
})

function init() {
    bind();
}

function bind() {
    pageMove();
}

function pageMove() {
    const btnPrev = document.querySelector("#btnPrev");
    btnPrev.addEventListener("click", () => {
        window.location.href = "./05_final.html";
    })
    
    const btnNext = document.querySelector("#btnNext");
    btnNext.addEventListener("click", () => {
        window.location.href = "./07_finish.html";
    })

    const firstPage = document.querySelector(".firstPage");
    firstPage.addEventListener("click", () => {
        window.location.href = "처음으로";
    })

}