console.log("loaded");

function init() {
    addCatEventListener(document.querySelector("#catPics").children);
}

function addCatEventListener(catEls) {
    for (let catEl of catEls) {
        catEl.addEventListener("click", incrementValue);
    }
}

function incrementValue() {
    let valueEl = document.querySelector("main .value");
    valueEl.innerHTML = parseInt(valueEl.innerHTML) + 1;
}

init();