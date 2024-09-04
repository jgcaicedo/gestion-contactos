import { NgModule } from '@angular/core'; // Importa el decorador NgModule.
import { RouterModule, Routes } from '@angular/router'; // Importa los módulos necesarios para el enrutamiento.
import { ContactListComponent } from './contact-list/contact-list.component'; // Importa el componente para la lista de contactos.
import { ContactFormComponent } from './contact-form/contact-form.component'; // Importa el componente para el formulario de contacto.

export const routes: Routes = [
  { path: '', redirectTo: '/contacts', pathMatch: 'full' }, // Redirige la ruta vacía a '/contacts'.
  { path: 'contacts', component: ContactListComponent }, // Ruta para el componente de la lista de contactos.
  { path: 'contacts/new', component: ContactFormComponent }, // Ruta para el formulario de contacto en modo de creación.
  { path: 'contacts/edit/:id', component: ContactFormComponent }, // Ruta para el formulario de contacto en modo de edición con un parámetro de ID.
];

@NgModule({
  imports: [RouterModule.forRoot(routes)], // Configura el módulo de enrutamiento con las rutas definidas.
  exports: [RouterModule] // Exporta el RouterModule para que esté disponible en otros módulos.
})
export class AppRoutingModule { } // Exporta el módulo de enrutamiento como AppRoutingModule.
