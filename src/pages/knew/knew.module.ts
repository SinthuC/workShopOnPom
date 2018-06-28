import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { KnewPage } from './knew';

@NgModule({
  declarations: [
    KnewPage,
  ],
  imports: [
    IonicPageModule.forChild(KnewPage),
  ],
})
export class KnewPageModule {}
