import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AuthComponent } from "./auth/auth.component";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { RegisterComponent } from "./auth/register/register.component";
import { SigninComponent } from "./auth/signin/signin.component";
import { SignupComponent } from "./auth/signup/signup.component";
import { AuthGuard } from './auth/auth-guard.service';

const routes: Routes = [
    {path:'auth', component:AuthComponent,children:[
        {path:'signin', component:SigninComponent},
        {path: 'signup', component:SignupComponent},
        {path:'register', component:RegisterComponent,canActivate: [AuthGuard] },
        {path:'', redirectTo:'signin'}
        ]},
    {path: 'dashboard', component:DashboardComponent,canActivate: [AuthGuard] },
    {path:'', redirectTo:'auth'}
    ];

@NgModule({
    imports:[RouterModule.forChild(routes)],
    exports:[RouterModule]
})

export class ProviderRoutingModule{

}
