const CATS = JSON.parse(document.querySelector("#cat_list").innerHTML);

import catViewer from "./catviewer.js";
import catDrawer from "./catdrawer.js";

function init() {
    catDrawer.render(CATS.catList);
    catDrawer.addEventListener("onItemClicked", (event) => displayCat(event.data));
    catViewer.render(CATS.currentCat);
    catViewer.addEventListener("onPicClicked", (event) => incrementCounter(event.data));
}

function incrementCounter(catID) {
    let cat = CATS.catList.find(item => item.id === parseInt(catID));
    cat.clickCount = cat.clickCount + 1;
    catViewer.render(cat);
}

function displayCat(catID) {
    let cat = CATS.catList.find(item => item.id === parseInt(catID));
    CATS.currentCat = cat;
    catViewer.render(cat);
}

init();