const CATS = JSON.parse(document.querySelector("#cat_list").innerHTML);

import catViewer from "./catviewer.js";
import catDrawer from "./catdrawer.js";
import adminViewer from "./adminviewer.js";

function init() {
    catDrawer.render(CATS.catList);
    catDrawer.addEventListener("onItemClicked", (event) => displayCat(event.data));

    catViewer.render(CATS.currentCat);
    catViewer.addEventListener("onPicClicked", (event) => incrementCounter(event.data));

    adminViewer.addEventListener("onSaveChanges", (event) => saveChanges(event.data));
    adminViewer.addEventListener("onAdminButtonClicked", displayAdmin);
}

function incrementCounter(catID) {
    let cat = CATS.catList.find(item => item.id === parseInt(catID));
    cat.clickCount = cat.clickCount + 1;
    catViewer.render(cat);
}

function saveChanges(data) {
    let catIndex = CATS.catList.findIndex(item => item.id === parseInt(CATS.admin.id));
    console.log(catIndex);
    console.log(data);
}

function displayCat(catID) {
    let cat = CATS.catList.find(item => item.id === parseInt(catID));
    CATS.currentCat = cat;
    catViewer.render(cat);
}

function displayAdmin() {
    CATS.admin = CATS.currentCat;
    adminViewer.render(CATS.currentCat);
}

init();