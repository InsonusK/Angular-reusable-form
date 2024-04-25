import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {ReusableComplexFormModule} from "./reusable-complex-form/reusable-complex-form.module"
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReusableComplexFormModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
