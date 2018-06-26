import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';

import 'rxjs/Rx';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class RepoService implements Resolve<any> {

    constructor(private http: HttpClient) {
    }

    /**
     * Search repository will get data to the homeComponent
     * @param {string} name
     * @returns {Observable<any>}
     */
    searchRepo(name: string) {
        return this.http.get('https://api.github.com/search/repositories?q=' + name)
            .map(response => response)
            .catch((e) => {
                return Observable.throw(`${ e.status } ${ e.statusText }`);
            });
    }

    /**
     * Resolver which will emit data to the issuesComponent
     * @param {ActivatedRouteSnapshot} route
     * @param {RouterStateSnapshot} rstate
     * @returns {Observable<any>}
     */
    resolve(route: ActivatedRouteSnapshot, rstate: RouterStateSnapshot): Observable<any> {
        return this.http.get('https://api.github.com/search/issues?q=repo:' + route.params.name)
            .map(response => response)
            .catch((e) => {
                return Observable.throw(`${ e.status } ${ e.statusText }`);
            });
    }
}
