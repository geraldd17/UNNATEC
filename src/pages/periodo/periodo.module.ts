import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PeriodoPage } from './periodo';

@NgModule({
  declarations: [
    PeriodoPage,
  ],
  imports: [
    IonicPageModule.forChild(PeriodoPage),
  ],
  exports: [
    PeriodoPage
  ]
})
export class PeriodoPageModule {}
