const decBtn = document.getElementById("decBtn");
const incBtn = document.getElementById("incBtn");
const resetBtn = document.getElementById("resetBtn");
const countlabel = document.getElementById("countlabel");
let count = 0;

decBtn.onclick = function(){
    count--;
    countlabel.textContent = count;
}

incBtn.onclick = function(){
    count++;
    countlabel.textContent = count;
}
resetBtn.onclick = function(){
    count = 0;
    countlabel.textContent = count;
}
