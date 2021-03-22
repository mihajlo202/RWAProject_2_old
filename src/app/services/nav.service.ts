import { Injectable } from '@angular/core'
import { BehaviorSubject } from 'rxjs'

export class NavService {
    private flagSource = new BehaviorSubject<boolean>(false);
    flagCurrent = this.flagSource.asObservable();

    constructor() {}

    changeFlag(value: boolean)
    {
        this.flagSource.next(value);
    }
}