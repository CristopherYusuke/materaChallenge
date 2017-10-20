
import { Injectable }    from '@angular/core';
import {  Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

@Injectable()

export class GithubService {
    private gitUrl = 'https://api.github.com/';
    
    constructor(private http: Http){

    }​

    getUserDetail (username): Promise<any> {
        return this.http
            .get(this.gitUrl+`users/${username}`)
            .toPromise()
            .then(res => {
                return res.json()
            })
            .catch(this.handleError)
    }

    getUserRepo (username): Promise<[any]> {
        return this.http
            .get(this.gitUrl+`users/${username}/repos`)
            .toPromise()
            .then(res => {
                return res.json()
            })
            .catch(this.handleError)
    }


    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error); // for demo purposes only
        const err = error.json()
        return Promise.reject(err.message || err);
      }
}