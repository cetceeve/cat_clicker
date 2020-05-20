const CATS = JSON.parse(document.querySelector("#cat_list").innerHTML);

import catViewer from "./catviewer.js";
import catDrawer from "./catdrawer.js";
import adminViewer from "./adminviewer.js";

function init() {
    catDrawer.addEventListener("onItemClicked", (event) => displayCat(event.data));
    catDrawer.addEventListener("requestCats", (event) => event.callback(CATS.catList));
    catDrawer.render();

    catViewer.addEventListener("onPicClicked", (event) => incrementCounter(event.data));
    catViewer.addEventListener("requestCat", (event) => event.callback(CATS.currentCat));
    CATS.currentCat = CATS.catList[0];
    catViewer.render();

    adminViewer.addEventListener("requestCat", (event) => event.callback(CATS.admin));
    adminViewer.addEventListener("onAdminButtonClicked", displayAdmin);
    adminViewer.addEventListener("onSaveChanges", (event) => saveChanges(event.data));
}

function incrementCounter() {
    CATS.currentCat.clickCount = CATS.currentCat.clickCount + 1;
    catViewer.render();
}

function saveChanges(data) {
    let catIndex = CATS.catList.findIndex(item => item.id === parseInt(CATS.admin.id));

    CATS.catList[catIndex].name = data.name;
    CATS.catList[catIndex].src = data.src;
    CATS.catList[catIndex].clickCount = parseInt(data.clickCount);

    if (CATS.admin.id === CATS.currentCat.id) {
        CATS.currentCat = CATS.catList[catIndex];
        catViewer.render();
    }
    catDrawer.render();
}

function displayCat(catID) {
    let cat = CATS.catList.find(item => item.id === parseInt(catID));
    CATS.currentCat = cat;
    catViewer.render();
}

function displayAdmin() {
    CATS.admin = CATS.currentCat;
    adminViewer.render();
}

init();