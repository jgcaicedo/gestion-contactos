import { Component } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { ContactListComponent } from './contact-list/contact-list.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,CommonModule, ReactiveFormsModule, ContactFormComponent, ContactListComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  isContactListVisible = false;
  isContactFormVisible = false;

  showContactList() {
    this.isContactListVisible = true;
    this.isContactFormVisible = false;
  }

  showContactForm() {
    this.isContactListVisible = false;
    this.isContactFormVisible = true;
  }
  
  title = 'gestion-contactos';
}
