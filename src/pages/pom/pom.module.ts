import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PomPage } from './pom';

@NgModule({
  declarations: [
    PomPage,
  ],
  imports: [
    IonicPageModule.forChild(PomPage),
  ],
})
export class PomPageModule {}
