import { Component } from '@angular/core'; // Importa el decorador Component para definir el componente.
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms'; // Importa las herramientas necesarias para trabajar con formularios reactivos.
import { ActivatedRoute, Router, RouterOutlet } from '@angular/router'; // Importa herramientas para el enrutamiento.
import { ContactService } from '../contact.service'; // Importa el servicio de contacto.


@Component({
  selector: 'app-contact-form', // Selector del componente para usar en plantillas.
  standalone: true, // Indica que el componente es autónomo y no requiere un módulo específico.
  imports: [ReactiveFormsModule, RouterOutlet], // Importa ReactiveFormsModule para formularios y RouterOutlet si es necesario.
  templateUrl: './contact-form.component.html', // Ruta al archivo de plantilla HTML del componente.
  styleUrls: ['./contact-form.component.css'] // Ruta al archivo de estilos CSS del componente.
})
export class ContactFormComponent {
  contactForm: FormGroup; // Define un formulario reactivo.
  contactId?: number; // Variable opcional para almacenar el ID del contacto, si está en modo edición.
  isEditMode = false; // Indica si el componente está en modo edición o creación.

  constructor(
    private fb: FormBuilder, // Inyecta el FormBuilder para construir el formulario.
    private contactService: ContactService, // Inyecta el servicio de contacto para interactuar con la API.
    private route: ActivatedRoute, // Inyecta ActivatedRoute para acceder a parámetros de la ruta.
    private router: Router // Inyecta Router para navegar a diferentes rutas.
  ) {
    // Inicializa el formulario reactivo con los controles y validaciones.
    this.contactForm = this.fb.group({
      nombre: ['', Validators.required], // Campo obligatorio para el nombre.
      apellido: ['', Validators.required], // Campo obligatorio para el apellido.
      celular: ['', Validators.required], // Campo obligatorio para el celular.
      correo: ['', [Validators.required, Validators.email]], // Campo obligatorio para el correo con validación de formato de email.
      direccion: ['', Validators.required], // Campo obligatorio para la dirección.
      telefono: ['', Validators.required], // Campo obligatorio para el teléfono.
    });
  }

  ngOnInit(): void {
    // Método que se ejecuta al inicializar el componente.
    this.contactId = Number(this.route.snapshot.paramMap.get('id')); // Obtiene el ID del contacto desde los parámetros de la ruta.
    if (this.contactId) {
      this.isEditMode = true; // Activa el modo edición si hay un ID.
      this.contactService.getContact(this.contactId).subscribe(contact => {
        // Obtiene los datos del contacto y actualiza el formulario con esos datos.
        this.contactForm.patchValue(contact);
      });
    }
  }

  onSubmit(): void {
    // Método que se llama al enviar el formulario.
    if (this.contactForm.valid) { // Verifica si el formulario es válido.
      const contactData = this.contactForm.value; // Obtiene los valores del formulario.
      if (this.isEditMode && this.contactId !== undefined) {
        // Si está en modo edición y el ID está definido, actualiza el contacto.
        this.contactService.updateContact(this.contactId, contactData).subscribe(() => {
          this.router.navigate(['/contacts']); // Navega a la lista de contactos después de actualizar.
        });
      } else {
        // Si está en modo creación, crea un nuevo contacto.
        this.contactService.createContact(contactData).subscribe(() => {
          this.router.navigate(['/contacts']); // Navega a la lista de contactos después de crear.
        });
      }
    }
  }
}
