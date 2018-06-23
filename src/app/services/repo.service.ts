import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import 'rxjs/Rx';

@Injectable()
export class RepoService {

    constructor(private http: HttpClient) {
    }

    searchRepo(name: string) {
        return this.http.get('https://api.github.com/search/repositories?q=' + name).map(response => response);
    }
}
