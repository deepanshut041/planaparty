// Angular Imports
import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";
import { FormsModule,ReactiveFormsModule } from "@angular/forms";
import {RouterModule} from "@angular/router"
import { HttpClientModule } from '@angular/common/http';
// This Module's Components
import { AuthComponent } from './auth.component';
import { RegisterComponent } from "./register/register.component";
import { SigninComponent } from "./signin/signin.component";
import { SignupComponent } from "./signup/signup.component";
import { VerifyComponent } from "./verify/verify.component";
import { ForgetComponent } from "./forget/forget.component";
import { ResetComponent } from "./reset/reset.component";

//This is auth service
import { AuthService } from "./auth.service";

@NgModule({
    imports: [CommonModule, FormsModule, RouterModule,HttpClientModule,ReactiveFormsModule],
    declarations: [
        AuthComponent, RegisterComponent, SigninComponent, SignupComponent, VerifyComponent, ForgetComponent,
        ResetComponent
    ],
    exports: [
        AuthComponent,
    ],
    providers:[ AuthService]
})
export class AuthModule {
}
