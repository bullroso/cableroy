import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// servicios
import { SendEmailService } from './services/send-email/send-email.service';

// rutas
import { WEB_ROUTING } from './app.routes';

import { AppComponent } from './app.component';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { CollapseModule } from 'ngx-bootstrap/collapse';
import { HeaderComponent } from './componentes/header/header.component';
import { HomeComponent } from './componentes/internet/internet.component';
import { AgmCoreModule } from '@agm/core';
import {HashLocationStrategy, PathLocationStrategy, LocationStrategy }  from '@angular/common';
import { MatSnackBarModule } from '@angular/material';
import { HttpClientModule, HttpClient} from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// importar el modulo de form
import { FormsModule } from '@angular/forms';
import { LocalizacionContactoComponent } from './componentes/localizacion-contacto/localizacion-contacto.component';
import { ServiciosComponent } from './componentes/servicios/servicios.component';
import { FooterComponent } from './componentes/footer/footer.component';
import { internetmovilComponent } from './componentes/internetmovil/internetmovil.component';
import { EquipoComponent } from './componentes/movil/movil.component';
import { AvisoLegalComponent } from './componentes/aviso-legal/aviso-legal.component'

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    LocalizacionContactoComponent,
    ServiciosComponent,
    FooterComponent,
    internetmovilComponent,
    AvisoLegalComponent,
    EquipoComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    WEB_ROUTING,
    CarouselModule.forRoot(),
    CollapseModule.forRoot(),
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    AgmCoreModule.forRoot({apiKey: 'AIzaSyDvIg4lI55V1r4QwbRFSc8_tQg9vW8tIeE' })
  ],
  providers: [
    {provide: LocationStrategy, useClass: HashLocationStrategy},
    SendEmailService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
