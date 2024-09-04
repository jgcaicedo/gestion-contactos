import { ComponentFixture, TestBed } from '@angular/core/testing'; // Importa herramientas para pruebas de componentes en Angular.
import { ContactListComponent } from './contact-list.component'; // Importa el componente a probar.

describe('ContactListComponent', () => {
  let component: ContactListComponent; // Variable para la instancia del componente.
  let fixture: ComponentFixture<ContactListComponent>; // Variable para el fixture del componente.

  beforeEach(async () => {
    // Configura el módulo de pruebas antes de cada prueba.
    await TestBed.configureTestingModule({
      imports: [ContactListComponent] // Declara el componente a probar en el módulo de pruebas.
    })
    .compileComponents(); // Compila el componente y sus dependencias.

    // Crea una instancia del componente y del fixture.
    fixture = TestBed.createComponent(ContactListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges(); // Detecta cambios en el componente después de su creación.
  });

  it('should create', () => {
    // Prueba que el componente se haya creado correctamente.
    expect(component).toBeTruthy();
  });
});
