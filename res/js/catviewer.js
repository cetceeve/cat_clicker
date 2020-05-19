class CatViewer extends EventTarget {
    constructor() {
        super();
        this.VALUETEMPLATE = "Amount of Clicks for {{name}}: {{value}}";
        this.VALUEEL = document.querySelector("main .cat_viewer .value");
        this.CATPICEL = document.querySelector("main .cat_viewer .cat_pic");
        this.addClickListener();
    }

    addClickListener() {
        this.CATPICEL.addEventListener("click", (event) => {
            super.dispatchEvent((function () {
                let e = new Event("onPicClicked");
                e.data = event.target.id;
                return e;
            })());
        });
    }

    render(cat) {
        this.CATPICEL.id = cat.id;
        this.CATPICEL.src = cat.src;
        this.VALUEEL.innerHTML = this.VALUETEMPLATE.replace("{{name}}", cat.name).replace("{{value}}", cat.clickCount);
    }
}

export default new CatViewer();