window.addEventListener("load", () => {
    init();
})

function init() {
    bind();
}

function bind() {
    prevPage();
    modal();
    number();
}

let tel = "010";

function modal() {
    const btnNext = document.querySelector("#btnNext");

    const btnPass = document.querySelector("#btnPass");
    const btnOkay = document.querySelector("#btnOkay");
    const agree = document.querySelector("#agree");

    const overlay = document.querySelector(".overlay");

    btnNext.addEventListener("click", () => {
        overlay.style.display = "flex";
    })

    btnPass.addEventListener("click", () => {
        overlay.style.display = "none";

        window.location.href = "./06_pay.html";
    })

    btnOkay.addEventListener("click", () => {
        if (agree.checked) {
            overlay.style.display = "none";
            sessionStorage.setItem("tel", tel);
            window.location.href = "./06_pay.html";
        } else {
            alert("개인정보 수집 및 이용 약관에 동의해주세요.");
        }
    })

}

function prevPage() {
    const btnPrev = document.querySelector("#btnPrev");

    btnPrev.addEventListener("click", () => {
        window.location.href = "이전";
    })

    const firstPage = document.querySelector(".firstPage");

    firstPage.addEventListener("click", () => {
        window.location.href = "처음";
    })
}

function number() {
    const btnNum = document.querySelectorAll(".btnNum");

    const phoneValue = document.querySelector(".phone-value");
    let count = 0;

    for (let i = 0; i < btnNum.length; i++) {
        btnNum[i].addEventListener("click", () => {

            if (count < 8) {
                phoneValue.innerText += "*";
                tel += btnNum[i].innerText;
                console.log(tel);
                count++;

                if (count == 4) {
                    phoneValue.innerText += "-";
                }

                return;
            }

            if (count >= 8) {
                return;
            }
        })
    }


    // 전체삭제, 일부삭제
    const btnDel = document.querySelector(".btnDel");
    const btnBack = document.querySelector(".btnBack");

    btnDel.addEventListener("click", () => {
        tel = "010";
        count = 0;
        phoneValue.innerText = "010-";
    })

    btnBack.addEventListener("click", () => {
        if (count > 0) {
            count--;
        }

        if (tel.length > 3) {
            tel = tel.substring(0, tel.length-1);
        }
    })
}

