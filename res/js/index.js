console.log("loaded");

function init() {
    document.querySelector("main .pic").addEventListener("click", incrementValue);
}

function incrementValue() {
    let valueEl = document.querySelector("main .value");
    valueEl.innerHTML = parseInt(valueEl.innerHTML) + 1;
}

init();