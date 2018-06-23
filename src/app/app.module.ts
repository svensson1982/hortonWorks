/*@angular*/
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
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

@NgModule({
    declarations: [
        AppComponent,
        NavComponent,
        HomeComponent,
        NotFoundComponent,
    ],
    imports: [
        FormsModule,
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        ReactiveFormsModule,
    ],
    providers: [RepoService],
    bootstrap: [AppComponent]
})
export class AppModule {
}
