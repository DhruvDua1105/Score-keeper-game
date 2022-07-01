// const btn1 = document.querySelector("#p1");
// const btn2 = document.querySelector("#p2");
// const p1Score = document.querySelector("#p1Score");
// const p2Score = document.querySelector("#p2Score");

const p1 = {
    score: 0,
    button: document.querySelector("#p1"),
    display: document.querySelector("#p1Score")
}
const p2 = {
    score: 0,
    button: document.querySelector("#p2"),
    display: document.querySelector("#p2Score")
}

const chances = document.querySelector("#chances");
const btn3 = document.querySelector("#reset");
let isGameOver = false;
let winningNo = 3;

chances.addEventListener("change", function () {
    winningNo = parseInt(this.value);
    reset();
})

function updateButton(player, opponent) {
    if (!isGameOver) {
        player.score++;

        if (player.score === winningNo) {
            player.display.classList.add("has-text-success");
            opponent.display.classList.add("has-text-danger");
            isGameOver = true;
            player.button.disabled = true;
            opponent.button.disabled = true;
        }
        player.display.innerHTML = player.score;
    }
}

p1.button.addEventListener("click", (e) => {
    updateButton(p1, p2);

})
p2.button.addEventListener("click", (e) => {
    updateButton(p2, p1);

})



btn3.addEventListener("click", reset);

function reset() {
    isGameOver = false;
    p1.score = 0;
    p2.score = 0;
    p1.display.innerHTML = p1.score;
    p2.display.innerHTML = p2.score;
    p1.display.classList.remove("has-text-danger", "has-text-success");
    p2.display.classList.remove("has-text-danger", "has-text-success");
    p1.button.disabled = false;
    p2.button.disabled = false;
}

