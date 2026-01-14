// --- 問題と答えのデータを用意する ---
const wordData = {
    question: "Apple",
    answer: "りんご"
};

// --- 「表か裏か」を管理する変数（フラグ） ---
// true = 表（問題）、false = 裏（答え）
let isFront = true;

// HTMLの要素を取得して変数に入れる
const card = document.getElementById('card');
const wordDisplay = document.getElementById('word');
const statusDisplay = document.getElementById('status');

// --- クリック時の処理 ---
card.addEventListener('click', () => {
    // 1. フラグを交互に入れ替える（trueならfalseに、falseならtrueに）
    isFront = !isFront;

    // 2. フラグの状態に合わせて、表示する文字を切り替える
    if (isFront) {
        // 「表」の場合の表示
        wordDisplay.textContent = wordData.question;
        statusDisplay.textContent = "表";
        wordDisplay.style.color = "black";
    } else {
        // 「裏」の場合の表示
        wordDisplay.textContent = wordData.answer;
        statusDisplay.textContent = "裏（答え）";
        wordDisplay.style.color = "rgba(255, 47, 0, 1)"; // 答えは赤色にする
    }
});
