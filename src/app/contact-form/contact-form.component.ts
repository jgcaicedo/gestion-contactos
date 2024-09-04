import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute, Router, RouterOutlet } from '@angular/router'; // Si necesitas RouterOutlet
import { ContactService } from '../contact.service';
import { Contact } from '../contact.model';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-contact-form',
  standalone: true,
  imports: [ReactiveFormsModule, RouterOutlet], // Asegúrate de importar ReactiveFormsModule aquí
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent {
  contactForm: FormGroup;
  contactId?: number;
  isEditMode = false;

  constructor(
    private fb: FormBuilder,
    private contactService: ContactService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.contactForm = this.fb.group({
      nombre: ['', Validators.required],
      apellido: ['', Validators.required],
      celular: ['', Validators.required],
      correo: ['', [Validators.required, Validators.email]],
      direccion: ['', Validators.required],
      telefono: ['', Validators.required],
    });
  }

  ngOnInit(): void {
    this.contactId = Number(this.route.snapshot.paramMap.get('id'));
    if (this.contactId) {
      this.isEditMode = true;
      this.contactService.getContact(this.contactId).subscribe(contact => {
        this.contactForm.patchValue(contact);
      });
    }
  }

  onSubmit(): void {
    if (this.contactForm.valid) {
      const contactData = this.contactForm.value;
      if (this.isEditMode && this.contactId !== undefined) {
        this.contactService.updateContact(this.contactId, contactData).subscribe(() => {
          this.router.navigate(['/contacts']);
        });
      } else {
        this.contactService.createContact(contactData).subscribe(() => {
          this.router.navigate(['/contacts']);
        });
      }
    }
  }
}
