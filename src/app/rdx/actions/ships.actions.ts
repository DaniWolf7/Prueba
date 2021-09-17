import { Injectable } from "@angular/core";
import { Action } from "@ngrx/store";


export const CHANGEPAGE = 'page change'
export const OPENDETAILS = 'open ship details'
export const GETID = 'get id of ship'

export class changePage implements Action{
    type = CHANGEPAGE

    constructor(payload:number){


    }

}

export class openDetails implements Action{
    type = OPENDETAILS
    constructor(payload:object){

    }

}

export type cpActions = changePage