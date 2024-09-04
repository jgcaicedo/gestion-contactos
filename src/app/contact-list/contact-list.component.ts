import { Component } from '@angular/core'; // Importa el decorador de componente de Angular.
import { ContactService } from '../contact.service'; // Importa el servicio que maneja los datos de contactos.
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; // Importa los módulos necesarios para trabajar con formularios.
import { RouterOutlet } from '@angular/router'; // Importa RouterOutlet para el enrutamiento.
import { CommonModule } from '@angular/common'; // Importa CommonModule que proporciona funcionalidades comunes.

@Component({
  imports: [ReactiveFormsModule, RouterOutlet, CommonModule, FormsModule], // Importa módulos necesarios en el componente standalone.
  standalone: true, // Marca el componente como standalone (independiente), no requiere un módulo Angular adicional.
  selector: 'app-contact-list', // Selector para usar el componente en plantillas HTML.
  templateUrl: './contact-list.component.html', // Ruta del archivo de plantilla HTML del componente.
  styleUrls: ['./contact-list.component.css'] // Ruta del archivo de estilos CSS del componente.
})
export class ContactListComponent {
  contacts: any[] = []; // Arreglo para almacenar la lista de contactos.
  selectedContact: any = null; // Variable para almacenar el contacto seleccionado para edición.

  constructor(private contactService: ContactService) { } // Inyecta el servicio de contactos en el componente.

  ngOnInit() {
    this.loadContacts(); // Carga los contactos cuando el componente se inicializa.
  }

  loadContacts() {
    this.contactService.getContacts().subscribe(data => {
      this.contacts = data; // Asigna los contactos obtenidos del servicio a la variable contacts.
    });
  }

  deleteContact(id: number) {
    this.contactService.deleteContact(id).subscribe(() => {
      this.loadContacts(); // Vuelve a cargar los contactos después de eliminar uno.
    });
  }

  editContact(contact: any) {
    this.selectedContact = { ...contact }; // Clona el contacto seleccionado para poder editarlo.
  }

  updateContact() {
    this.contactService.updateContact(this.selectedContact, this.selectedContact.id).subscribe(() => {
      this.loadContacts(); // Vuelve a cargar los contactos después de actualizar uno.
      this.selectedContact = null; // Limpia la selección del contacto después de la edición.
    });
  }

  cancelEdit() {
    this.selectedContact = null; // Cancela la edición y limpia la selección del contacto.
  }
}
