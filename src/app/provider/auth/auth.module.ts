// Angular Imports
import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import {RouterModule} from "@angular/router"
// This Module's Components
import { AuthComponent } from './auth.component';
import { RegisterComponent } from "./register/register.component";
import { SigninComponent } from "./signin/signin.component";
import { SignupComponent } from "./signup/signup.component";

@NgModule({
    imports: [CommonModule, FormsModule, RouterModule

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
