import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

/* Components */
import { HomeComponent } from '../components/home/home.component';
import { NotFoundComponent } from '../components/not-found/not-found.component';
// import { PublishingComponent } from '../components/publishing/publishing.component';

/*Services*/
import { RepoService } from '../services/repo.service';

const appRoutes: Routes = [
    {pathMatch: 'full', path: '', redirectTo: '/home'},
    {path: 'home', component: HomeComponent}, //, resolve: {publishing: RepoService}
    /*{path: 'charts', component: ChartComponent,  resolve: {chartData: ChartService}},*/

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
