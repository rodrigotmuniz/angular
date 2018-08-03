import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { InputPropertyComponent } from './input-property/input-property.component';
import { OutputPropertyComponent } from './output-property/output-property.component';
import { ViewChildPropertyComponent } from './view-child-property/view-child-property.component';

@NgModule({
  declarations: [
    AppComponent,
    DataBindingComponent,
    InputPropertyComponent,
    OutputPropertyComponent,
    ViewChildPropertyComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
  ], 
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
