/*@angular*/
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

/*Components*/
import { AppComponent } from './app.component';
import { NavComponent } from './shared/nav/nav.component';
import { HomeComponent } from './components/home/home.component';
import { IssueComponent } from './components/issue/issue.component';
import { NotFoundComponent } from './components/not-found/not-found.component';

/*Modules*/
import { ChartModule } from 'angular-highcharts';
import { AppRoutingModule } from './app-routing/app-routing.module';

/*Services*/
import { RepoService } from './services/repo.service';

/*Interceptors*/
import { LoaderInterceptor } from './interceptors/loader-interceptor';

@NgModule({
    declarations: [
        AppComponent,
        NavComponent,
        HomeComponent,
        IssueComponent,
        NotFoundComponent,
    ],
    imports: [
        FormsModule,
        ChartModule,
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
