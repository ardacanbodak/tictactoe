let mark = "X";
let isFinishGame = false;
gameStart();

function gameStart() {
    const parts = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    const part2El = document.querySelector(".part2");
    part2El.innerHTML = "";

    document.getElementById("result").style.display = "none"; // Sonucu başlangıçta gizle
    isFinishGame = false; // Oyun durumunu sıfırla
    
    for (const val in parts) {
        part2El.innerHTML += `<div id="${val}" onclick="setMark(event)"></div>`
    }
}

function setMark(event) {
    if(isFinishGame) return;

    if(!event.target.innerHTML){
        event.target.innerHTML = mark;
        if (mark === "X") mark = "O"
        else mark = "X"

        isFinish();

    }
}

function newGame() {
    gameStart();
    mark = "X";
}

function isFinish() {
    const resultEl = document.getElementById("result");
    const cells = [...Array(9).keys()].map(i => document.getElementById(i.toString()));

    const winningCombinations = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8], // Satırlar
        [0, 3, 6], [1, 4, 7], [2, 5, 8], // Sütunlar
        [0, 4, 8], [2, 4, 6]  // Çaprazlar
    ];

    let isWinnerFound = false;

    // Kazanma kombinasyonlarını kontrol et
    winningCombinations.forEach(combination => {
        const [a, b, c] = combination;
        if (cells[a].innerHTML !== "" && cells[a].innerHTML === cells[b].innerHTML && cells[a].innerHTML === cells[c].innerHTML) {
            // Kazanan bulundu
            isWinnerFound = true;
            isFinishGame = true;
            resultEl.style.display = "block";
            resultEl.innerHTML = `Tebrikler ${cells[a].innerHTML} kazandı!`;

            // Kazanan hücreleri vurgula
            combination.forEach(index => cells[index].classList.add("highlight"));
        }
    });

    if (!isWinnerFound) {
        // Beraberlik durumunu kontrol et
        const isDraw = cells.every(cell => cell.innerHTML !== "");
        if (isDraw) {
            isFinishGame = true;
            resultEl.style.display = "block";
            resultEl.innerHTML = `Berabere!`;
        }
    }
}

/*
function isFinish(){
    const resultEl = document.getElementById("result");
    const el0 = document.getElementById("0");
    const el1 = document.getElementById("1");
    const el2 = document.getElementById("2");
    const el3 = document.getElementById("3");
    const el4 = document.getElementById("4");
    const el5 = document.getElementById("5");
    const el6 = document.getElementById("6");
    const el7 = document.getElementById("7");
    const el8 = document.getElementById("8");

    if(el0.innerHTML != "" && el0.innerHTML == el1.innerHTML && el1.innerHTML == el2.innerHTML){
        resultEl.style.display = "block";
        resultEl.innerHTML = `Congratulations ${el0.innerHTML} win!`
        isFinishGame = true;

        el0.style.backgroundColor = "green";
        el0.style.color = "white";
        el1.style.backgroundColor = "green";
        el1.style.color = "white";
        el2.style.backgroundColor = "green";
        el2.style.color = "white";
    }
}
*/