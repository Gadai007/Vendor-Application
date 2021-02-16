import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import {DashboardComponent} from './dashboard/dashboard.component';
import {VendorRequestComponent} from "./vendor-request/vendor-request.component";
import {VendorRegistrationComponent} from "./vendor-registration/vendor-registration.component";
import { CompletedComponent } from "./tables_request/completed/completed.component";
import {PendingComponent  } from "./tables_request/pending/pending.component";
import {  RejectedComponent} from "./tables_request/rejected/rejected.component";

import { VendorUpdateRequestComponent } from "./vendor-update-request/vendor-update-request.component";
import { VendorUpdateUnblockComponent } from "./vendor-update-unblock/vendor-update-unblock.component";
import { CarrierVendorRequestComponent } from "./carrier-vendor-request/carrier-vendor-request.component";
const routes: Routes = [
  {path:'',component:DashboardComponent },
  {path:'request-form',component:VendorRequestComponent},
  {path:'registration-form',component:VendorRegistrationComponent},
  {path:'completed-requests',component:CompletedComponent},
  {path:'pending-requests',component:PendingComponent },
  {path:'rejected-requests', component:RejectedComponent },
  //New Routes
  {path:'vendor-update-requests', component:VendorUpdateRequestComponent },
  {path:'vendor-unblock-requests', component:VendorUpdateUnblockComponent },
  {path:'carrier-vendor-requests', component:CarrierVendorRequestComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
