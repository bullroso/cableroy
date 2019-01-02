import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './componentes/home/home.component';
import { LocalizacionContactoComponent } from './componentes/localizacion-contacto/localizacion-contacto.component';
import { ServiciosComponent } from './componentes/servicios/servicios.component';
import { AvisoLegalComponent } from './componentes/aviso-legal/aviso-legal.component';
import { EquipoComponent } from './componentes/equipo/equipo.component';

const routes: Routes = [
    {path: 'home', component: HomeComponent},
    {path: 'services', component: ServiciosComponent},
    {path: 'localizacion', component: LocalizacionContactoComponent},
    {path: 'equipo', component: EquipoComponent},
    {path: 'aviso', component: AvisoLegalComponent},
    {path: '**', redirectTo: 'home'}
];

export const WEB_ROUTING = RouterModule.forRoot(routes);
