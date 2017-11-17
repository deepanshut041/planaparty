// Angular Imports
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AngularFireAuthModule } from "angularfire2/auth";
import { AngularFireDatabaseModule } from "angularfire2/database";

// This Module's Components
import { ProviderComponent } from './provider.component';
import { AuthModule } from './auth/auth.module';
import { DashboardModule } from './dashboard/dashboard.module';
import { ProviderRoutingModule } from './provider-routing.module';


import { AuthGuard } from './auth/auth-guard.service';
import { VerifyGuard } from "./auth/verify-guard.service";
@NgModule({
    imports: [AuthModule, DashboardModule, ProviderRoutingModule, HttpClientModule,
        FormsModule, ReactiveFormsModule,AngularFireAuthModule,AngularFireDatabaseModule

    ],
    declarations: [
        ProviderComponent,
    ],
    exports: [
        ProviderComponent,
    ],
    providers:[AuthGuard, VerifyGuard]
})
export class ProviderModule {

}
