function setListenerToCard() {
    const cardAreaArr = document.querySelectorAll((".card-area"));
    //이벤트 전파
    //-버블링,캡쳐링주의
    for (const cardArea of cardAreaArr) {
        cardArea.addEventListener('click', function (evt) {
           const temp = evt.currentTarget;
            temp.classList.toggle("flip");

            setTimeout(() => {
                temp.classList.toggle("flip");
            }, 3000);
        });
    }
}





const main = document.querySelector("main");




function generateCardList() {
    const cardCnt = document.querySelector("#cardCnt").value;
    if (cardCnt > 50) {
        alert("최대 50개 가능");
        return;
    }
    main.innerHTML = "";

    const cardContentArr = [];
    for (let i = 1; i <= cardCnt; i++) {
        cardContentArr.push(i);
    }

    const arr = cardContentArr.concat(cardContentArr);

    shuffleArr(arr);


    for (const temp of arr) {
        main.innerHTML += `
        <div class="card-area">
            <div class="card">
                <div class="card-back">${temp}</div>
                <div class="card-front">?</div>
            </div>
        </div>
`;
    }

}

function shuffleArr(arr) {
    for (let i = arr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
}



function handleClick() {
    generateCardList();
    setListenerToCard();
}