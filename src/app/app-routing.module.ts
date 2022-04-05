import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

const routes: Routes = [
    {
        path: '',
        redirectTo: 'landing-module',
        pathMatch: 'full',
    },
    {
        path: 'landing-module',
        loadChildren: () =>
            import('./modules/landing-module/landing.module').then((m) => m.LandingModule)
    },
    {
        path: '**',
        redirectTo: 'landing-module'
    },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
    providers: [],
})
export class AppRoutingModule {
}
