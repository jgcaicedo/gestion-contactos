import { NgModule } from '@angular/core'; // Importa el decorador NgModule.
import { BrowserModule } from '@angular/platform-browser'; // Importa el módulo para la compatibilidad con navegadores.
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; // Importa módulos para formularios.
import { AppRoutingModule } from './app.routes'; // Importa el módulo de enrutamiento de la aplicación.
import { AppComponent } from './app.component'; // Importa el componente raíz de la aplicación.
import { ContactListComponent } from './contact-list/contact-list.component'; // Importa el componente para la lista de contactos.
import { CommonModule } from '@angular/common'; // Importa el módulo con directivas comunes de Angular.
import { ContactFormComponent } from './contact-form/contact-form.component'; // Importa el componente para el formulario de contacto.

@NgModule({
  declarations: [
   
  ],
  imports: [ AppComponent, // Declara el componente raíz.
    ContactListComponent, // Declara el componente de la lista de contactos.
    ContactFormComponent, // Declara el componente del formulario de contacto.
    BrowserModule, // Importa el módulo del navegador.
    FormsModule, // Importa el módulo de formularios.
    ReactiveFormsModule, // Importa el módulo de formularios reactivos.
    AppRoutingModule, // Importa el módulo de enrutamiento.
    CommonModule, // Importa el módulo con directivas comunes.
  ],
  providers: [
    // Puedes agregar proveedores aquí si es necesario.
  ],
  bootstrap: [] // Define el componente raíz para el arranque de la aplicación.
})
export class AppModule { }
