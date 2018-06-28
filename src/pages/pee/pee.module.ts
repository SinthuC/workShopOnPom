import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PeePage } from './pee';

@NgModule({
  declarations: [
    PeePage,
  ],
  imports: [
    IonicPageModule.forChild(PeePage),
  ],
})
export class PeePageModule {}
