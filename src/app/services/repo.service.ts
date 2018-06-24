import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';

import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';

@Injectable()
export class RepoService {

    constructor(private http: HttpClient) {
    }

    searchRepo(name: string) {
        return this.http.get('https://api.github.com/search/repositories?q=' + name).map(response => response);
    }

    searchIssue(name: string) {
        return this.http.get('https://api.github.com/search/issues?q=repo:' + name).map(response => response);
    }

/*    resolve(route: ActivatedRouteSnapshot, rstate: RouterStateSnapshot): Observable<any> {
        const name = route.paramMap.get(':name');
        return this.http.get('https://api.github.com/search/issues?q=repo:' + name)
            .map(response => response);
    }*/


}
