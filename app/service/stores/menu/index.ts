import { iMenuItem } from "@/app/interfaces";
import { makeAutoObservable } from "mobx"

class Menu {
    private menuItems: Array<iMenuItem> = [{icon: "", title: ""}];

    constructor() {
        makeAutoObservable(this)

        this.setMenuItems([
            { icon: 'home', title: 'Главная', callbacks: ()=>{alert("123")} },
            { icon: 'message', title: 'Сообщения от УК' },
            { icon: 'home_repair_service', title: 'Услуги от УК' },
            { icon: 'forum', title: 'Общедомовой чат' },
            { icon: 'contacts', title: 'Контакты УК' },
        ]);
    }

    setMenuItems = (newItems: Array<iMenuItem>) => {
        this.menuItems = newItems;
    }

    getMenuItems = (): Array<iMenuItem> => {
        return this.menuItems;
    }
}

export default new Menu();