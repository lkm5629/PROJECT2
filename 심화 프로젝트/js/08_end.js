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

    const firstPage = document.querySelector(".firstPage");
    firstPage.addEventListener("click", () => {
        window.location.href = "처음으로";
    })

}