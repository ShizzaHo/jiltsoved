import { iMenuItem } from "@/app/interfaces";
import { makeAutoObservable } from "mobx"

class Menu {
    private menuItems: Array<iMenuItem> = [{icon: "", title: ""}];

    constructor() {
        makeAutoObservable(this)
    }

    setMenuItems = (newItems: Array<iMenuItem>) => {
        this.menuItems = newItems;
    }

    getMenuItems = (): Array<iMenuItem> => {
        return this.menuItems;
    }
}

export default new Menu();