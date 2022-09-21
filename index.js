let saveEl = document.getElementById("save-el")
let countEl = document.getElementById("count-el")
let runs = 0

function increment() {
    runs += 1
    countEl.textContent = runs
    saveEl.textContent+=" 1 -"
}
function increment2() {
    runs += 2
    countEl.textContent = runs
    saveEl.textContent+=" 2 -"
}
function increment3() {
    runs += 3
    countEl.textContent = runs
    saveEl.textContent+=" 3 -"
}
function increment4() {
    runs += 4
    countEl.textContent = runs
    saveEl.textContent+=" 4 -"
}
function increment6() {
    runs += 6
    countEl.textContent = runs
    saveEl.textContent+=" 6 -"
}
function reset() {
    countEl.textContent = 0
    runs = 0
    saveEl.textContent="Runs this over:"
}
