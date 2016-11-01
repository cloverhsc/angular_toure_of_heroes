import { NgModule }         from "@angular/core";

// Router
import { RouterModule, Routes } from "@angular/router";

// Dashboard
import { DashboardComponent } from "./dashboard.component";

import { HeroDetailComponent}    from "./hero_detail.component";
import { HeroesComponent }       from "./heroes.component";

const routes: Routes = [
    { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
    { path: 'dashboard',  component: DashboardComponent },
    { path: 'detail/:id', component: HeroDetailComponent },
    { path: 'heroes',     component: HeroesComponent }
];

@NgModule({
    imports: [ RouterModule.forRoot(routes) ],
    exports: [ RouterModule ]
})

export class AppRoutingModule {}
