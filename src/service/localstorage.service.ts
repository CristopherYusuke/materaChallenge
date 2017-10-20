import { Injectable }    from '@angular/core';

@Injectable()

export class LocalstorageService {
    constructor(){

    }​
    
    get (params) {
        return JSON.parse(localStorage.getItem(params)) 
    }

    set ({key,data}) {
        localStorage.setItem(key, JSON.stringify(data))
    }

}