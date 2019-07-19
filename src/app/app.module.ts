import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';

import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { MyApp } from './app.component';

import { InicioPage } from '../pages/inicio/inicio';
import { PerfilesPage } from '../pages/perfiles/perfiles';
import { PerfilDetallePage } from '../pages/perfil-detalle/perfil-detalle';

import { ContactoPage } from '../pages/contacto/contacto';
import { AcercaPage } from '../pages/acerca/acerca';

import { PlaylistsPage } from '../pages/playlists/playlists';
import { CancionesPage } from '../pages/canciones/canciones';
import { CancionPopoverPage } from '../pages/cancion-popover/cancion-popover';

import { TecnoPlayerComponent } from '../components/tecno-player/tecno-player';

import { PortafoliosPage } from '../pages/portafolios/portafolios';
import { AsignaturasPage } from '../pages/asignaturas/asignaturas';
import { PeriodoPage } from '../pages/periodo/periodo';
import { NotasPage } from '../pages/notas/notas'

@NgModule({
  declarations: [
    MyApp,

    InicioPage,
    PerfilesPage,
    PerfilDetallePage,
    ContactoPage,
    AcercaPage,

    PlaylistsPage,
    CancionesPage,
    CancionPopoverPage,

    TecnoPlayerComponent,

    PortafoliosPage,
    AsignaturasPage,
    PeriodoPage,
    NotasPage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    
    InicioPage,
    PerfilesPage,
    PerfilDetallePage,
    ContactoPage,
    AcercaPage,

    PlaylistsPage,
    CancionesPage,
    CancionPopoverPage,

    TecnoPlayerComponent,
    PortafoliosPage,
    AsignaturasPage,
    PeriodoPage,
    NotasPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler }
  ]
})
export class AppModule {}
