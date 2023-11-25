import { makeAutoObservable } from "mobx"
import menu from "./stores/menu";

class Service {
    constructor() {
        makeAutoObservable(this)
    }

    getMenu() {
        return menu;
    }
    
}

export default new Service();