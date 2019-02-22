import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './componentes/internet/internet.component';
import { LocalizacionContactoComponent } from './componentes/localizacion-contacto/localizacion-contacto.component';
import { ServiciosComponent } from './componentes/servicios/servicios.component';
import { internetmovilComponent } from './componentes/internetmovil/internetmovil.component';
import { EquipoComponent } from './componentes/movil/movil.component';
import { AvisoLegalComponent } from './componentes/aviso-legal/aviso-legal.component'

const routes: Routes = [
    {path: 'internet', component: HomeComponent},
    {path: 'servicios', component: ServiciosComponent},
    {path: 'localizacion', component: LocalizacionContactoComponent},
    {path: 'movil', component: EquipoComponent},
    {path: 'internetmovil', component: internetmovilComponent},
    {path: 'aviso_legal', component: AvisoLegalComponent},
    {path: '**', redirectTo: 'servicios'}
];

export const WEB_ROUTING = RouterModule.forRoot(routes);
