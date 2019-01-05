import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './componentes/internet/internet.component';
import { LocalizacionContactoComponent } from './componentes/localizacion-contacto/localizacion-contacto.component';
import { ServiciosComponent } from './componentes/servicios/servicios.component';
import { AvisoLegalComponent } from './componentes/internetmovil/internetmovil.component';
import { EquipoComponent } from './componentes/movil/movil.component';

const routes: Routes = [
    {path: 'internet', component: HomeComponent},
    {path: 'servicios', component: ServiciosComponent},
    {path: 'localizacion', component: LocalizacionContactoComponent},
    {path: 'movil', component: EquipoComponent},
    {path: 'internetmovil', component: AvisoLegalComponent},
    {path: '**', redirectTo: 'servicios'}
];

export const WEB_ROUTING = RouterModule.forRoot(routes);
