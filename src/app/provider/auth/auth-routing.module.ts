import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { RegisterComponent } from "./register/register.component";
import { SigninComponent } from "./signin/signin.component";
import { SignupComponent } from "./signup/signup.component";

const routes: Routes = [
    {path:'signin', component:SigninComponent},
    {path: 'signup', component:SignupComponent},
    {path:'register', component:RegisterComponent},
    {path:'', redirectTo:'signin'}
    ];

@NgModule({
    imports:[RouterModule.forChild(routes)],
    exports:[RouterModule]
})

export class AuthRoutingModule{

}
