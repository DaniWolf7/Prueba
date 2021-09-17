import { Action } from "@ngrx/store";
import { ShipsComponent } from "../../components/ships/ships.component";
import * as acciones from "../actions/ships.actions"

const firstpage:object = {
    hola: "hola",
    mundo: "mundo"
}

export function pagereducer(state:object= firstpage, action: acciones.cpActions) {
    switch(action.type){
        case acciones.CHANGEPAGE:
            console.log(state)
            return state;

        default:
            return state;
    }

}