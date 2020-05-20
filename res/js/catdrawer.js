class CatDrawer extends EventTarget {
    constructor() {
        super();
        this.CATDRAWEREL = document.querySelector("main .cat_drawer");
        this.CATDRAWERTEMPLATE = document.querySelector("#catDrawerItemTemplate");
        this.addClickListener();
    }

    addClickListener() {
        this.CATDRAWEREL.addEventListener("click", (event) => {
            super.dispatchEvent((function () {
                let e = new Event("onItemClicked");
                e.data = event.target.id;
                return e;
            })());
        });
    }

    render() {
        let renderCats = function (CATS) {
            this.CATDRAWEREL.innerHTML = "";
            for (let cat of CATS) {
                this.CATDRAWERTEMPLATE.content.querySelector("li").id = cat.id;
                this.CATDRAWERTEMPLATE.content.querySelector("li").textContent = cat.name;
                this.CATDRAWEREL.appendChild(document.importNode(this.CATDRAWERTEMPLATE.content, true));
            }
        };

        super.dispatchEvent((function () {
            let e = new Event("requestCats");
            e.callback = renderCats.bind(this);
            return e;
        }).call(this));
    }
}

export default new CatDrawer();