import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { JormPage } from './jorm';

@NgModule({
  declarations: [
    JormPage,
  ],
  imports: [
    IonicPageModule.forChild(JormPage),
  ],
})
export class JormPageModule {}
