console.log("loaded");

document.querySelector("main .pic").addEventListener("click", () => {
    let value = document.querySelector("main .value").innerHTML;
    document.querySelector("main .value").innerHTML = parseInt(value) + 1;
});