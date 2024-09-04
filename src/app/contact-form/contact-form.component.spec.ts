import { ComponentFixture, TestBed } from '@angular/core/testing'; // Importa las herramientas necesarias para probar el componente.
import { ReactiveFormsModule } from '@angular/forms'; // Importa el módulo necesario para trabajar con formularios reactivos.
import { ContactFormComponent } from './contact-form.component'; // Importa el componente que será probado.
import { ContactService } from '../contact.service'; // Importa el servicio que el componente utiliza.
import { of } from 'rxjs'; // Importa 'of' para crear observables simulados en las pruebas.

describe('ContactFormComponent', () => {
  let component: ContactFormComponent; // Declara una variable para el componente que será probado.
  let fixture: ComponentFixture<ContactFormComponent>; // Declara una variable para la instancia del componente.

  beforeEach(async () => {
    // Configura un servicio de contacto simulado para usar en las pruebas.
    const contactServiceStub = {
      getContact: () => of({ nombre: 'John', apellido: 'Doe', celular: '123456789' }), // Simula el método para obtener un contacto.
      updateContact: () => of({}), // Simula el método para actualizar un contacto.
      createContact: () => of({}) // Simula el método para crear un nuevo contacto.
    };

    // Configura el módulo de pruebas con el componente y las dependencias necesarias.
    await TestBed.configureTestingModule({
      declarations: [ContactFormComponent], // Declara el componente que será probado.
      imports: [ReactiveFormsModule], // Importa el módulo de formularios reactivos.
      providers: [{ provide: ContactService, useValue: contactServiceStub }] // Usa el servicio simulado en lugar del real.
    })
    .compileComponents(); // Compila los componentes.
  });

  beforeEach(() => {
    // Crea una instancia del componente y su fixture.
    fixture = TestBed.createComponent(ContactFormComponent);
    component = fixture.componentInstance; // Obtiene la instancia del componente.
    fixture.detectChanges(); // Detecta los cambios en el componente.
  });

  it('should create', () => {
    // Prueba que el componente se crea correctamente.
    expect(component).toBeTruthy();
  });

  it('should initialize the form', () => {
    // Prueba que el formulario se inicializa correctamente y tiene el control 'nombre'.
    expect(component.contactForm).toBeTruthy();
    expect(component.contactForm.get('nombre')).toBeTruthy();
  });

  it('should submit the form', () => {
    // Establece valores en el formulario y simula el envío.
    component.contactForm.setValue({
      nombre: 'John',
      apellido: 'Doe',
      celular: '123456789',
      correo: 'john.doe@example.com',
      direccion: '123 Main St',
      telefono: '987654321'
    });
    component.onSubmit(); // Llama al método de envío del formulario.
    expect(component.contactForm.valid).toBeTrue(); // Verifica que el formulario es válido después de enviarlo.
  });
});
