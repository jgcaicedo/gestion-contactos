import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { ContactFormComponent } from './contact-form.component';
import { ContactService } from '../contact.service';
import { of } from 'rxjs';

describe('ContactFormComponent', () => {
  let component: ContactFormComponent;
  let fixture: ComponentFixture<ContactFormComponent>;

  beforeEach(async () => {
    const contactServiceStub = {
      getContact: () => of({ nombre: 'John', apellido: 'Doe', celular: '123456789' }),
      updateContact: () => of({}),
      createContact: () => of({})
    };

    await TestBed.configureTestingModule({
      declarations: [ContactFormComponent],
      imports: [ReactiveFormsModule],
      providers: [{ provide: ContactService, useValue: contactServiceStub }]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize the form', () => {
    expect(component.contactForm).toBeTruthy();
    expect(component.contactForm.get('nombre')).toBeTruthy();
  });

  it('should submit the form', () => {
    component.contactForm.setValue({
      nombre: 'John',
      apellido: 'Doe',
      celular: '123456789',
      correo: 'john.doe@example.com',
      direccion: '123 Main St',
      telefono: '987654321'
    });
    component.onSubmit();
    expect(component.contactForm.valid).toBeTrue();
  });
});
