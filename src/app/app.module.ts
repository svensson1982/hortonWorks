/*@angular*/
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

/*Components*/
import { AppComponent } from './app.component';
import { NavComponent } from './shared/nav/nav.component';
import { HomeComponent } from './components/home/home.component';
import { NotFoundComponent } from './components/not-found/not-found.component';

/*Modules*/
import { AppRoutingModule } from './app-routing/app-routing.module';

/*Services*/
import { RepoService } from './services/repo.service';
import { IssueComponent } from './components/issue/issue.component';

/*Interceptors*/
import { LoaderInterceptor } from './interceptors/loader-interceptor';

@NgModule({
    declarations: [
        AppComponent,
        NavComponent,
        HomeComponent,
        NotFoundComponent,
        IssueComponent,
    ],
    imports: [
        FormsModule,
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        ReactiveFormsModule,
    ],
    providers: [
        RepoService,
        {provide: HTTP_INTERCEPTORS, useClass: LoaderInterceptor, multi: true},
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
