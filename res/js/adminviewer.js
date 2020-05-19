import * as _ from "../../vendors/underscore/underscore.js";

class AdminViewer extends EventTarget {
    constructor() {
        super();
        this.inputFieldTemplateCompiled = _.template(document.querySelector("#template_admin").innerHTML);
        this.ADMINVIEWEREL = document.querySelector("main .admin_viewer");
        this.INPUTCONTAINEREL = this.ADMINVIEWEREL.querySelector(".input_admin");
        this.ADMINBUTTONTEMPLATESTRING = '<button id="admin">Admin</button>'; // eslint-disable-line quotes
        this.addClickListener();
    }

    addClickListener() {
        this.ADMINVIEWEREL.querySelector("#admin").addEventListener("click", () => {
            super.dispatchEvent(new Event("onAdminButtonClicked"));
        });
    }

    saveChanges() {
        let obj = this.getInputData();
        super.dispatchEvent((function () {
            let e = new Event("onSaveChanges");
            e.data = obj;
            return e;
        })());
        this.resetView();
    }

    render(cat) {
        this.ADMINVIEWEREL.querySelector("#admin").disabled = true;
        let div = document.createElement("DIV");
        div.innerHTML = this.inputFieldTemplateCompiled(cat);

        this.INPUTCONTAINEREL.innerHTML = "";
        this.INPUTCONTAINEREL.appendChild(div);

        div.querySelector("#admin_cancel").addEventListener("click", this.resetView.bind(this));
        div.querySelector("#admin_save").addEventListener("click", this.saveChanges.bind(this));
    }

    getInputData() {
        return {
            "name": this.INPUTCONTAINEREL.querySelector("#input_name").value,
            "src": this.INPUTCONTAINEREL.querySelector("#input_src").value,
            "clickCount": this.INPUTCONTAINEREL.querySelector("#input_click_count").value
        };
    }

    resetView() {
        this.INPUTCONTAINEREL.innerHTML = "";
        this.ADMINVIEWEREL.querySelector("#admin").disabled = false;
    }
}

export default new AdminViewer();