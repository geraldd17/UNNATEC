import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AsignaturasPage } from './asignaturas';

@NgModule({
  declarations: [
    AsignaturasPage,
  ],
  imports: [
    IonicPageModule.forChild(AsignaturasPage),
  ],
  exports: [
    AsignaturasPage
  ]
})
export class AsignaturasPageModule {}
