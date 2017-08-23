// Angular Imports
import { NgModule } from '@angular/core';

// This Module's Components
import { AuthComponent } from './auth.component';
import { RegisterComponent } from "./register/register.component";
import { SigninComponent } from "./signin/signin.component";
import { SignupComponent } from "./signup/signup.component";
import { AuthRoutingModule } from "./auth-routing.module";

@NgModule({
    imports: [AuthRoutingModule

    ],
    declarations: [
        AuthComponent, RegisterComponent, SigninComponent, SignupComponent
    ],
    exports: [
        AuthComponent,
    ]
})
export class AuthModule {

}
