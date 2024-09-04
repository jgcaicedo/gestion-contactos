import { Component } from '@angular/core';
import { ContactService } from '../contact.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  imports: [ReactiveFormsModule, RouterOutlet,CommonModule,FormsModule,],
  standalone: true,
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css']
})
export class ContactListComponent {
  contacts: any[] = [];
  selectedContact: any = null;

  constructor(private contactService: ContactService) { }

  ngOnInit() {
    this.loadContacts();
  }

  loadContacts() {
    this.contactService.getContacts().subscribe(data => {
      this.contacts = data;
    });
  }

  deleteContact(id: number) {
    this.contactService.deleteContact(id).subscribe(() => {
      this.loadContacts();
    });
  }

  editContact(contact: any) {
    this.selectedContact = { ...contact }; // Clonar el contacto para editar
  }

  updateContact() {
    this.contactService.updateContact(this.selectedContact, this.selectedContact.id).subscribe(() => {
      this.loadContacts();
      this.selectedContact = null; // Limpiar la selección después de la edición
    });
  }

  cancelEdit() {
    this.selectedContact = null; // Cancelar la edición
  }
}

