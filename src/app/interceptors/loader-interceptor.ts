import { Injectable } from '@angular/core';
import {
    HttpEvent,
    HttpRequest,
    HttpHandler,
    HttpResponse,
    HttpInterceptor,
    HttpErrorResponse
} from '@angular/common/http';

import { Observable } from 'rxjs/Observable';

@Injectable()
export class LoaderInterceptor implements HttpInterceptor {
    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        // add class
        const loadingContainer: HTMLElement = document.getElementById('loading') as HTMLElement;
        loadingContainer.style.display = 'block';

        return next.handle(request).do((event: HttpEvent<any>) => {
            // if the event is for http response
            if (event instanceof HttpResponse) {
                // stop our loader here
                loadingContainer.style.display = 'none';
            }

        }, (err: any) => {
            // if any error (not for just HttpResponse) we stop our loader bar
            console.log(err);
            if (err instanceof HttpErrorResponse) {
                console.log(event);
                // stop our loader here
                loadingContainer.style.display = 'none';
            }
        });
    }
}
