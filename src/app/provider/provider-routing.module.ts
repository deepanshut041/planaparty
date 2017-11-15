import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { DashboardComponent } from "./dashboard/dashboard.component";

//Authentication Module it contain Forget Password, Reset Password, Email Verification, Login, Signup, Register
import { AuthComponent } from "./auth/auth.component";
import { RegisterComponent } from "./auth/register/register.component";
import { SigninComponent } from "./auth/signin/signin.component";
import { SignupComponent } from "./auth/signup/signup.component";
import { AuthGuard } from './auth/auth-guard.service';
import { VerifyGuard } from "./auth/verify-guard.service";
import { VerifyComponent } from "./auth/verify/verify.component";
import { ForgetComponent } from "./auth/forget/forget.component";
import { ResetComponent } from "./auth/reset/reset.component";

const routes: Routes = [
    {path:'auth', component:AuthComponent,children:[
        {path:'signin', component:SigninComponent},
        {path: 'signup', component:SignupComponent},
        {path: 'verify', component:VerifyComponent,canActivate:[VerifyGuard]},
        {path: 'reset', component:ResetComponent,canActivate: [AuthGuard]},
        {path: 'forget', component:ForgetComponent},
        {path:'register', component:RegisterComponent,canActivate: [AuthGuard] },
        {path:'', redirectTo:'signin'}
        ]},
    {path: 'dashboard', component:DashboardComponent,canActivate: [AuthGuard] },
    {path:'', redirectTo:'dashboard'}
    ];

@NgModule({
    imports:[RouterModule.forChild(routes)],
    exports:[RouterModule]
})

export class ProviderRoutingModule{

}
