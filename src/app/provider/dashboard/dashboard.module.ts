// Angular Imports
import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";
import { HttpModule } from "@angular/http";
import { FormsModule } from "@angular/forms";
// This Module's Components
import { DashboardComponent } from './dashboard.component';

@NgModule({
    imports: [CommonModule,HttpModule, FormsModule

    ],
    declarations: [
        DashboardComponent,
    ],
    exports: [
        DashboardComponent,
    ]
})
export class DashboardModule {

}
