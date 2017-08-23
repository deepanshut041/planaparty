// Angular Imports
import { NgModule } from '@angular/core';

// This Module's Components
import { ProviderComponent } from './provider.component';
import { AuthModule } from './auth/auth.module';
import { DashboardModule } from './dashboard/dashboard.module';
import { ProviderRoutingModule } from './provider-routing.module';
@NgModule({
    imports: [AuthModule, DashboardModule, ProviderRoutingModule

    ],
    declarations: [
        ProviderComponent,
    ],
    exports: [
        ProviderComponent,
    ]
})
export class ProviderModule {

}
