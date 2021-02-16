import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ChartsModule } from 'ng2-charts';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { AsideComponent } from './aside/aside.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { WrapperComponent } from './wrapper/wrapper.component';
import { ContentWrapperComponent } from './content-wrapper/content-wrapper.component';
import { OtherComponentComponent } from './other-component/other-component.component';
import { VendorRequestComponent } from './vendor-request/vendor-request.component';
import {FormsModule} from '@angular/forms';
import { VendorRegistrationComponent } from './vendor-registration/vendor-registration.component';
import {MatStepperModule} from '@angular/material/stepper';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MainContentComponent } from './main-content/main-content.component';
import { AppRoutingModule } from './app-routing.module';
import { CompletedComponent } from './tables_request/completed/completed.component';
import { PendingComponent } from './tables_request/pending/pending.component';
import { RejectedComponent } from './tables_request/rejected/rejected.component';
import { LoginComponentComponent } from './login-component/login-component.component';
import { VendoComponent } from './vendo/vendo.component';
import { VendorUpdateRequestComponent } from './vendor-update-request/vendor-update-request.component';
import { VendorUpdateUnblockComponent } from './vendor-update-unblock/vendor-update-unblock.component';
import { CarrierVendorRequestComponent } from './carrier-vendor-request/carrier-vendor-request.component';

const material= [
  MatStepperModule
];
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    AsideComponent,
    NavBarComponent,
    WrapperComponent,
    ContentWrapperComponent,
    OtherComponentComponent,
    VendorRequestComponent,
    VendorRegistrationComponent,
    DashboardComponent,
    MainContentComponent,
    CompletedComponent,
    PendingComponent,
    RejectedComponent,
    LoginComponentComponent,
    VendoComponent,
    VendorUpdateRequestComponent,
    VendorUpdateUnblockComponent,
    CarrierVendorRequestComponent,

  ],
  imports: [
    BrowserModule,
    ChartsModule,
    BrowserAnimationsModule,
    FormsModule,
    MatStepperModule,
    AppRoutingModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
