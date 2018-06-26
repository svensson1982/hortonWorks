import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

/* Components */
import { HomeComponent } from '../components/home/home.component';
import { IssueComponent } from '../components/issue/issue.component';
import { NotFoundComponent } from '../components/not-found/not-found.component';

/*Services*/
import { RepoService } from '../services/repo.service';

const appRoutes: Routes = [
    {pathMatch: 'full', path: '', redirectTo: '/home'},
    {path: 'home', component: HomeComponent},
    {path: 'issue/:name',  component: IssueComponent, resolve: {issueData: RepoService}},
    {path: '**', redirectTo: '/not-found'},
    {path: 'not-found', component: NotFoundComponent}

];

@NgModule({
    imports: [
        RouterModule.forRoot(appRoutes)
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule {
}
