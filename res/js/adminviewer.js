import * as _ from "../../vendors/underscore/underscore.js";

class AdminViewer extends EventTarget {
    constructor() {
        super();
        this.inputFieldTemplateCompiled = _.template(document.querySelector("#input_admin").innerHTML);
        this.ADMINVIEWEREL = document.querySelector("main .admin_viewer");
        this.addClickListener();
    }

    saveChanges(obj) {
        super.dispatchEvent((function () {
            let e = new Event("onSaveChanges");
            e.data = obj;
            return e;
        })());
    }

    render(cat) {
        let div = document.createElement("DIV");
        div.innerHTML = this.inputFieldTemplateCompiled(cat);
        this.ADMINVIEWEREL.appendChild(div);
    }
}

export default new AdminViewer();