import * as _ from "../../vendors/underscore/underscore.js";

const VALUEEL = document.querySelector("main .value"),
    CATPICEL = document.querySelector("main .cat_pic"),
    CATDRAWEREL = document.querySelector("main .cat_drawer"),
    CATDRAWERTEMPLATE = document.querySelector("#catDrawerItemTemplate"),
    CATS = JSON.parse(document.querySelector("#cat_list").innerHTML);

function init() {
    initCatDrawer();
    initEventListener();
}

function initCatDrawer() {
    for (let cat of CATS) {
        CATDRAWERTEMPLATE.content.querySelector("li").id = cat.id;
        CATDRAWERTEMPLATE.content.querySelector("li").textContent = cat.name;
        CATDRAWEREL.appendChild(document.importNode(CATDRAWERTEMPLATE.content, true));
    }
}

function initEventListener() {
    CATPICEL.addEventListener("click", incrementValue);
    CATDRAWEREL.addEventListener("click", onCatDrawerClicked);
}

function onCatDrawerClicked(event) {
    displayCat(event.target.id);
}

function incrementValue() {
    VALUEEL.innerHTML = parseInt(VALUEEL.innerHTML) + 1;
}

function displayCat(catID) {
    let cat = CATS.find(item => item.id === parseInt(catID));
    CATPICEL.src = cat.src;
}

init();