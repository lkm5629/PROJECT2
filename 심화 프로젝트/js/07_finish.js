window.addEventListener("load", () => {
    init();
})

function init() {
    bind();
}

function bind() {
    pageMove();

    // 결제
    pay();
}

function pageMove() {
    const btnPrev = document.querySelector("#btnPrev");
    btnPrev.addEventListener("click", () => {
        window.location.href = "./06_pay.html";
    })

    const firstPage = document.querySelector(".firstPage");
    firstPage.addEventListener("click", () => {
        window.location.href = "처음으로";
    })
}



// 결제 수단
function pay() {
    // 결제 수단 선택
    creditCard();
    samsung();
    easy();
    mobileCoupon();
    membership();
    giftCard();
    payco();

    // 오버레이 취소
    esc();

    // 결제 성공

    const overlay = document.querySelector(".overlay");
    const modalTitle = document.querySelector("#modalTitle");
    const modalEx = document.querySelector(".modalEx");
    const modalContent = document.querySelector(".modalContent");

    function creditCard() {
        const creditCard = document.querySelector("#creditCard");
        creditCard.addEventListener("click", () => {
            overlay.style.display = "flex";

            modalTitle.innerHTML = "신용카드로 지불";
            modalEx.innerHTML = `카드를 그림과 같이 삽입하고 기다려주세요.`;
            modalContent.innerHTML = ``;
        })
    }

    function samsung() {
        const samsung = document.querySelector("#samsung");
        samsung.addEventListener("click", () => {
            overlay.style.display = "flex";
            
            modalTitle.innerHTML = "삼성페이로 지불";
            modalEx.innerHTML = `삼성페이를 실행한 후,<br>휴대전화를 그림과 대고 기다려주세요.`;
            modalContent.innerHTML = ``;
        })
    }

    function easy() {
        const easy = document.querySelector("#easy");
        easy.addEventListener("click", () => {
            overlay.style.display = "flex";
            
            modalTitle.innerHTML = "간편결제(Pay)로 지불";
            modalEx.innerHTML = `결제 수단을 선택하세요.`;
            modalContent.innerHTML = `
        <div class="button-group">
            <div class="button-two">
                <button id="naverPay">네이버페이</button>
                <button id="kakaoPay">카카오페이</button>
            </div>
            <div class="button-two">
                <button id="aliPay">Alipay</button>
                <button id="wechatPay">Wechat Pay</button>
            </div>
            <div class="button-two">
                <button id="appCard">앱카드</button>
                <button id="payBook">페이북</button>
            </div>
        </div>
            `;
        })
    }

    function mobileCoupon() {
        const mobileCoupon = document.querySelector("#mobileCoupon");
        mobileCoupon.addEventListener("click", () => {
            overlay.style.display = "flex";
            
            modalTitle.innerHTML = "모바일 쿠폰으로 지불";
            modalEx.innerHTML = `쿠폰의 바코드를 그림과 같이 스캐너에 대주세요.`;
            modalContent.innerHTML = ``;
        })
    }

    function membership() {
        const membership = document.querySelector("#membership");
        membership.addEventListener("click", () => {
            overlay.style.display = "flex";
            
            modalTitle.innerHTML = "멤버십 카드로 지불";
            modalEx.innerHTML = `멤버십 카드를 그림과 같이 삽입하고 기다려주세요.`;
            modalContent.innerHTML = ``;
        })
    }

    function giftCard() {
        const giftCard = document.querySelector("#giftCard");
        giftCard.addEventListener("click", () => {
            overlay.style.display = "flex";
            
            modalTitle.innerHTML = "기프트 카드로 지불";
            modalEx.innerHTML = `기프트 카드를 그림과 같이 삽입하고 기다려주세요.`;
            modalContent.innerHTML = ``;
        })
    }

    function payco() {
        const payco = document.querySelector("#payco");
        payco.addEventListener("click", () => {
            overlay.style.display = "flex";
            
            modalTitle.innerHTML = "페이코(Payco)로 지불";
            modalEx.innerHTML = `페이코를 실행한 후,<br>휴대전화를 그림과 같이 대고 기다려주세요.`;
            modalContent.innerHTML = ``;
        })
    }

    function esc() {
        const esc = document.querySelector("#esc");
        esc.addEventListener("click", () => {
            overlay.style.display = "none";
        })
    }

}

function payFinish() {
    setTimeout (() => {
        
    })
    setTimeout (() => {
        window.href.location = "./08_end.html";
    }, 1000)
}

