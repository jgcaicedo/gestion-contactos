import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app.routes';
import { AppComponent } from './app.component';
import { ContactListComponent } from './contact-list/contact-list.component';
import { CommonModule } from '@angular/common';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    
  ],
  imports: [
    AppComponent,
    ContactListComponent,
    ContactFormComponent,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    CommonModule,
  ],
  
})
export class AppModule { }
