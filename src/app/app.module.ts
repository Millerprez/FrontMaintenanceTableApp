
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { CustomerService } from './customer.service';
import { CustomersComponent } from './customers/customers.component';
import { FormsModule } from '@angular/forms';
import { DataServices } from './dataServices.service';

@NgModule({
  declarations: [
    AppComponent,
    CustomersComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [CustomerService, DataServices],
  bootstrap: [AppComponent]
})
export class AppModule { }
